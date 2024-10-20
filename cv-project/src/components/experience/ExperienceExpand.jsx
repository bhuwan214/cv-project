import React from 'react';
import InputGroup from '../InputGroup'; // Reusable input component

function ExperienceExpand({ experience }) {
  const [formData, setFormData] = React.useState({
    companyName: experience.companyName,
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: ''
  });

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value
    });
  };

  return (
    <div className="experience-expand">
      <InputGroup
        id="company-name"
        labelText="Company Name"
        placeholder="Enter Company Name"
        value={formData.companyName}
        onChange={handleChange}
        data-key="companyName"
      />
      <InputGroup
        id="job-title"
        labelText="Job Title"
        placeholder="Enter Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
        data-key="jobTitle"
      />
      <InputGroup
        id="start-date"
        labelText="Start Date"
        placeholder="Enter Start Date"
        value={formData.startDate}
        onChange={handleChange}
        data-key="startDate"
      />
      <InputGroup
        id="end-date"
        labelText="End Date"
        placeholder="Enter End Date"
        value={formData.endDate}
        onChange={handleChange}
        data-key="endDate"
      />
      <InputGroup
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={formData.location}
        onChange={handleChange}
        data-key="location"
      />
     
      {console.log(formData.location)}
    </div>
  );
}

export default ExperienceExpand;
