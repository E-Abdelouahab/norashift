import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Framework from './components/Framework';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Framework />
      <Services />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
