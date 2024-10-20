import { Education } from "./education/Education"
import { Personal } from "./Personal"
import { Experience } from "./experience/Experience"
export const Base = ()=>{
    return (<>
<main>
  
    <div className="left-bar">

        <div className="sticky-btn">
        <div className="edit">
            <div className="edit-btn clear-resume"> Clear Resume</div>
            <div className="edit-btn load-example">Load Example</div>
            </div>
        </div>

        <div className="detail-component">
           <Personal/>
            <Education/>
            <Experience/>
           
           <div className="form-btn">
            <button id="save-btn">save</button>
           <button id="delete-btn">delete</button>
           </div>
            

            <div className="experince"></div>
        </div>
    </div>
    <div className="container">

    </div>
    </main>

    </>)

}