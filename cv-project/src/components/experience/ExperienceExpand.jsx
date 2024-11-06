import React, { useEffect } from 'react';
import InputGroup from "../InputGroup";

function ExperienceExpand({ experience, updateExperience, deleteExperience, clearExperience }) {
  const [formData, setFormData] = React.useState({
    companyName: experience.companyName,
    jobTitle: experience.jobTitle,
    startDate: experience.startDate,
    endDate: experience.endDate,
    location: experience.location,
    description: experience.description
  });

  // Update the form data when the experience prop changes
  useEffect(() => {
    setFormData({
      companyName: experience.companyName,
      jobTitle: experience.jobTitle,
      startDate: experience.startDate,
      endDate: experience.endDate,
      location: experience.location,
      description: experience.description
    });
  }, [experience]);

  // Handle input changes and update experience immediately
  const handleChange = (e, key) => {
    const updatedFormData = { ...formData, [key]: e.target.value };
    setFormData(updatedFormData);
  };

  return (
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
        type="month"
        id="start-date"
        placeholder="Enter Start Date"
        labelText="Start Date"
        value={formData.startDate}
        onChange={(e) => handleChange(e, "startDate")}
      />
      <InputGroup
        type="month"
        id="end-date"
        placeholder="Enter End Date"
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
      <InputGroup
        type="text-area"
        id="description"
        labelText="Description"
        placeholder="Enter Description"
        value={formData.description}
        onChange={(e) => handleChange(e, "description")}
      />

      <div className="form-buttons">
        <button type="button" onClick={() => deleteExperience(experience.id)}>
          Delete
        </button>
        <button type="button" onClick={() => clearExperience(experience.id)}>
          Clear
        </button>
        <button type="button" onClick={() => updateExperience(formData, true)}>
          Save
        </button>
      </div>
    </div>
  );
}

export default ExperienceExpand;
