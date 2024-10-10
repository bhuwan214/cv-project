import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export const Personal=()=>{

    return(
        <>
         <div className="personal-detail">
                <h2><span>Personal Details </span> <FontAwesomeIcon icon={faAngleDown}  className='arrow-down'/>        
                </h2>

                <label htmlFor="fname"> Full name</label>
                <input type="text" id="fname" placeholder="Full name" />
             
                <label htmlFor="email" >Email</label>
                <input type="email" id="email" placeholder="Email"/>

                <label htmlFor="Pnumber">Phone number</label>
                <input type="number"  id="Pnumber" placeholder="Phone number"/>
            </div>
        
        </>
    )
}