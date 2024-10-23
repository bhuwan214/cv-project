import { useState } from 'react';
import ExperienceExpand from './ExperienceExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ExperienceInfo() {
  // Initialize state for experiences, including `visible` property for each
  const [experiences, setExperiences] = useState([
    { companyName: 'Umbrella Inc.', visible: false , jobTitle:"Manager", startDate:"2018-2-12",endDate:"2023-11-19",location:"Gutenberg,New Jersey"},
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


const addExperience =()=>{
  const newExperience ={
    id: Date.now(),
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: '',
  }
  setExperiences([...experiences,newExperience])
}

const updateExperience =(id,updateData)=>{
  const updatedExperiences =experiences.map((exp)=>
    exp.id === id ? {...exp, ...updateData} : exp)
  setExperiences(updatedExperiences)
}

const deleteExperience =(id)=>{
  const filteredExperiences =experiences.filter((exp)=>exp.id!==id);
  setExperiences(filteredExperiences)
}


const clearExperience = (id) => {
  const clearedExperiences = experiences.map((exp) =>
    exp.id === id
      ? { ...exp, companyName: '', jobTitle: '', startDate: '', endDate: '', location: '' }
      : exp
  );
  setExperiences(clearedExperiences);
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
            {expandedIndex === index &&
             <ExperienceExpand 
             experience={exp}
             key={exp.id}
             updateExperience={updateExperience}
             deleteExperience={deleteExperience}
             clearExperience={clearExperience}

             />
             }
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
