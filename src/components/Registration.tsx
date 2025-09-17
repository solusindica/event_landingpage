import React, { useEffect, useState } from "react";

type Quote = {
  tier: string;
  base_rupees: number;
  discount_rupees: number;
  final_rupees: number;
  coupon_valid: boolean;
};

const currency = (n: number) =>
  `₹${Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

const RegisterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    type: "",            // for conditional fields only; pricing is not type-based
    college: "",
    neetScore: "",
    businessName: "",
    visitorPurpose: "",
    roleName:"",
    practiceField: "",
    coupon: "",
  });

  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  const [isGroup, setIsGroup] = useState(false);
  const [groupMembers, setGroupMembers] = useState([
  { fullName: "", email: "", phone: "", type: "" }
  ]);

  const groupPricePerMember = (count: number) => {
  const base = 1000;
  if (count >= 11) return 300; // 70% off
  if (count >= 5) return 400;  // 60% off
  return base;                 // no discount
};

const addMember = () => {
  setGroupMembers([
    ...groupMembers,
    { fullName: "", email: "", phone: "", type: "" }
  ]);
};

const handleMemberChange = (
  index: number,
  field: keyof typeof groupMembers[0],
  value: string
) => {
  const updated = [...groupMembers];
  updated[index][field] = value;
  setGroupMembers(updated);
};




  // get initial quote (no coupon)
  useEffect(() => {
    fetch("https://reg-page-backend.onrender.com/payments/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coupon: null }),
    })
      .then((r) => r.json())
      .then((q) => setQuote(q))
      .catch(console.error);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const applyCoupon = async () => {
    const res = await fetch("https://reg-page-backend.onrender.com/payments/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coupon: formData.coupon }),
    });
    const q = await res.json();
    setQuote(q);
    if (!q.coupon_valid && formData.coupon.trim()) {
      alert("Invalid coupon code");
    }
  };

  const startPayment = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const body: any = {
      coupon: formData.coupon || null,
    };

    if (isGroup) {
      body.group_members = groupMembers.map((m) => ({
        name: m.fullName,
        email: m.email,
        //college: m.college || null,
        type: m.type || null,
      }));
    } else {
      body.name = formData.fullName;
      body.email = formData.email;
      body.college = formData.college;
      body.type = formData.type;
    }

    console.log("Request body:", body); // 👀 debug log

    const res = await fetch("https://reg-page-backend.onrender.com/payments/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
;

    const data = await res.json();
    if (data.detail || data.error) {
      alert(data.detail || data.error);
      setLoading(false);
      return;
    }

    // ✅ FREE coupon (single registration only)
    if (!isGroup && data.free_coupon) {
      alert("Free registration successful 🎉");

      await fetch("https://reg-page-backend.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          paymentId: "FREECOUPON",
          paidAmount: 0,
          tier: "FREE",
        }),
      });

      alert("Registration Completed ✅");
      setLoading(false);
      return;
    }

    // ✅ Paid flow
    if (data.display) setQuote(data.display);

    const options = {
      key: data.key,
      amount: data.amount, // in paise
      currency: "INR",
      name: "Conference 2025",
      description: isGroup ? "Group Registration" : "Conference Registration",
      order_id: data.order.id,
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      handler: async (response: any) => {
        // 🔹 Build verification payload
        let verifyBody: any;
        if (isGroup) {
          verifyBody = { ...response, group_members: groupMembers };
        } else {
          verifyBody = { ...response, ...formData };
        }

        const verifyRes = await fetch(
          "https://reg-page-backend.onrender.com/payments/verify-payment",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(verifyBody),
          }
        );

        const verifyData = await verifyRes.json();
        if (verifyRes.ok && verifyData.status === "success") {
          alert("Payment successful 🎉");

          // 🔹 Save to DB
          if (isGroup) {
            for (const m of groupMembers) {
              await fetch("https://reg-page-backend.onrender.com/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...m,
                  paymentId: response.razorpay_payment_id,
                  paidAmount: groupPricePerMember(groupMembers.length),
                  tier: "Group",
                }),
              });
            }
            alert("All group members registered ✅");
          } else {
            await fetch("https://reg-page-backend.onrender.com/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formData,
                paymentId: response.razorpay_payment_id,
                paidAmount: quote?.final_rupees,
                tier: quote?.tier,
              }),
            });
            alert("Registration Completed ✅");
          }
        } else {
          alert("Payment verification failed ❌");
        }
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.on("payment.failed", (resp: any) => {
      console.error(resp);
      alert("Payment failed or cancelled.");
    });
    rzp.open();
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};



  return (
    <section
  id="register"
  className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-6"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-start">
    {/* Right – Form */}
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register Now</h2>
      <form className="space-y-4" onSubmit={startPayment}>
        
        {/* Group Registration Toggle */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isGroup}
            onChange={(e) => setIsGroup(e.target.checked)}
          />
          Group Registration
        </label>

        {/* Conditional Form */}
        {isGroup ? (
          <div className="space-y-4">
            {groupMembers.map((m, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 border p-3 rounded"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={m.fullName}
                  onChange={(e) =>
                    handleMemberChange(i, "fullName", e.target.value)
                  }
                  className="p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={m.email}
                  onChange={(e) =>
                    handleMemberChange(i, "email", e.target.value)
                  }
                  className="p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={m.phone}
                  onChange={(e) =>
                    handleMemberChange(i, "phone", e.target.value)
                  }
                  className="p-2 border rounded"
                  required
                />
                <select
                  value={m.type}
                  onChange={(e) =>
                    handleMemberChange(i, "type", e.target.value)
                  }
                  className="p-2 border rounded"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="student">Student</option>
                  <option value="business">Business</option>
                  <option value="visitor">Visitor</option>
                  <option value="practitioner">Practitioner</option>
                  <option value="Organizer">Organizer</option>
                </select>
              </div>
            ))}

            <button
              type="button"
              onClick={addMember}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              + Add Member
            </button>
          </div>
        ) : (
          <>
            {/* Single Registration Fields */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            {/* Type (for extra fields only) */}
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Type</option>
              <option value="student">Student</option>
              <option value="business">Business</option>
              <option value="visitor">Visitor</option>
              <option value="practitioner">Practitioner</option>
              <option value="Organizer">Organizer </option>
            </select>

            {formData.type === "student" && (
              <>
                <input
                  type="text"
                  name="college"
                  placeholder="College Name"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
                <div>
                  <label className="block text-sm p-3 font-medium text-blue-900">
                    Upload your ID
                  </label>
                  <input
                    type="file"
                    name="studentId"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData((prev) => ({
                          ...prev,
                          studentId: file,
                        }));
                      }
                    }}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
              </>
            )}

            {formData.type === "business" && (
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            )}

            {formData.type === "Organizer" && (
              <input
                type="text"
                name="Role"
                placeholder="Role"
                value={formData.roleName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            )}

            {formData.type === "visitor" && (
              <input
                type="text"
                name="visitorPurpose"
                placeholder="Purpose of Visit"
                value={formData.visitorPurpose}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            )}

            {formData.type === "practitioner" && (
              <input
                type="text"
                name="practiceField"
                placeholder="Field of Practice"
                value={formData.practiceField}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            )}

            {/* Coupon */}
            <div className="flex gap-2">
              <input
                type="text"
                name="coupon"
                placeholder="Coupon Code (Optional)"
                value={formData.coupon}
                onChange={handleChange}
                className="flex-1 p-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </>
        )}

        {/* Live price box */}
        <div className="bg-gray-50 border rounded-lg p-3">
          {isGroup ? (
            <>
              <div className="text-sm">
                Group Size: <b>{groupMembers.length}</b>
              </div>
              <div className="text-sm">
                Per Member: <b>₹{groupPricePerMember(groupMembers.length)}</b>
              </div>
              <div className="text-lg font-semibold text-indigo-700">
                Total Payable: ₹
                {groupPricePerMember(groupMembers.length) *
                  groupMembers.length}
              </div>
            </>
          ) : (
            <>
              <div className="text-sm text-gray-600">
                Tier: <b>{quote?.tier ?? "—"}</b>
              </div>
              <div className="text-sm">
                Base: <b>{quote ? currency(quote.base_rupees) : "—"}</b>
              </div>
              <div className="text-sm">
                Discount: <b>-{quote ? currency(quote.discount_rupees) : "—"}</b>
              </div>
              <div className="text-lg font-semibold text-indigo-700">
                Payable: {quote ? currency(quote.final_rupees) : "—"}
              </div>
            </>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || (!isGroup && (!formData.type || !quote))}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          {loading
            ? "Processing..."
            : isGroup
            ? "Proceed to Group Payment"
            : "Proceed to Payment"}
        </button>
      </form>
    </div>
  </div>
</section>
  )
};

export default RegisterSection;