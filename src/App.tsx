import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Venue from './components/Venue';
import VideosSection from './components/VideosSection';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConferenceHighlights from './components/ConferenceHighlights';
import PSASection from './components/PSASection';
import OpportunitiesAndRegistration from './components/OpportunitiesAndRegistration';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <ConferenceHighlights />
      <PSASection />
      <Speakers />
      <Agenda />
      <OpportunitiesAndRegistration />
      <Venue />
      <VideosSection />
      <Registration />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;