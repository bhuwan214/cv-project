import React, { useState } from 'react';
import ExperienceExpand from './ExperienceExpand';

function ExperienceInfo() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    { companyName: 'Umbrella Inc.', visible: true },
    { companyName: 'Black Mesa Labs', visible: false }
  ];

  const toggleExperienceExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close if clicked again
    } else {
      setExpandedIndex(index); // Expand clicked item
    }
  };

  return (
    <div className="experience-info">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-title" onClick={() => toggleExperienceExpand(index)}>
            {exp.companyName}
            {exp.visible ? <span role="img" aria-label="visible-icon">👁️</span> : <span role="img" aria-label="hidden-icon">🙈</span>}
          </div>

          {/* If the clicked experience item matches the expanded index, show the expanded form */}
          {expandedIndex === index && <ExperienceExpand experience={exp} />}
        </div>
      ))}
      <button className="add-experience-btn">+ Experience</button>
    </div>
  );
}

export default ExperienceInfo;
