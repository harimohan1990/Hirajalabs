import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Academy from './components/Academy';
import WhyChooseUs from './components/WhyChooseUs';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

export default function App() {
  return (
    <div className="app-root">
      {/* Fixed Sticky Header Navbar */}
      <Navbar />

      <main className="main-content">
        {/* Hero Section with Live Agent Visualizer & 3D Neural Core */}
        <Hero />

        {/* Division 1: Harija AI Services & Consulting */}
        <Services />

        {/* Division 2: Harija Academy Practical AI Training */}
        <Academy />

        {/* Why Choose Harija Labs & Target Audiences */}
        <WhyChooseUs />

        {/* Battle-Tested Technologies */}
        <Technologies />

        {/* About Harija Labs & Verified Founder Background */}
        <About />

        {/* Interactive WhatsApp Project Inquiry & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom-Right WhatsApp Quick Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
