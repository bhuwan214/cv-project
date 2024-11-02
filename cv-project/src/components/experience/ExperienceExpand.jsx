import React, { useEffect } from 'react';
import InputGroup from "../InputGroup"; // Reusable input component

function ExperienceExpand({ experience, updateExperience, deleteExperience, clearExperience }) {
  const [formData, setFormData] = React.useState({
    companyName: experience.companyName,
    jobTitle: experience.jobTitle,
    startDate: experience.startDate,
    endDate: experience.endDate,
    location: experience.location
  });

  // Sync formData with the experience prop when it updates (e.g., when clear is called)
  useEffect(() => {
    setFormData({
      companyName: experience.companyName,
      jobTitle: experience.jobTitle,
      startDate: experience.startDate,
      endDate: experience.endDate,
      location: experience.location
    });
  }, [experience]);

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value
    });
  };

  return (
    <>
      <div className="experience-expand">
        <InputGroup
          type="text"
          id="company-name"
          labelText="Company Name"
          placeholder="Enter Company Name"
          value={formData.companyName}
          onChange={(e) => handleChange(e, "companyName")}
        />
        <InputGroup
          type="text"
          id="job-title"
          labelText="Job Title"
          placeholder="Enter Job Title"
          value={formData.jobTitle}
          onChange={(e) => handleChange(e, "jobTitle")}
        />
        <InputGroup
          type="date"
          id="start-date"
          labelText="Start Date"
          value={formData.startDate}
          onChange={(e) => handleChange(e, "startDate")}
        />
        <InputGroup
          type="date"
          id="end-date"
          labelText="End Date"
          value={formData.endDate}
          onChange={(e) => handleChange(e, "endDate")}
        />
        <InputGroup
          type="text"
          id="location"
          labelText="Location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={(e) => handleChange(e, "location")}
        />


        <div className="form-buttons">
          
          <button type="button" onClick={() => deleteExperience(experience.id)}>
            Delete
          </button>
          <button type="button" onClick={() => clearExperience(experience.id)}>
            Clear
          </button>
          <button type="button" onClick={() => updateExperience(experience.id, formData)}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default ExperienceExpand;

