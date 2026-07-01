import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="about-container">
        <div className="vm-grid">
          
          <div className="vm-card vm-card-navy">
            <div className="vm-label">OUR VISION</div>
            <blockquote>
              "Professional integrity is not a promise—it is a discipline. In taxation and compliance, precision and principle go hand in hand."
            </blockquote>
          </div>
          
          <div className="vm-card vm-card-white">
            <div className="vm-label vm-label-red">OUR MISSION</div>
            <blockquote>
              "Compliance reduces disputes; precision resolves them. In tax litigation, facts defend what strategy presents."
            </blockquote>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
