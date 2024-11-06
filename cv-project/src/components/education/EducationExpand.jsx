import React, { useEffect } from 'react';
import InputGroup from "../InputGroup";

function EducationExpand({ education, updateEducation, deleteEducation, clearEducation }) {
  const [formData, setFormData] = React.useState({
    institution: education.institution,
    degree: education.degree,
    startDate: education.startDate,
    endDate: education.endDate,
    location: education.location,
  });

  // Update the form data when the education prop changes
  useEffect(() => {
    setFormData({
      institution: education.institution,
      degree: education.degree,
      startDate: education.startDate,
      endDate: education.endDate,
      location: education.location,
    });
  }, [education]);

  // Handle input changes and update experience immediately
  const handleChange = (e, key) => {
    const updatedFormData = { ...formData, [key]: e.target.value };
    setFormData(updatedFormData);
  };

  return (
    <div className="education-expand">
      <InputGroup
        type="text"
        id="institution"
        labelText="Institution"
        placeholder="Enter Institution"
        value={formData.institution}
        onChange={(e) => handleChange(e, "institution")}
      />
      <InputGroup
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree"
        value={formData.degree}
        onChange={(e) => handleChange(e, "degree")}
      />
      <InputGroup
        type="text"
        id="start-date"
        placeholder="Enter Start Date"
        labelText="Start Date"
        value={formData.startDate}
        onChange={(e) => handleChange(e, "startDate")}
      />
      <InputGroup
        type="text"
        id="end-date"
        placeholder="Enter End Date"
        labelText="End Date"
        value={formData.endDate}
        onChange={(e) => handleChange(e, "endDate")}
      />
      <InputGroup
        type="text"
        id="location"
        placeholder="Enter Location"
        labelText="Location"
        value={formData.location}
        onChange={(e) => handleChange(e, "location")}
      />

      <div className="form-buttons">
        <button type="button" onClick={() => deleteEducation(education.id)}>
          Delete
        </button>
        <button type="button" onClick={() => clearEducation(education.id)}>
          Clear
        </button>
        <button type="button" onClick={() => updateEducation(formData,true)}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EducationExpand;
