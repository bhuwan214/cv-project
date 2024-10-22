import { useState } from 'react';
import ExperienceExpand from './ExperienceExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ExperienceInfo() {
  // Initialize state for experiences, including `visible` property for each
  const [experiences, setExperiences] = useState([
    { companyName: 'Umbrella Inc.', visible: false },
    { companyName: 'Black Mesa Labs', visible: false }
  ]);

  // Initialize state for expanded index to handle expanding/collapsing content
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded section and the visibility of each experience title independently
  const toggleExperienceExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);  // Toggle expanded section
    
    // Toggle visibility for the selected experience
    setExperiences(experiences.map((exp, i) =>
      i === index ? { ...exp, visible: !exp.visible } : exp
    ));
  };

  return (
    <>
      <div className="experience-info">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-title" onClick={() => toggleExperienceExpand(index)}>
              <h2>{exp.companyName}
                {/* Toggle between eye and slashed eye icons */}
                <span style={{ marginLeft: '10px' }}>
                  {exp.visible
                    ? <FontAwesomeIcon icon={faEyeSlash} />
                    : <FontAwesomeIcon icon={faEye} />}
                </span>
              </h2>
            </div>

            {/* If the clicked experience item matches the expanded index, show the expanded content */}
            {expandedIndex === index && <ExperienceExpand experience={exp} />}
          </div>
        ))}
      </div>

      <div className="btn">
        <button className="add-experience-btn">+ Experience</button>
      </div>
    </>
  );
}

export default ExperienceInfo;
