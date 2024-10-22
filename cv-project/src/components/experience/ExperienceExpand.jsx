import React from 'react';
import InputGroup from "../InputGroup"; // Reusable input component

function ExperienceExpand({ experience }) {
  const [formData, setFormData] = React.useState({
    companyName: experience.companyName,
    jobTitle: experience.jobTitle,
    startDate: experience.startDate,
    endDate: experience.endDate,
    location: experience.location
  });

  const handleChange = (e, key) => {
    setFormData({

      [key]: e.target.value
    });
  };

  return (
    <div className="experience-expand">
      <InputGroup
            type="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter Company Name"
        value={formData.companyName}
        onChange={(e)=>handleChange(e,"companyName")}
        data-key="companyName"
      />
      <InputGroup
            type="text"
        id="job-title"
        labelText="Job Title"
        placeholder="Enter Job Title"
        value={formData.jobTitle}
        onChange={(e)=>handleChange(e,"jobTitle")}
        data-key="jobTitle"
      />
      <InputGroup
        type="text"
        id="start-date"
        labelText="Start Date"
        placeholder="Enter Start Date"
        value={formData.startDate}
        onChange={(e)=>handleChange(e,"startDate")}
        data-key="startDate"
      />
      <InputGroup
          type="text"
        id="end-date"
        labelText="End Date"
        placeholder="Enter End Date"
        value={formData.endDate}
        onChange={(e)=>handleChange(e,"endDate")}
        data-key="endDate"
      />
      <InputGroup
      type="text"
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={formData.location}
        onChange={(e)=>handleChange(e,"location")}
        data-key="location"
      />
     
      {console.log(formData)}
    </div>
  );
}

export default ExperienceExpand;
