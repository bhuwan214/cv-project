import { useState } from 'react';
import ExperienceExpand from './ExperienceExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ExperienceInfo({ experiences, updateExperiences, setIsExpanded }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExperienceExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    toggleVisibility(experiences[index].id)
  };

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      visible: true
    };
    updateExperiences(newExperience);
    setExpandedIndex(experiences.length);
  };

  const updateExperience = (id, updatedData, closeAfterSave = false) => {
    const updatedExperience = { id, ...updatedData };
    updateExperiences(updatedExperience);
    if (closeAfterSave) setExpandedIndex(null);
  };

  const deleteExperience = (id) => {
    updateExperiences({ id, deleted: true });
    setExpandedIndex(null);
  };

  const clearExperience = (id) => {
    const clearedExperience = {
      id,
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      visible: true
    };
    updateExperiences(clearedExperience);
  };

  const toggleVisibility =(id)=>{
    const experienceToToggle = experiences.find((exp) => exp.id === id);
    if (experienceToToggle) {
      const updatedExperience = {
        ...experienceToToggle,
        visible: !experienceToToggle.visible,
      };
      updateExperiences(updatedExperience);
    }
  };


  return (
    <>
      <div className="experience-info">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-title" onClick={() => toggleExperienceExpand(index)}>
              <h2>{exp.companyName || 'New Experience'}
                <span style={{ marginLeft: '10px' }} onClick={()=>toggleVisibility(exp.id)}>
                  {exp.visible
                    ? <FontAwesomeIcon icon={faEyeSlash} />
                    : <FontAwesomeIcon icon={faEye} />}
                </span>
              </h2>
            </div>

            {expandedIndex === index && (
              <ExperienceExpand
                experience={exp}
                updateExperience={(data) => updateExperience(exp.id, data, true)}
                deleteExperience={deleteExperience}
                clearExperience={clearExperience}
              />
            )}
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="add-experience-btn" onClick={addExperience}>+ Experience</button>
      </div>
    </>
  );
}

export default ExperienceInfo;
