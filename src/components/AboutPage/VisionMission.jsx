import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="vm-grid-stacked">
      <div className="vm-card vm-card-white">
        <div className="vm-label vm-label-red">VISION</div>
        <blockquote>
          To be the most trusted advisor, empowering businesses to navigate complexity with confidence and achieve sustainable success.
        </blockquote>
      </div>
      
      <div className="vm-card vm-card-white">
        <div className="vm-label vm-label-red">MISSION</div>
        <blockquote>
          To deliver exceptional tax, legal, and regulatory advisory through technical excellence, professional integrity, and practical insight, helping our clients manage complexity, mitigate risk, and create lasting value.
        </blockquote>
      </div>
    </div>
  );
};

export default VisionMission;
