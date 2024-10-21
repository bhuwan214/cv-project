import { useState } from 'react';
import EducationExpand from './EducationExpand';

function EducationInfo() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const educations = [
    { schoolName: 'London City University', visible: true },
    { schoolName: 'Hidden University', visible: true }
  ];

  const toggleEducationExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close if clicked again
    } else {
      setExpandedIndex(index); // Expand clicked item
    }
  };

  return (
    <div className="education-info">
      {educations.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-title" onClick={() => toggleEducationExpand(index)}>
            {edu.schoolName}
            {edu.visible ? <span role="img" aria-label="visible-icon">👁️</span> : <span role="img" aria-label="hidden-icon">🙈</span>}
          </div>

          {/* If the clicked education item matches the expanded index, show the expanded form */}
          {expandedIndex === index && <EducationExpand education={edu} />}
        </div>
      ))}
      <button className="add-education-btn">+ Education</button>
    </div>
  );
}

export default EducationInfo;
