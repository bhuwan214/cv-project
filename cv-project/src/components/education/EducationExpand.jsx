import React,{ useEffect } from 'react';
import InputGroup from '../InputGroup'; // Reusable input component

function EducationExpand({ education , updateEducation, deleteEducation,clearEducation}) {
  const [formData, setFormData] = React.useState({
    schoolName: education.schoolName,
    degree: education.degree,
    startDate: education.startDate,
    endDate: education.endDate,
    location: education.location
  });

  //Sync formData with the experience prop when it updates( e.g when clear is called)
   useEffect(()=>{
    setFormData({
      schoolName: education.schoolName,
      degree: education.degree,
      startDate:education.startDate,
      endDate: education.endDate,
      location: education.location
    });
   },[education]);

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value
    });
  };

  return (
    <div className="education-expand">
      <InputGroup
        id="school-name"
        labelText="School Name"
        placeholder="Enter School Name"
        value={formData.schoolName}
        onChange={(e)=>handleChange(e,'schoolName')}
        data-key="schoolName"
      />
      <InputGroup
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree"
        value={formData.degree}
        onChange={(e)=>handleChange(e,"degree")}
        data-key="degree"
      />
      <InputGroup
        id="start-date"
        labelText="Start Date"
        placeholder="Enter Start Date"
        value={formData.startDate}
        onChange={(e)=>handleChange(e,"startDate")}
        data-key="startDate"
      />
      <InputGroup
        id="end-date"
        labelText="End Date"
        placeholder="Enter End Date"
        value={formData.endDate}
        onChange={(e)=>handleChange(e,"endDate")}
        data-key="endDate"
      />
      <InputGroup
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={formData.location}
        onChange={(e)=>handleChange(e,"location")}
        data-key="location"
      />
      
      <div className="form-buttons">
        
          <button type="button" onClick={() => deleteEducation(education.id)}>
            Delete
          </button>
          <button type="button" onClick={() => clearEducation(education.id)}>
            Clear
          </button>
          <button type="button" onClick={() => updateEducation(education.id, formData)}>
            Save
          </button>
        </div>
    </div>
  );
}

export default EducationExpand;
