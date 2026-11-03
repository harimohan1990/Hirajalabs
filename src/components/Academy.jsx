import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  Users, 
  Code2, 
  FolderGit2, 
  Briefcase,
  X
} from 'lucide-react';
import { ACADEMY_COURSES, getWhatsAppUrl } from '../data/companyData';

export default function Academy() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const academyFeatures = [
    {
      icon: Terminal,
      title: "100% Practical & Project-Centric",
      desc: "No boring theoretical slide-decks. You write code, test agent graphs, and deploy live backends from day one."
    },
    {
      icon: FolderGit2,
      title: "Real GitHub Portfolios",
      desc: "Graduate with production-ready repositories showcasing real multi-agent systems, RAG pipelines, and cloud deploys."
    },
    {
      icon: Users,
      title: "Direct Mentorship by Practitioners",
      desc: "Learn directly from senior engineers actively building commercial AI applications for global enterprises."
    },
    {
      icon: Briefcase,
      title: "Career & Interview Readiness",
      desc: "System design mock interviews, architecture reviews, and resume refinement for top AI and Full-Stack roles."
    }
  ];

  return (
    <section id="academy" className="section-wrapper academy-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag cyan">
            <GraduationCap size={14} />
            <span>Harija Academy Division</span>
          </div>
          <h2 className="section-title">
            Learn AI. Build AI. <span className="text-gradient">Become Future Ready.</span>
          </h2>
          <p className="section-description">
            Industry-oriented engineering courses crafted for working professionals, students, and founders looking to master modern AI architectures, agentic systems, and MLOps.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="academy-features-grid">
          {academyFeatures.map((feat) => {
            const FeatIcon = feat.icon;
            return (
              <div key={feat.title} className="academy-feature-card glass-card">
                <div className="feature-icon-wrapper">
                  <FeatIcon size={20} />
                </div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Courses Section Headline */}
        <div className="courses-subheader">
          <h3>Featured AI Engineering Programs</h3>
          <p>Select any course to view syllabus highlights or register directly via WhatsApp.</p>
        </div>

        {/* Courses Cards Grid */}
        <div className="courses-grid">
          {ACADEMY_COURSES.map((course) => (
            <div key={course.id} className="course-card glass-card">
              <div className="course-card-top">
                <span className="course-badge">{course.badge}</span>
                <span className="course-level">{course.level}</span>
              </div>

              <h4 className="course-title">{course.title}</h4>
              <p className="course-desc">{course.description}</p>

              <div className="course-meta">
                <div className="meta-item">
                  <Clock size={15} />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Highlights Preview */}
              <div className="course-highlights-box">
                <div className="highlights-title">
                  <Sparkles size={14} />
                  <span>What You Will Build & Learn:</span>
                </div>
                <ul className="highlights-list">
                  {course.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="course-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedCourse(course)}
                >
                  <BookOpen size={15} />
                  <span>View Details</span>
                </button>

                <a
                  href={getWhatsAppUrl(course.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <span>Apply on WhatsApp</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Academy Lab Showcase Visual */}
        <div className="academy-lab-showcase glass-card">
          <div className="lab-showcase-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}images/academy_lab.jpg`} 
              alt="Engineers and Students Collaborating at Harija Academy" 
              className="lab-showcase-img"
            />
            <div className="lab-image-overlay"></div>
            <div className="lab-badge">
              <Sparkles size={14} className="text-cyan" />
              <span>Harija Collaborative AI Engineering Lab</span>
            </div>
          </div>
          <div className="lab-showcase-text">
            <span className="section-tag cyan">
              <Users size={14} />
              <span>Hands-on Cohort Environment</span>
            </span>
            <h3>Learn Alongside Active Practitioners</h3>
            <p>
              At Harija Academy, you don't just watch videos—you work with production-grade AI pipelines, collaborate in code reviews, debug stateful LangGraph agents, and build cloud-native portfolio applications.
            </p>
            <div className="lab-perks-list">
              <div className="lab-perk-item">
                <CheckCircle size={16} className="text-green" />
                <span>Live interactive architecture & debugging sessions</span>
              </div>
              <div className="lab-perk-item">
                <CheckCircle size={16} className="text-green" />
                <span>Industry capstones deployed on AWS & Kubernetes</span>
              </div>
              <div className="lab-perk-item">
                <CheckCircle size={16} className="text-green" />
                <span>Direct mentorship from Harija Labs senior engineers</span>
              </div>
            </div>
            <a
              href={getWhatsAppUrl("Hi Harija Academy, I would like to know more about the practical training lab and upcoming batches.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span>Join Next Batch on WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Training Consultation Card */}
        <div className="academy-cta-box glass-card">
          <div className="academy-cta-content">
            <div className="cta-icon-pill">
              <Award size={24} />
            </div>
            <div className="cta-copy">
              <h3>Looking for Custom Corporate AI Upskilling or College Workshops?</h3>
              <p>
                We train enterprise teams and engineering cohorts in hands-on Generative AI, RAG, and Agentic engineering with custom curricula tailored to your company's stack.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hi Harija Academy, I would like to inquire about Corporate AI Training & Workshops for our organization.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <span>Inquire for Corporate Training</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="modal-backdrop" onClick={() => setSelectedCourse(null)}>
          <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="course-badge">{selectedCourse.badge}</span>
                <h3 className="modal-title">{selectedCourse.title}</h3>
                <span className="modal-meta">{selectedCourse.duration} • {selectedCourse.level}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedCourse(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedCourse.description}</p>
              
              <div className="modal-syllabus-section">
                <h4>Core Modules & Project Deliverables</h4>
                <ul className="modal-list">
                  {selectedCourse.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="modal-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-perks">
                <div className="perk-pill">✅ 1-on-1 Code Reviews</div>
                <div className="perk-pill">✅ Real Cloud Deployments</div>
                <div className="perk-pill">✅ Capstone GitHub Repository</div>
                <div className="perk-pill">✅ Course Completion Certificate</div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedCourse(null)}
              >
                Close
              </button>

              <a
                href={getWhatsAppUrl(selectedCourse.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>Enroll via WhatsApp (+91 63666 53022)</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
