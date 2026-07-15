import React, { useEffect, useRef } from 'react';
import './TestimonialModal.css';

const TestimonialModal = ({ testimonial, onClose }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!testimonial) return;

    // Save previous active element to restore focus on close
    const previousActiveElement = document.activeElement;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button initially for accessibility
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    // Handle keydown for Escape and Focus Trap
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  return (
    <div 
      className="testimonial-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-author-name"
    >
      <div 
        className="testimonial-modal-card" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="testimonial-modal-header">
          <button 
            type="button" 
            className="testimonial-modal-close" 
            onClick={onClose}
            ref={closeBtnRef}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="testimonial-modal-body">
          <div className="testimonial-modal-quote-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.662c-.27.98-.4 2.06-.4 3.24 0 1.212.23 2.18.69 2.905.46.725 1.12 1.18 1.98 1.365.4.08.78.12 1.14.12.92 0 1.68-.26 2.28-.78.6-.52.9-1.3.9-2.354zm10.386 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L19.757 5c-.8.4-1.56.9-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.662c-.27.98-.4 2.06-.4 3.24 0 1.212.23 2.18.69 2.905.46.725 1.12 1.18 1.98 1.365.4.08.78.12 1.14.12.92 0 1.68-.26 2.28-.78.6-.52.9-1.3.9-2.354z"></path></svg>
          </div>
          <p className="testimonial-modal-text">"{testimonial.testimonial || testimonial.excerpt}"</p>
          <div className="testimonial-modal-author-section">
            <h3 className="testimonial-modal-name" id="modal-author-name">{testimonial.name}</h3>
            {testimonial.designation && (
              <p className="testimonial-modal-designation">{testimonial.designation}</p>
            )}
            <p className="testimonial-modal-company">{testimonial.company}</p>
          </div>
        </div>

        <div className="testimonial-modal-footer">
          <button 
            type="button" 
            className="testimonial-modal-done-btn" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
