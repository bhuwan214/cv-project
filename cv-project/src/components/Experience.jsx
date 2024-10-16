import InputGroup from "./InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export const Experience = () =>{

    return(
        <>

<div className="experience">

<h2>Expericence <FontAwesomeIcon icon={faAngleDown}  className='arrow-down'/>  </h2>

        <InputGroup
        id="companyName"
        type="text"
        name="Company-Name"
        labelText="Company Name"
        placeholder="Enter Company Name"

        />

        <InputGroup
            id="jobPosition"
            type="text"
            name="Job-Position"
            labelText="Position Title"
            placeholder="Enter your position"
        
        />
        <InputGroup
        id="jobStart"
        type="text"
        name="Job-Start"
        labelText="Start Date"
        placeholder="Job Start Date"
        />
        
        <InputGroup
        id="jobEnd"
        type="text"
        name="Job-End"
        labelText="End Date"
        placeholder="Job End Date "
        
        />
        <InputGroup
        id="location"
        type="text"
        name="job-location"
        labelText="Location"
        placeholder="City,Country"
optional="true"

        />

        <InputGroup 
        id="description"
        type="text-area"
        name="Job-Description"
        labelText="Job Description"
        placeholder="Enter your job description"


        />

        </div>
        </>
    )
}

