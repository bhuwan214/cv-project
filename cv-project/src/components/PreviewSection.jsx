import { useState } from "react";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Personal from "./PersonalDetail";
import StickyBtn from "./StickyBtn";
import { ExampleEdu, ExampleExp } from "./Example";
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/preview.css";


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
    <Education onEducationUpdate={handleEducationUpdate} />
    <Experience onExperienceUpdate={handleExperienceUpdate} />
</div>
    </div>


    <div className="preview-container">

     {/* Display personal details */}
     <div className="personal-preview">   
      {personalDetails.length === 0 ? (
        <p>No personal details added.</p>
      ):(
        <>
        <h1 className="resume-name" >{personalDetails.fullName ||'John Doe'}</h1>

        <div className="contact-info">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          <span>{personalDetails.email||'john.doe@example.com'}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faPhone} />
          <span>{personalDetails.phoneNumber||'+91 9876543210'}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faLocationDot} />
          <span>{personalDetails.address||'123 Main St, Anytown, USA'}</span>
          </div>
        </div>
        </>
      )}
      </div>


      {/* Education Preview */}
      <div className="education-preview">
        <h2 className="preview-title">Education</h2>
        {educations.length === 0 ? (
          <>
          <ExampleEdu/>
          <ExampleEdu/>
          </>
          
          
        ) : (
          educations.map((edu) => (
            <div key={edu.id} className="education-info-preview">
            <div className="education-info-group">
              <p className="dates">{edu.startDate} - {edu.endDate}</p>
              <p>{edu.location}</p>
            </div>

            <div  className="education-info-group">
            <p className="education-info-institution">{edu.institution}</p>
            <p className="education-info-degree">{edu.degree}</p>
            </div>
            </div>

          ))
        )}

</div>
      {/* Experience Preview */}

      <div className="experience-preview">
        <h2 className="preview-title">Experience</h2>
        {experiences.length === 0 ? (
          <><ExampleExp/>  
          <ExampleExp/>
           </>
   ) : (
          experiences.map((exp) => (
            <div key={exp.id} className="experience-info-preview">
            <div className="experience-info-group">
              <p className="dates">{exp.startDate} - {exp.endDate}</p>
              <p>{exp.location}</p>
            </div>
            <div  className="experience-info-group">
            <p className="experience-info-company">{exp.companyName}</p>
            <p className="experience-info-position">{exp.jobTitle}</p>
            <p className="experience-info-description">{exp.description}</p>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
 </>
  );
}

export default PreviewSection;
