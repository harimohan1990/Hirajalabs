import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('services');
  const [formData, setFormData] = useState({
    name: '',
    topic: 'AI Agent Development',
    message: ''
  });

  const topicsServices = [
    'AI Agent Development',
    'Agentic AI Workflows',
    'Business Process Automation',
    'RAG & Knowledge Bases',
    'FastAPI & Python Backend',
    'React.js Frontend Development',
    'AWS Cloud & MLOps Infrastructure'
  ];

  const topicsAcademy = [
    'Generative AI, LangChain & LangGraph',
    'Advanced RAG & AI Agents',
    'LLM Engineering & Fine-Tuning',
    'MLOps & LLMOps in Production',
    'Python Programming for AI',
    'Corporate Team AI Upskilling'
  ];

  const activeTopics = inquiryType === 'services' ? topicsServices : topicsAcademy;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLaunchWhatsApp = (e) => {
    e.preventDefault();
    let text = "";
    if (inquiryType === 'services') {
      text = `Hi Harija Labs, my name is ${formData.name || 'a prospective client'}. I am interested in your AI Services regarding "${formData.topic}". ${formData.message ? `Details: ${formData.message}` : "I would like to discuss a potential project."}`;
    } else {
      text = `Hi Harija Academy, my name is ${formData.name || 'a prospective student'}. I would like to inquire about training in "${formData.topic}". ${formData.message ? `Notes: ${formData.message}` : "Please share the syllabus and upcoming batch details."}`;
    }

    const url = getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Have an AI Idea? <br />
            <span className="text-gradient">Let's Build It Together.</span>
          </h2>
          <p className="section-description">
            Whether you want to automate enterprise workflows with autonomous AI agents or enroll in Harija Academy, our team responds swiftly on WhatsApp.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact & Info */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">Direct Communication Channels</h3>
              <p className="contact-card-sub">
                We believe in zero-friction collaboration. Connect with our engineering leads directly.
              </p>

              <div className="contact-items-list">
                {/* Primary WhatsApp Card */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item highlight-wa"
                >
                  <div className="channel-icon-box wa">
                    <MessageSquare size={22} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Official WhatsApp (Instant Response)</span>
                    <strong className="channel-val">{COMPANY_INFO.phone}</strong>
                    <span className="channel-note">Click to open chat directly</span>
                  </div>
                  <ArrowRight size={18} className="channel-arrow" />
                </a>

                {/* Alternate / Secondary Phone */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Direct Line / Alt Contact</span>
                    <strong className="channel-val">{COMPANY_INFO.altPhone}</strong>
                  </div>
                </div>

                {/* Email */}
                <a href={`mailto:${COMPANY_INFO.email}`} className="contact-channel-item">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Email Inquiries</span>
                    <strong className="channel-val">{COMPANY_INFO.email}</strong>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Headquarters</span>
                    <strong className="channel-val">{COMPANY_INFO.location}</strong>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="guarantee-box">
                <Clock size={16} className="text-cyan" />
                <span>Fast turnaround: Typically replies within 1 hour during business hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Inquiry Form */}
          <div className="contact-form-col">
            <div className="inquiry-form-card glass-card">
              <div className="form-header">
                <span className="form-badge">Interactive Project Planner</span>
                <h3>Initiate WhatsApp Discussion</h3>
                <p>Customize your inquiry below to launch WhatsApp with a prefilled message.</p>
              </div>

              {/* Inquiry Type Selector */}
              <div className="inquiry-toggle-row">
                <button
                  type="button"
                  className={`toggle-tab ${inquiryType === 'services' ? 'active' : ''}`}
                  onClick={() => {
                    setInquiryType('services');
                    setFormData((prev) => ({ ...prev, topic: topicsServices[0] }));
                  }}
                >
                  Harija AI (Services & Consulting)
                </button>
                <button
                  type="button"
                  className={`toggle-tab ${inquiryType === 'academy' ? 'active' : ''}`}
                  onClick={() => {
                    setInquiryType('academy');
                    setFormData((prev) => ({ ...prev, topic: topicsAcademy[0] }));
                  }}
                >
                  Harija Academy (Training & Courses)
                </button>
              </div>

              <form onSubmit={handleLaunchWhatsApp} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="name-input">Your Name or Organization</label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    placeholder="e.g. Alex / TechCorp Innovations"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="topic-select">Service or Program of Interest</label>
                  <select
                    id="topic-select"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {activeTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message-input">Brief Project Overview or Questions (Optional)</label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows="3"
                    placeholder="Describe your current tech stack, timeline, or training goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Primary WhatsApp Action Button */}
                <button type="submit" className="btn btn-whatsapp submit-wa-btn">
                  <MessageSquare size={20} />
                  <span>Launch WhatsApp Chat (+91 63666 53022)</span>
                  <ArrowRight size={18} />
                </button>

                <p className="form-privacy-note">
                  <ShieldCheck size={14} />
                  <span>Opens WhatsApp directly with your pre-configured inquiry in a new browser tab.</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
