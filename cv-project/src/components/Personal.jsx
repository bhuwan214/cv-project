import InputGroup from './InputGroup'

export const Personal=()=>{

    return(
        <>
         <div className="personal-detail">
            <form action="">
                <h2>Personal Details </h2>

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
recommended="true"

/>   

     <InputGroup
     id="phone-number"
     type="text"
     placeholder="Enter your number"
     name="phone-number"
     labelText="Phone Number"
     recommended="true"
     
     />

     <InputGroup
     id="address"
     type="text"
     placeholder="Enter your address"
     name="address"
     labelText="Address"
     recommended="true"
     
     />          
               
 </form>
 </div>
            
        </>
    )
}