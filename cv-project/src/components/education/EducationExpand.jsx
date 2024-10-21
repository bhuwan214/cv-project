import React from 'react';
import InputGroup from '../InputGroup'; // Reusable input component

function EducationExpand({ education }) {
  const [formData, setFormData] = React.useState({
    schoolName: education.schoolName,
    degree: '',
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
    <div className="education-expand">
      <InputGroup
        id="school-name"
        labelText="School Name"
        placeholder="Enter School Name"
        value={formData.schoolName}
        onChange={handleChange}
        data-key="schoolName"
      />
      <InputGroup
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree"
        value={formData.degree}
        onChange={handleChange}
        data-key="degree"
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
    </div>
  );
}

export default EducationExpand;
