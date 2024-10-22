import { useState } from 'react';
import EducationExpand from './EducationExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function EducationInfo() {
  // Initialize state for experiences, including `visible` property for each
  const [educations,setEducation] = useState([
    { schoolName: 'London City University', visible: true },
    { schoolName: 'Hidden University', visible: true }
  ]);

  // Initialize state for expanded index to handle expanding/collapsing content
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded section and the visibility of each education title independently
  const toggleEducationExpand=(index)=>{
    setExpandedIndex(expandedIndex===index ? null:index);
  

   // Toggle visibility for the selected experience
   setEducation(educations.map((edu, i) =>
    i === index ? { ...edu, visible: !edu.visible } : edu
  ));
}

  return (
    <>
    <div className="education-info">
      {educations.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-title" onClick={() => toggleEducationExpand(index)}>
            <h2>{edu.schoolName}
            <span style={{ marginLeft: '10px' }}>
                  {edu.visible
                    ? <FontAwesomeIcon icon={faEyeSlash} />
                    : <FontAwesomeIcon icon={faEye} />}
                </span>
                </h2>
          </div> 

          {/* If the clicked education item matches the expanded index, show the expanded form */}
          {expandedIndex === index && <EducationExpand education={edu} />}
        </div>
      ))}
      
    </div>

   <div className="btn"> <button className="add-education-btn">+ Education</button></div>
    </>
  );
}

export default EducationInfo;
