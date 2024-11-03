// import { useState } from "react";
// import ExperienceInfo from "./ExperienceInfo";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import "../../style/animation.css";

// export function Experience() {
//     const [experiences, setExperiences] = useState([]);
//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     // Function to update experiences from child component
//     const updateExperiences = (newExperience) => {
//         setExperiences((prevExperiences) => {
//             const existingIndex = prevExperiences.findIndex(exp => exp.id === newExperience.id);
//             if (existingIndex >= 0) {
//                 // Update existing experience
//                 const updatedExperiences = [...prevExperiences];
//                 updatedExperiences[existingIndex] = newExperience;
//                 return updatedExperiences;
//             } else {
//                 // Add new experience
//                 return [...prevExperiences, newExperience];
//             }
//         });
//     };

//     return (
//         <div className="experience">
//             <div className="section-header" onClick={toggleExpand}>
//                 <h2>
//                     Experience  
//                     <span className='arrow-down'>
//                         <FontAwesomeIcon icon={faAngleDown} className={`angle-down ${isExpanded ? '' : 'open'}`} />
//                     </span>
//                 </h2>
//             </div>
//             {isExpanded && <ExperienceInfo experiences={experiences} updateExperiences={updateExperiences} />}
//             {console.log(experiences)} {/* This will log the updated experiences */}
//         </div>
//     );
// }


import { useState } from "react";
import ExperienceInfo from "./ExperienceInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "../../style/animation.css";

export function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Function to update experiences from child component
    const updateExperiences = (newExperience) => {
        if (newExperience.deleted) {
            // If experience is marked for deletion
            setExperiences((prev) => prev.filter(exp => exp.id !== newExperience.id));
        } else {
            // Update or add the experience
            setExperiences((prev) => {
                const existingIndex = prev.findIndex(exp => exp.id === newExperience.id);
                if (existingIndex >= 0) {
                    // Update existing experience
                    const updatedExperiences = [...prev];
                    updatedExperiences[existingIndex] = newExperience;
                    return updatedExperiences;
                } else {
                    // Add new experience
                    return [...prev, newExperience];
                }
            });
        }
    };

    return (
        <div className="experience">
            <div className="section-header" onClick={toggleExpand}>
                <h2>
                    Experience  
                    <span className='arrow-down'>
                        <FontAwesomeIcon icon={faAngleDown} className={`angle-down ${isExpanded ? '' : 'open'}`} />
                    </span>
                </h2>
            </div>
            {isExpanded && <ExperienceInfo experiences={experiences} updateExperiences={updateExperiences} />}
            {console.log(experiences)} {/* This will log the updated experiences */}
        </div>
    );
}
