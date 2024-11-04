import { useState } from "react";
import Experience from "./experience/Experience";

function PreviewSection() {
  const [experiences, setExperiences] = useState([]);

  const handleExperienceUpdate = (newExperience) => {
    setExperiences((prevExperiences) => {
      const existingIndex = prevExperiences.findIndex(exp => exp.id === newExperience.id);
      if (newExperience.deleted) {
        return prevExperiences.filter(exp => exp.id !== newExperience.id);
      } else if (existingIndex >= 0) {
        const updatedExperiences = [...prevExperiences];
        updatedExperiences[existingIndex] = newExperience;
        return updatedExperiences;
      } else {
        return [...prevExperiences, newExperience];
      }
    });
  };

  return (
    <div className="preview-section">
      <h2>Experience Preview</h2>
      {experiences.length === 0 ? (
        <p>No experience added.</p>
      ) : (
        experiences.map((exp) => (
          <div key={exp.id} className="preview-item">
            <h3>{exp.jobTitle} at {exp.companyName}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.location}</p>
          </div>
        ))
      )}
      <Experience onExperienceUpdate={handleExperienceUpdate} />
    </div>
  );
}

export default PreviewSection;
