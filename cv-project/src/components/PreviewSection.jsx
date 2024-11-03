function PreviewSection({ experience, education, personalDetails }) {
    return (
        <div className="preview-section">
            <h2>Preview</h2>
            
            {/* Personal Details Section */}
            <h3>Personal Details</h3>
            {Object.entries(personalDetails).map(([key, value]) => (
                value && <p key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</p>
            ))}

            {/* Experience Section */}
            <h3>Experience</h3>
            {experience.map((exp) => (
                <div key={exp.id} className="experience-item">
                    <h4>{exp.jobTitle} {exp.companyName && `at ${exp.companyName}`}</h4>
                    <p>{exp.startDate} {exp.endDate && `- ${exp.endDate}`}</p>
                    {exp.location && <p>{exp.location}</p>}
                    {exp.description && <p>{exp.description}</p>}
                </div>
            ))}

            {/* Education Section */}
            <h3>Education</h3>
            {education.map((edu) => (
                <div key={edu.id} className="education-item">
                    <h4>{edu.schoolName}</h4>
                    <p>{edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}</p>
                    <p>{edu.startDate} {edu.endDate && `- ${edu.endDate}`}</p>
                    {edu.location && <p>{edu.location}</p>}
                </div>
            ))}
        </div>
    );
}

export default PreviewSection;