export const Personal=()=>{

    return(
        <>
         <div className="personal-detail">
                <h2>Personal Details</h2>

                <label htmlFor="fname"> Full name</label>
                <input type="text" id="fname" />
             
                <label htmlFor="email" >Email</label>
                <input type="email" id="email"/>

                <label htmlFor="Pnumber">Phone number</label>
                <input type="number"  id="Pnumber"/>
            </div>
        
        </>
    )
}