import React from 'react';
import { 
  Building2, 
  CheckCircle, 
  ArrowUpRight, 
  Cpu, 
  GraduationCap, 
  Target, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';
import { FOUNDER_INFO, COMPANY_INFO } from '../data/companyData';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Building2 size={14} />
            <span>About Harija Labs</span>
          </div>
          <h2 className="section-title">
            Engineering Intelligence. <br />
            <span className="text-gradient">Empowering the Future.</span>
          </h2>
          <p className="section-description">
            Harija Labs is an AI engineering and technology company focused on helping businesses adopt AI, automate operations, and build intelligent software solutions—while training the next generation of engineers.
          </p>
        </div>

        {/* Company Vision & Two Pillars */}
        <div className="about-overview-grid">
          <div className="about-pillar-card glass-card">
            <div className="pillar-icon-box purple">
              <Cpu size={26} />
            </div>
            <span className="pillar-tag">Division 01</span>
            <h3>Harija AI • Services & Consulting</h3>
            <p>
              We architect, engineer, and deploy commercial-grade AI Agents, RAG pipelines, and automated business workflows. We help businesses transition from experimental AI prototypes to rock-solid production systems that lower operational costs and unlock speed.
            </p>
            <ul className="pillar-points">
              <li><CheckCircle size={15} /> Autonomous Agent Swarms & Tool Calling</li>
              <li><CheckCircle size={15} /> Enterprise Knowledge Retrieval (RAG)</li>
              <li><CheckCircle size={15} /> Scalable FastAPI & Cloud Microservices</li>
            </ul>
          </div>

          <div className="about-pillar-card glass-card">
            <div className="pillar-icon-box cyan">
              <GraduationCap size={26} />
            </div>
            <span className="pillar-tag cyan">Division 02</span>
            <h3>Harija Academy • AI Education</h3>
            <p>
              We bridge the industry skills gap through rigorous, project-based engineering curricula. We train students, working developers, and startup founders in the exact tools modern tech companies demand: LangChain, LangGraph, Python, and MLOps.
            </p>
            <ul className="pillar-points">
              <li><CheckCircle size={15} /> 100% Practical Project Implementation</li>
              <li><CheckCircle size={15} /> GitHub Portfolio & Production Deployment</li>
              <li><CheckCircle size={15} /> Industry Mentorship & Engineering Best Practices</li>
            </ul>
          </div>
        </div>

        {/* Leadership & Founder Profile */}
        <div className="founder-card glass-card">
          <div className="founder-grid">
            <div className="founder-badge-col">
              <div className="founder-avatar-box">
                <div className="avatar-initials">HM</div>
                <div className="avatar-pulse"></div>
              </div>
              <div className="founder-meta">
                <h3 className="founder-name">{FOUNDER_INFO.name}</h3>
                <span className="founder-title">{FOUNDER_INFO.role}</span>
                <span className="founder-company">{FOUNDER_INFO.company}</span>
              </div>
              <a
                href={FOUNDER_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary founder-linkedin-btn"
                title="View LinkedIn Profile"
              >
                <LinkedInIcon size={18} className="linkedin-icon" />
                <span>View LinkedIn Profile</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="founder-content-col">
              <div className="founder-heading">
                <span className="leadership-tag">Engineering Leadership & Background</span>
                <h4>Committed to Production Excellence & Mentorship</h4>
              </div>

              <p className="founder-bio">
                {FOUNDER_INFO.summary}
              </p>

              <div className="founder-skills-box">
                <span className="skills-label">Core Technical Expertise:</span>
                <div className="skills-tags">
                  {FOUNDER_INFO.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      <Sparkles size={12} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="founder-verification-note">
                <ShieldCheck size={16} />
                <span>Verified professional background and career history available on <a href={FOUNDER_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
