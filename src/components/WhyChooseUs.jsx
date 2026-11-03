import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  TrendingUp, 
  BookOpenCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Users2
} from 'lucide-react';
import { WHY_CHOOSE_US, TARGET_AUDIENCES, getWhatsAppUrl } from '../data/companyData';

const iconMap = {
  ShieldCheck,
  Cpu,
  Layers,
  TrendingUp,
  BookOpenCheck,
  Zap
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-wrapper why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>The Harija Labs Advantage</span>
          </div>
          <h2 className="section-title">
            Engineered for Precision. <br />
            <span className="text-gradient">Built for Real-World Scale.</span>
          </h2>
          <p className="section-description">
            We don't sell unverified AI hype or cookie-cutter courses. We deliver production-grade architectures and actionable engineering mentorship.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="why-grid">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={item.title} className="why-card glass-card">
                <div className="why-card-header">
                  <div className="why-icon-box">
                    <Icon size={24} />
                  </div>
                  <div className="why-stat-badge">
                    <span className="stat-text">{item.stat}</span>
                  </div>
                </div>

                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>

                <div className="why-footer-meta">
                  <CheckCircle2 size={14} className="meta-check" />
                  <span>{item.statLabel}</span>
                </div>

                <div className="card-border-glow"></div>
              </div>
            );
          })}
        </div>

        {/* Who We Empower / Target Customers */}
        <div className="audience-section">
          <div className="audience-header">
            <div className="audience-tag">
              <Users2 size={15} />
              <span>Who We Partner With</span>
            </div>
            <h3>Empowering Visionaries Across the Technology Spectrum</h3>
          </div>

          <div className="audience-grid">
            {TARGET_AUDIENCES.map((aud) => (
              <div key={aud.title} className="audience-card glass-card">
                <div className="audience-dot"></div>
                <h4>{aud.title}</h4>
                <p>{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Callout Box */}
        <div className="why-cta-callout glass-card">
          <div className="callout-text">
            <h3>Ready to accelerate your AI adoption or technical career?</h3>
            <p>Connect directly with our engineering team on WhatsApp to explore how we can collaborate.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Harija Labs, I would like to explore a partnership / project discussion.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <span>Connect on WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
