import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show teaser tooltip after 2.5 seconds to draw polite attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-whatsapp-wrapper" aria-label="WhatsApp quick contact">
      {/* Teaser Popup Box */}
      {showTooltip && (
        <div className="whatsapp-tooltip-card glass-card">
          <button
            type="button"
            className="tooltip-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss message preview"
          >
            <X size={15} />
          </button>
          
          <div className="tooltip-header">
            <span className="online-beacon"></span>
            <span className="tooltip-title">Harija Labs Support</span>
          </div>

          <p className="tooltip-msg">
            Need help with custom AI Agents or Harija Academy courses? Chat with our team!
          </p>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip-cta-pill"
          >
            <MessageSquare size={14} />
            <span>Start WhatsApp Chat</span>
          </a>

          <div className="tooltip-tail"></div>
        </div>
      )}

      {/* Floating Action Circle Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        title="Chat with Harija Labs on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-pulse-wave"></span>
        <span className="wa-pulse-wave delay"></span>
        <MessageSquare size={28} className="wa-icon" />
      </a>
    </div>
  );
}
