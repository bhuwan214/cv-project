import InputGroup from "./InputGroup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export const Education = () => {

    return (
        <>
            <div className="education">

                <form action="">
                    <h2>Education  <FontAwesomeIcon icon={faAngleDown}  className='arrow-down'/> </h2>
                   
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


                    />
                
                </form>
            </div>
        </>
    )
}