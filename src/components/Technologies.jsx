import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Boxes, 
  Layers, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { TECH_STACK } from '../data/companyData';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="technologies" className="section-wrapper technologies-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Modern Engineering Stack</span>
          </div>
          <h2 className="section-title">
            Battle-Tested <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-description">
            We build with cutting-edge, battle-tested technologies that ensure low latency, high concurrency, strict type safety, and seamless cloud scale.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="tech-nav-tabs">
          {TECH_STACK.map((group, index) => (
            <button
              key={group.category}
              type="button"
              className={`tech-tab-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span>{group.category}</span>
            </button>
          ))}
        </div>

        {/* Active Tech Stack Display */}
        <div className="tech-cards-grid">
          {TECH_STACK[activeCategory].items.map((tech) => (
            <div key={tech.name} className="tech-card glass-card">
              <div className="tech-card-top">
                <span className="tech-pill">{tech.tag}</span>
                <span className="tech-code-badge">production</span>
              </div>
              <h4 className="tech-name">{tech.name}</h4>
              <p className="tech-desc">{tech.desc}</p>
              <div className="tech-card-glow"></div>
            </div>
          ))}
        </div>

        {/* All Core Technologies Marquee / Grid Badges */}
        <div className="all-tech-showcase glass-card">
          <div className="all-tech-label">
            <Sparkles size={16} />
            <span>Core Tooling & Frameworks in Production at Harija Labs:</span>
          </div>
          <div className="tech-pills-cluster">
            {[
              "Python 3.12+",
              "FastAPI",
              "React.js",
              "JavaScript ESNext",
              "LangChain",
              "LangGraph",
              "OpenAI GPT-4o",
              "AWS Cloud",
              "Docker",
              "Kubernetes",
              "PostgreSQL",
              "Machine Learning",
              "PyTorch",
              "Vector Databases (Milvus / Qdrant)",
              "CI/CD Pipelines",
              "MLOps / LLMOps"
            ].map((name) => (
              <span key={name} className="tech-chip">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
