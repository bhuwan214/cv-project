import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import InputGroup from './InputGroup'

export const Personal=()=>{

    return(
        <>
         <div className="personal-detail">
            <form action="">
                <h2><span className='title'>Personal Details </span> <FontAwesomeIcon icon={faAngleDown}  className='arrow-down'/>        
                </h2>

<InputGroup
id="name"
type="text"
labelText="Full Name"
name="fname"
placeholder="Enter Full Name"

/>

<InputGroup
id="email"
type="email"
labelText="E-mail"
name="e-mail"
placeholder="Enter email"


/>


                {/* <label htmlFor="fname"> Full name</label>
                <input type="text" id="fname" placeholder="Full name" />
             
                <label htmlFor="email" >Email</label>
                <input type="email" id="email" placeholder="Email"/>

                <label htmlFor="Pnumber">Phone number</label>
                <input type="number"  id="Pnumber" placeholder="Phone number"/>
                */}
               
                </form>
            </div>
            
        </>
    )
}