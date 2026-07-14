import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="vm-grid-stacked">
      <div className="vm-card vm-card-white">
        <div className="vm-label vm-label-red">VISION</div>
        <blockquote>
          To uphold excellence, integrity, and ethical practice in delivering legal, tax, and regulatory services.
        </blockquote>
      </div>
      
      <div className="vm-card vm-card-white">
        <div className="vm-label vm-label-red">MISSION</div>
        <blockquote>
          To provide integrated legal, tax, and regulatory services founded on technical excellence, professional integrity, ethical practice, and commercially informed guidance.
        </blockquote>
      </div>
    </div>
  );
};

export default VisionMission;
