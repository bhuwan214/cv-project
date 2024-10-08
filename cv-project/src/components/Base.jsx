export const Base = ()=>{
    return (<>
<main>
  
    <div className="left-bar">
        <div className="edit"></div>
        <div className="description">
            <div className="personal-detail">
                <h2>Personal Details</h2>

                <label htmlFor="fname"> Full name</label>
                <input type="text" id="fname" />
             
                <label htmlFor="email" >Email</label>
                <input type="email" id="email"/>

                <label htmlFor="Pnumber">Phone number</label>
                <input type="number"  id="Pnumber"/>


            </div>
            <div className="education">
                <label htmlFor="school">School</label>
                <input type="text" id="school"/>

                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree"/>

                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date"/>

                <label htmlFor="loction">location</label>
                <input type="date" id="location" />

                    <button>save</button>
                    <button>delete</button>

            </div>
            <div className="experince"></div>
        </div>
    </div>
    <div className="container"></div>
    </main>

    </>)

}