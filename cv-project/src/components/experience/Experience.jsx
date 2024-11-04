import { useState } from "react";
import ExperienceInfo from "./ExperienceInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "../../style/animation.css";

export function Experience({ onExperienceUpdate }) {
  const [experiences, setExperiences] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const updateExperiences = (newExperience) => {
    setExperiences((prev) => {
      const existingIndex = prev.findIndex(exp => exp.id === newExperience.id);
      let updatedExperiences;
      if (newExperience.deleted) {
        updatedExperiences = prev.filter(exp => exp.id !== newExperience.id);
      } else if (existingIndex >= 0) {
        updatedExperiences = [...prev];
        updatedExperiences[existingIndex] = newExperience;
      } else {
        updatedExperiences = [...prev, newExperience];
      }
      onExperienceUpdate(newExperience);
      return updatedExperiences;
    });
  };

  return (
    <div className="experience">
      <div className="section-header" onClick={toggleExpand}>
        <h2>
          Experience  
          <span className='arrow-down'>
            <FontAwesomeIcon icon={faAngleDown} className={`angle-down ${isExpanded ? '' : 'open'}`} />
          </span>
        </h2>
      </div>
      {isExpanded && (
        <ExperienceInfo 
          experiences={experiences} 
          updateExperiences={updateExperiences} 
          setIsExpanded={setIsExpanded} 
        />
      )}
    </div>
  );
}

export default Experience;
