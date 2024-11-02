import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import EducationInfo from './EducationInfo';
import '../../style/form.css'

export function Education({ onEducationChange }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [educationList, setEducationList] = useState([]);

  const handleEducationChange = (newEducation) => {
    setEducationList(newEducation);
    onEducationChange(newEducation); // Pass data up to parent
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="education">
      <div className="section-header" onClick={toggleExpand}>
        <h2>Education <span className='arrow-down'>
          <FontAwesomeIcon icon={faAngleDown} className={`angle-down ${isExpanded?'':'open'}`} />
        </span></h2>
      </div>
      
      {isExpanded && <EducationInfo 
        educationList={educationList}
        onEducationChange={handleEducationChange}
      />}
    </div>
  );
}