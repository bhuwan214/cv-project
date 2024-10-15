import InputGroup from "./InputGroup"
export const Education = () => {

    return (
        <>
    

    <InputGroup
     type="text"
     id="date"
     labelText="Start Date"
     placeholder="Enter Start Date"
     data-key="startDate"
    />

        
            <div className="education">
                <form action="">
                    <h2>Education </h2>
                    <div className="input-group">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" placeholder="School" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" placeholder="Degree" />
                    </div>

                    <div className="input-group">
                        <div className="dates">
                            <div className="start">
                                <label htmlFor="start-date">Starting Date</label>
                                <input type="date" id="start-date" />
                            </div>
                        </div>
                        <div className="end">
                            <label htmlFor="end-date">Ending Date</label>
                            <input type="date" id="end-date" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="loction">location</label>
                        <input type="text" id="location" placeholder="City,Country" />
                    </div>
                </form>
            </div>
        </>
    )
}