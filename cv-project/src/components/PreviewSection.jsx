 function PreviewSection({ experience, education, personalDetails }) {
    return (
        <div className="preview-section">
            <h2>Preview</h2>
            <h3>Personal Details</h3>
            <p>Name: {personalDetails.name}</p>
            <p>Email: {personalDetails.email}</p>
            {/* Add other personal detail fields */}

            <h3>Experience</h3>
            {experience.map((exp) => (
                <div key={exp.id}>
                    <h4>{exp.jobTitle} at {exp.companyName}</h4>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.location}</p>
                </div>
            ))}

            <h3>Education</h3>
            {/* Map through education data similarly */}
        </div>
    );
}

export default PreviewSection;