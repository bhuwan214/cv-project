import { useState } from "react";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Personal from "./PersonalDetail";
import StickyBtn from "./StickyBtn";

function PreviewSection() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const handlePersonalDetailChange = (field, value) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

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

  const handleEducationUpdate = (newEducation) => {
    setEducations((prevEducations) => {
      const existingIndex = prevEducations.findIndex(edu => edu.id === newEducation.id);
      if (newEducation.deleted) {
        return prevEducations.filter(edu => edu.id !== newEducation.id);
      } else if (existingIndex >= 0) {
        const updatedEducations = [...prevEducations];
        updatedEducations[existingIndex] = newEducation;
        return updatedEducations;
      } else {
        return [...prevEducations, newEducation];
      }
    });
  };


  return (
  <>

  <div className="left-bar">
    
        <StickyBtn/>
   <div className="detail-component">
    {/* Render the form sections */}
    <Personal onPersonalDetailChange={handlePersonalDetailChange} />
    <Experience onExperienceUpdate={handleExperienceUpdate} />
    <Education onEducationUpdate={handleEducationUpdate} />
</div>
    </div>


    <div className="preview-container">

  
      <h2>Personal Details</h2>
      {/* Display personal details */}
      <div className="personal-preview">
        <h3>{personalDetails.fullName}</h3>
        <p>{personalDetails.email}</p>
        <p>{personalDetails.phoneNumber}</p>
        <p>{personalDetails.address}</p>
      </div>

      {/* Experience Preview */}
      <div className="experience-preview">
        <h2>Experience</h2>
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
      </div>

      {/* Education Preview */}
      <div className="education-preview">
        <h2>Education</h2>
        {educations.length === 0 ? (
          <p>No education added.</p>
        ) : (
          educations.map((edu) => (
            <div key={edu.id} className="preview-item">
              <h3>{edu.degree} from {edu.institution}</h3>
              <p>{edu.startDate} - {edu.endDate}</p>
              <p>{edu.location}</p>
            </div>
          ))
        )}
      </div>

      
    </div>
 </>
  );
}

export default PreviewSection;
