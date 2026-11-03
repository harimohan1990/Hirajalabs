import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Database, 
  Workflow, 
  ShieldCheck 
} from 'lucide-react';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/companyData';

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  // Simulated Agent Execution Cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const agentSteps = [
    {
      title: "1. Intent & Context Ingestion",
      icon: Terminal,
      detail: "Receiving enterprise ERP triggers & customer voice prompts",
      status: "Verified",
      tag: "Agentic Ingestion"
    },
    {
      title: "2. Hybrid RAG & Vector Retrieval",
      icon: Database,
      detail: "Querying Milvus & PostgreSQL with semantic re-ranking",
      status: "Top-k Matched",
      tag: "0.12s latency"
    },
    {
      title: "3. LangGraph Stateful Reasoning",
      icon: Workflow,
      detail: "Multi-agent coordination, sub-task planning & guardrail checks",
      status: "Evals Passed",
      tag: "Zero Hallucination"
    },
    {
      title: "4. Autonomous Tool Execution",
      icon: Zap,
      detail: "Calling FastAPI microservice & committing business action",
      status: "Success 200 OK",
      tag: "Action Automated"
    }
  ];

  return (
    <section id="hero" className="hero-section">
      {/* Background Ambient Orbs */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left / Top Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <Sparkles size={14} className="badge-icon" />
            <span className="badge-text">Building Intelligence • Empowering People</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Build Smarter. <br />
            Automate Faster. <br />
            <span className="text-gradient">Grow with Artificial Intelligence.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="hero-description">
            We engineer intelligent AI solutions, automate business workflows, and empower the next generation of AI professionals.
          </p>

          {/* Dual Business Pillars Highlight */}
          <div className="hero-divisions-banner">
            <a href="#services" className="division-pill">
              <span className="pill-dot purple"></span>
              <Cpu size={15} />
              <div className="pill-text">
                <strong>Harija AI</strong>
                <span>Services & Consulting</span>
              </div>
            </a>
            <div className="division-divider"></div>
            <a href="#academy" className="division-pill">
              <span className="pill-dot cyan"></span>
              <GraduationCap size={15} />
              <div className="pill-text">
                <strong>Harija Academy</strong>
                <span>Education & Training</span>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#services" className="btn btn-primary hero-btn">
              <span>Explore Our Services</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={getWhatsAppUrl("Hi Harija Labs, I would like to talk to your AI experts about our project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Social Proof / Key Capabilities */}
          <div className="hero-stats-row">
            <div className="stat-pill">
              <CheckCircle2 size={16} className="stat-icon" />
              <span>Agentic AI Workflows</span>
            </div>
            <div className="stat-pill">
              <CheckCircle2 size={16} className="stat-icon" />
              <span>Full-Stack Engineering</span>
            </div>
            <div className="stat-pill">
              <CheckCircle2 size={16} className="stat-icon" />
              <span>Project-Centric Academy</span>
            </div>
          </div>
        </div>

        {/* Right / Interactive Live Visualizer */}
        <div className="hero-visual">
          <div className="terminal-card glass-card">
            {/* Terminal Window Bar */}
            <div className="terminal-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <Bot size={14} />
                <span>harija-agent-runtime v2.4 (Live Pipeline)</span>
              </div>
              <div className="terminal-status">
                <span className="live-indicator"></span>
                <span>Active</span>
              </div>
            </div>

            {/* Neural Holographic Core Visual Showcase */}
            <div className="hero-visual-media-box">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero_ai_core.jpg`} 
                alt="Harija Labs 3D AI Neural Core Interface" 
                className="hero-core-img"
              />
              <div className="media-overlay-gradient"></div>
              <div className="media-floating-badge">
                <Sparkles size={13} className="text-cyan" />
                <span>Harija Autonomous Neural Engine</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <div className="agent-pipeline-flow">
                {agentSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isActive = activeStep === idx;
                  const isPast = activeStep > idx;

                  return (
                    <div
                      key={step.title}
                      className={`pipeline-step ${isActive ? 'active' : ''} ${isPast ? 'completed' : ''}`}
                    >
                      <div className="step-indicator">
                        <div className="step-icon-box">
                          <StepIcon size={16} />
                        </div>
                        {idx < agentSteps.length - 1 && <div className="step-connector"></div>}
                      </div>
                      <div className="step-details">
                        <div className="step-head">
                          <h4 className="step-name">{step.title}</h4>
                          <span className="step-tag">{step.tag}</span>
                        </div>
                        <p className="step-desc">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Realtime Metrics Footer */}
              <div className="terminal-metrics-bar">
                <div className="metric-item">
                  <span className="metric-label">Engine</span>
                  <span className="metric-val">LangGraph + FastAPI</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Precision</span>
                  <span className="metric-val text-green">99.4% Evals</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Security</span>
                  <span className="metric-val">Enterprise Guardrails</span>
                </div>
              </div>
            </div>

            {/* Bottom Glow Bar */}
            <div className="terminal-glow-edge"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
