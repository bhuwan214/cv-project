import { useState } from 'react';
import EducationExpand from './EducationExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function EducationInfo() {
  // Initialize state for experiences, including `visible` property for each
  const [educations,setEducations] = useState([
    { id:1 , schoolName: 'London City University', visible: true },
    { id :2, schoolName: 'Hidden University', visible: true }
  ]);

  // Initialize state for expanded index to handle expanding/collapsing content
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded section and the visibility of each education title independently
  const toggleEducationExpand=(index)=>{
    setExpandedIndex(expandedIndex===index ? null:index);

   // Toggle visibility for the selected experience
   setEducations(educations.map((edu, i) =>
    i === index ? { ...edu, visible: !edu.visible } : edu
  ));
};

//Function to add a new Education form
const addEducation = ()=>{
  const newEducation ={
    id :Date.now(),
    schoolName:'',
    degree:'',
    startDate:'',
    endDate:'',
    location:'',
    visible:true //Automatically expand the new Education form
  };
  setEducations([...educations, newEducation]);
  setExpandedIndex(educations.length);   //Automatically expand the new Education form
};

// Function to update or create a new experience
const updateEducation = (id, updatedData) => {
  const existingEducation = educations.find((edu) => edu.id === id);
  
  if (existingEducation) {
    // Update an existing experience
    const updatedEducations = educations.map((edu) =>
      edu.id === id ? { ...edu, ...updatedData } : edu
    );
    setEducations(updatedEducations);
  } else {
    // Create a new experience if it doesn't exist
    const newEducation = {
      id: Date.now(),
      ...updatedData,
      visible: false
    };
    setEducations([...educations, newEducation]);
  }
  
  // Close the expanded section after saving
  setExpandedIndex(null);
};
//Function to delete an education
const deleteEducation =(id)=>{
  const filteredEducations = educations.filter((edu)=>edu.id !== id);
  setEducations(filteredEducations)
};

//Function to clear the education data
const clearEducation =(id)=>{
  const clearedEducations =educations.map((edu)=>
  edu.id === id 
  ?{...edu, schoolName :'', degree:'', startDate:'',endDate:'',location:''} : edu
);
setEducations(clearedEducations)
};

  return (
    <>
    <div className="education-info">
      {educations.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-title" onClick={() => toggleEducationExpand(index)}>
            <h2>{edu.schoolName|| "New Education"}
            <span style={{ marginLeft: '10px' }}>
                  {edu.visible
                    ? <FontAwesomeIcon icon={faEyeSlash} />
                    : <FontAwesomeIcon icon={faEye} />}
                </span>
                </h2>
          </div> 

          {/* If the clicked education item matches the expanded index, show the expanded form */}
          {expandedIndex === index &&
          ( <EducationExpand
           education={edu} 
           key={edu.id}
           updateEducation={updateEducation}
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
