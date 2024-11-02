import {useState} from "react";
import ExperienceInfo from "./ExperienceInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "../../style/animation.css"

 export function Experience(){

    const [isExpanded,setIsExpanded] = useState(false);

    const toggleExpand=()=>{
        setIsExpanded(!isExpanded);
    }

    return (

        <div className="experience">
            <div className="section-header" onClick={toggleExpand}>
            <h2>Experience  <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded?'':'open'}`} /></span> </h2>
            </div>
            {isExpanded && <ExperienceInfo/>}

        </div>


    );
}



// export const Experience = () =>{

//     return(
//         <>

// <div className="experience">

// <h2>Expericence <FontAwesomeIcon icon={faAngleDown}  className='arrow-down'/>  </h2>

//         <InputGroup
//         id="companyName"
//         type="text"
//         name="Company-Name"
//         labelText="Company Name"
//         placeholder="Enter Company Name"

//         />

//         <InputGroup
//             id="jobPosition"
//             type="text"
//             name="Job-Position"
//             labelText="Position Title"
//             placeholder="Enter your position"
        
//         />
//         <InputGroup
//         id="jobStart"
//         type="text"
//         name="Job-Start"
//         labelText="Start Date"
//         placeholder="Job Start Date"
//         />
        
//         <InputGroup
//         id="jobEnd"
//         type="text"
//         name="Job-End"
//         labelText="End Date"
//         placeholder="Job End Date "
        
//         />
//         <InputGroup
//         id="location"
//         type="text"
//         name="job-location"
//         labelText="Location"
//         placeholder="City,Country"
// optional="true"

//         />

//         <InputGroup 
//         id="description"
//         type="text-area"
//         name="Job-Description"
//         labelText="Job Description"
//         placeholder="Enter your job description"


//         />

//         </div>
//         </>
//     )
// }