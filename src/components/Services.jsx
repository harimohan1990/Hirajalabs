import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Zap, 
  Database, 
  MessageSquare, 
  Code, 
  Server, 
  Layers, 
  Cloud, 
  Terminal, 
  Activity, 
  Boxes, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICE_CATEGORIES, getWhatsAppUrl } from '../data/companyData';

// Map icon strings to Lucide components
const iconMap = {
  'ai-agents': Bot,
  'agentic-workflows': Workflow,
  'process-automation': Zap,
  'genai-apps': Cpu,
  'rag-systems': Database,
  'chatbots': MessageSquare,
  'ml-solutions': Activity,
  'python-backend': Terminal,
  'fastapi-dev': Server,
  'react-frontend': Code,
  'fullstack-apps': Layers,
  'rest-apis': Server,
  'microservices': Boxes,
  'aws-engineering': Cloud,
  'docker-kubernetes': Boxes,
  'cicd-automation': Workflow,
  'mlops-llmops': Activity,
  'ai-infrastructure': Cpu
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'software-engineering', label: 'Software Engineering' },
    { id: 'cloud-infrastructure', label: 'Cloud & Infrastructure' }
  ];

  // Flatten or filter services
  const displayedServices = SERVICE_CATEGORIES.flatMap((category) => {
    if (activeTab !== 'all' && category.id !== activeTab) {
      return [];
    }
    return category.services.map((svc) => ({
      ...svc,
      categoryName: category.name,
      categoryBadge: category.badge
    }));
  });

  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Harija AI Division</span>
          </div>
          <h2 className="section-title">
            Enterprise AI & <span className="text-gradient">Engineering Services</span>
          </h2>
          <p className="section-description">
            From autonomous agent swarms to resilient cloud microservices, we build production software engineered for high reliability, measurable ROI, and seamless scaling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="services-tabs-container">
          <div className="services-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.id] || Cpu;

            return (
              <div key={service.id} className="service-card glass-card">
                <div className="card-top">
                  <div className="service-icon-box">
                    <IconComponent size={22} className="service-icon" />
                  </div>
                  <span className="service-category-badge">{service.categoryName}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                {/* Tech & Capability Tags */}
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* WhatsApp Action */}
                <div className="service-action-row">
                  <a
                    href={getWhatsAppUrl(service.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-inquire-link"
                    title={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="card-glow-corner"></div>
              </div>
            );
          })}
        </div>

        {/* Architecture Showcase Visual */}
        <div className="services-architecture-showcase glass-card">
          <div className="showcase-content">
            <span className="section-tag">
              <Boxes size={14} />
              <span>Full-Stack AI Architecture</span>
            </span>
            <h3>Enterprise Multi-Agent Swarms & Cloud Microservices</h3>
            <p>
              Every solution engineered at Harija Labs is architected for high concurrency, zero data leakage, and resilient failover. From distributed FastAPI worker nodes and vector databases to Kubernetes container orchestration, we deliver production reliability.
            </p>
            <div className="showcase-badges">
              <span className="badge-chip">Autonomous Agent Swarms</span>
              <span className="badge-chip">Kubernetes Auto-scaling</span>
              <span className="badge-chip">Low-Latency Vector Search</span>
              <span className="badge-chip">Message Queue Decoupling</span>
            </div>
            <a
              href={getWhatsAppUrl("Hi Harija Labs, I would like to consult on enterprise AI architecture and system design.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>Explore Architecture Blueprint</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="showcase-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}images/ai_workflow.jpg`} 
              alt="Harija Labs Multi-Agent and Cloud Microservices Architecture" 
              className="showcase-img"
            />
            <div className="showcase-glow-overlay"></div>
          </div>
        </div>

        {/* Custom Project CTA Banner */}
        <div className="services-bottom-banner glass-card">
          <div className="banner-text">
            <h3>Need a custom enterprise architecture or specialized AI stack?</h3>
            <p>We scope your requirements, define architecture guardrails, and build a proof of concept rapidly.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Harija Labs, I would like to schedule a custom architecture consultation for our AI project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp banner-cta"
          >
            <MessageSquare size={17} />
            <span>Consult an AI Architect</span>
          </a>
        </div>
      </div>
    </section>
  );
}
