export const Education =()=>{

    return(
        <>
         <div className="education">
            <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input type="text" id="school"/>

                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree"/>

                <label htmlFor="start-date">Starting Date</label>
                <input type="date" id="start-date"/>

                <label htmlFor="end-date">Ending Date</label>
                <input type="date" id="end-date"/>

                <label htmlFor="loction">location</label>
                <input type="text" id="location" />
                   
            </div>
        </>
    )
}