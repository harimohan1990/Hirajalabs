import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={handleLinkClick}>
          <div className="logo-icon-wrapper">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Harija Labs Logo" className="logo-img" />
            <div className="logo-ambient-glow"></div>
          </div>
          <div className="brand-text">
            <span className="brand-name">
              HARIJA<span className="brand-accent">LABS</span>
            </span>
            <span className="brand-sub">AI & Engineering</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action WhatsApp Button */}
        <div className="nav-actions">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp nav-cta"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare size={17} className="btn-icon" />
            <span className="cta-text">WhatsApp Us</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} className="arrow-icon" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mobile-wa-btn"
              onClick={handleLinkClick}
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp (+91 63666 53022)</span>
            </a>

            <div className="mobile-drawer-tagline">
              <Sparkles size={14} className="sparkle-icon" />
              <span>Building Intelligence. Empowering People.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
