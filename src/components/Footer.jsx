import React from 'react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  Heart,
  ChevronUp 
} from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from './SocialIcons';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo">
              <div className="footer-logo-box">
                <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Harija Labs" className="footer-logo-img" />
              </div>
              <div className="footer-brand-text">
                <span className="brand-title">HARIJA<span className="text-gradient">LABS</span></span>
                <span className="brand-tagline">{COMPANY_INFO.tagline}</span>
              </div>
            </a>
            <p className="footer-bio">
              Empowering businesses through autonomous AI agents, intelligent workflow automation, and production-ready full-stack software—while nurturing world-class AI engineers at Harija Academy.
            </p>

            {/* Social Links */}
            <div className="footer-social-links">
              <a
                href={COMPANY_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Instagram Page (@er.harivibes)"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp-social"
                title="WhatsApp Direct"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Harija AI Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Harija AI Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">AI Agent Development</a></li>
              <li><a href="#services">Agentic AI Workflows</a></li>
              <li><a href="#services">Business Process Automation</a></li>
              <li><a href="#services">Enterprise RAG Systems</a></li>
              <li><a href="#services">FastAPI & Python Backend</a></li>
              <li><a href="#services">React.js Frontend Engineering</a></li>
              <li><a href="#services">Cloud & MLOps Infrastructure</a></li>
            </ul>
          </div>

          {/* Col 3: Harija Academy Courses */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Harija Academy</h4>
            <ul className="footer-links-list">
              <li><a href="#academy">LangChain & LangGraph</a></li>
              <li><a href="#academy">Advanced RAG & AI Agents</a></li>
              <li><a href="#academy">LLM Engineering & Fine-Tuning</a></li>
              <li><a href="#academy">MLOps & LLMOps in Production</a></li>
              <li><a href="#academy">Python for AI & Data Science</a></li>
              <li><a href="#academy">Machine Learning & Deep Learning</a></li>
              <li><a href="#academy">Portfolio Capstone Projects</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Contact */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Connect</h4>
            <ul className="footer-contact-details">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-wa-link"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp: {COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <Mail size={16} />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>

            <div className="footer-cta-pill">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm w-full"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. {COMPANY_INFO.tagline}
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
