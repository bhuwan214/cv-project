import { useState } from "react"
import InputGroup from "../InputGroup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../animation.css'

export const Education = () => {

    
    const [isExpanded,setIsExpanded] = useState(false);

    const toggleExpand=()=>{
        setIsExpanded(!isExpanded);
    }


    return (
        <>
            <div className="education">

                
                    <div className="section-header"  onClick={toggleExpand}>
                <h2>Education <span className='arrow-down'><FontAwesomeIcon icon={faAngleDown} className={` angle-down ${isExpanded?'':'open'}`} /></span> </h2>
                    </div>
                    <InputGroup
                        id="school"
                      type="text" 
                      name="school" 
                      placeholder="School"
                      labelText="School"
                    
                    />
                    <InputGroup 
                    id="degree"
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    labelText="Degree"
                    />

                    <InputGroup
                        type="text"
                        id="date"
                        name="start-Date"
                        labelText="Start Date"
                        placeholder="Enter Start Date"
                        data-key="startDate"
                    />

                    <InputGroup
                        type="text"
                        id="date"
                        name="end-Date"
                        labelText="End Date"
                        placeholder="Enter End Date"
                        data-key="endDate"
                    />

                    <InputGroup
                        id="location"
                        name="location"
                        type="name"
                        placeholder="City,Coutry"
                        labelText="Location"
                        optional="true"

                    />
            </div>
        </>
    )
}