// import { useState } from 'react';
// import ExperienceExpand from './ExperienceExpand';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function ExperienceInfo({experience,updateExperiences}) {
//   // Initialize state for experiences, including `visible` property for each
//   const [experiences, setExperiences] = useState([
//     { id: 1, companyName: 'Umbrella Inc.', visible: false, jobTitle: "Manager", startDate: "2018-02-12", endDate: "2023-11-19", location: "Gutenberg, New Jersey" },
//     { id: 2, companyName: 'Black Mesa Labs', visible: false, jobTitle: "Scientist", startDate: "2016-05-20", endDate: "2020-03-11", location: "New Mexico" }
//   ]);

//   // Initialize state for expanded index to handle expanding/collapsing content
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Toggle the expanded section and the visibility of each experience title independently
//   const toggleExperienceExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);  // Toggle expanded section

//     // Toggle visibility for the selected experience
//     setExperiences(experiences.map((exp, i) =>
//       i === index ? { ...exp, visible: !exp.visible } : exp
//     ));
//   };

//   // Function to add a new experience form
//   const addExperience = () => {
//     const newExperience = {
//       id: Date.now(),
//       companyName: '',
//       jobTitle: '',
//       startDate: '',
//       endDate: '',
//       location: '',
//       visible: true // Automatically expand the new experience form
//     };
//     setExperiences([...experiences, newExperience]);
//     setExpandedIndex(experiences.length);  // Automatically expand the new experience form
//   };

//  // Function to update or create a new experience
//  const updateExperience = (id, updatedData) => {
//   const existingExperience = experiences.find((exp) => exp.id === id);
  
//   if (existingExperience) {
//     // Update an existing experience
//     const updatedExperiences = experiences.map((exp) =>
//       exp.id === id ? { ...exp, ...updatedData } : exp
//     );
//     setExperiences(updatedExperiences);
//   } else {
//     // Create a new experience if it doesn't exist
//     const newExperience = {
//       id: Date.now(),
//       ...updatedData,
//       visible: false
//     };
//     setExperiences([...experiences, newExperience]);
//   }
  
//   // Close the expanded section after saving
//   setExpandedIndex(null);
// };

//   // Function to delete an experience
//   const deleteExperience = (id) => {
//     const filteredExperiences = experiences.filter((exp) => exp.id !== id);
//     setExperiences(filteredExperiences);
//   };

//   // Function to clear the experience data
//   const clearExperience = (id) => {
//     const clearedExperiences = experiences.map((exp) =>
//       exp.id === id
//         ? { ...exp, companyName: '', jobTitle: '', startDate: '', endDate: '', location: '' }
//         : exp
//     );
//     setExperiences(clearedExperiences);
//   };

//   return (
//     <>
//       <div className="experience-info">
//         {experiences.map((exp, index) => (
//           <div key={index} className="experience-item">
//             <div className="experience-title" onClick={() => toggleExperienceExpand(index)}>
//               <h2>{exp.companyName || 'New Experience'}
//                 {/* Toggle between eye and slashed eye icons */}
//                 <span style={{ marginLeft: '10px' }}>
//                   {exp.visible
//                     ? <FontAwesomeIcon icon={faEyeSlash} />
//                     : <FontAwesomeIcon icon={faEye} />}
//                 </span>
//               </h2>
//             </div>

//             {/* If the clicked experience item matches the expanded index, show the expanded content */}
//             {expandedIndex === index && (
//               <ExperienceExpand
//                 experience={exp}
//                 key={exp.id}
//                 updateExperience={updateExperience}
//                 deleteExperience={deleteExperience}
//                 clearExperience={clearExperience}
//               />
//             )}
//           </div>
//         ))}
//       </div>
      

//       <div className="btn">
//         <button className="add-experience-btn" onClick={addExperience}>+ Experience</button>
//       </div>
//     </>
//   );
// }

// export default ExperienceInfo;


import { useState } from 'react';
import ExperienceExpand from './ExperienceExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ExperienceInfo({ experiences, updateExperiences }) {
  // Initialize state for expanded index to handle expanding/collapsing content
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded section and the visibility of each experience title independently
  const toggleExperienceExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function to add a new experience form
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      visible: true // Automatically expand the new experience form
    };
    updateExperiences(newExperience); // Pass the new experience to the parent
    setExpandedIndex(experiences.length); // Automatically expand the new experience form
  };

  // Function to update an existing experience
  const updateExperience = (id, updatedData) => {
    const updatedExperience = { id, ...updatedData };
    updateExperiences(updatedExperience); // Pass the updated experience to the parent
    setExpandedIndex(null);
  };

  // Function to delete an experience
  const deleteExperience = (id) => {

    const filteredExperiences = experiences.filter((exp) => exp.id !== id);
    setExperiences(filteredExperiences);
  };

  // Function to clear the experience data
  const clearExperience = (id) => {
    const clearedExperiences = experiences.map((exp) =>
      exp.id === id
        ? { ...exp, companyName: '', jobTitle: '', startDate: '', endDate: '', location: '' } : exp
    );
    setExperiences(clearedExperiences);
    updateExperiences({ id, deleted: true }); // Mark experience as deleted in parent
  };

  return (
    <>
      <div className="experience-info">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-title" onClick={() => toggleExperienceExpand(index)}>
              <h2>{exp.companyName || 'New Experience'}
                <span style={{ marginLeft: '10px' }}>
                  {exp.visible
                    ? <FontAwesomeIcon icon={faEyeSlash} />
                    : <FontAwesomeIcon icon={faEye} />}
                </span>
              </h2>
            </div>

            {expandedIndex === index && (
              <ExperienceExpand
                experience={exp}
                updateExperience={updateExperience}
                deleteExperience={deleteExperience}
              />
            )}
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="add-experience-btn" onClick={addExperience}>+ Experience</button>
      </div>
    </>
  );
}

export default ExperienceInfo;
