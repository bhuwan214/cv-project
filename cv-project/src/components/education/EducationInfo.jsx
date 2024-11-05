import { useState } from 'react';
import EducationExpand from './EducationExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function EducationInfo({ educations, updateEducations }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleEducationExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    toggleVisibility(educations[index].id)
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      visible: true,
    };
    updateEducations(newEducation);
    setExpandedIndex(educations.length);
  };

  const updateEducation = (id, updatedData,closeAfterSave=false) => {
    const updatedEducation = { id, ...updatedData };
    updateEducations(updatedEducation);
    if(closeAfterSave) setExpandedIndex(null); // Close the expanded section after saving
  };

  const deleteEducation = (id) => {
    // Mark education as deleted
    updateEducations({ id, deleted: true });
    setExpandedIndex(null);
  };

  const clearEducation = (id) => {
    const clearedEducation = {
      id,
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      visible: true,
    };
    updateEducations(clearedEducation);
  };

  const toggleVisibility = (id) => {
    const educationToToggle = educations.find((edu) => edu.id === id);
    if (educationToToggle) {
      const updatedEducation = {
        ...educationToToggle,
        visible: !educationToToggle.visible,
      };
      updateEducations(updatedEducation);
    }
  };

  return (
    <>
      <div className="education-info">
        {educations.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <div className="education-title" onClick={() => toggleEducationExpand(index) }>
              <h2>
                {edu.institution || 'New Education'}
                <span style={{ marginLeft: '10px' }} onClick={() => { 
                  // e.stopPropagation(); // Prevent title click from firing
                  toggleVisibility(edu.id); 
                }}>
                  {edu.visible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </span>
              </h2>
            </div>

            {expandedIndex === index && (
              <EducationExpand
                education={edu}
                updateEducation={(data)=>updateEducation(edu.id,data,true)}
                deleteEducation={deleteEducation}
                clearEducation={clearEducation}
              />
            )}
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="add-education-btn" onClick={addEducation}>+ Education</button>
      </div>
    </>
  );
}

export default EducationInfo;
