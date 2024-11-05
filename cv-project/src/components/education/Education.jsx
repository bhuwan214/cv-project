import { useState } from "react";
import EducationInfo from "./EducationInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "../../style/animation.css";

export function Education({ onEducationUpdate }) {
  const [educations, setEducations] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const updateEducations = (newEducation) => {
    setEducations((prev) => {
      const existingIndex = prev.findIndex(edu => edu.id === newEducation.id);
      let updatedEducations;
      if (newEducation.deleted) {
        updatedEducations = prev.filter(edu => edu.id !== newEducation.id);
      } else if (existingIndex >= 0) {
        updatedEducations = [...prev];
        updatedEducations[existingIndex] = newEducation;
      } else {
        updatedEducations = [...prev, newEducation];
      }
      onEducationUpdate(newEducation);
      return updatedEducations;
    });
  };

  return (
    <div className="education">
      <div className="section-header" onClick={toggleExpand}>
        <h2>
          Education  
          <span className='arrow-down'>
            <FontAwesomeIcon icon={faAngleDown} className={`angle-down ${isExpanded ? '' : 'open'}`} />
          </span>
        </h2>
      </div>
      {isExpanded && (
        <EducationInfo 
          educations={educations} 
          updateEducations={updateEducations} 
          setIsExpanded={setIsExpanded} 
        />
      )}
    </div>
  );
}

export default Education;
