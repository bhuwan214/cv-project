import { Education } from "./education/Education"
import { Personal } from "./Personal"
import { Experience } from "./experience/Experience"
import '../style/leftSection.css'


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
           
        </div>
    </div>
    <div className="preview-container">


    </div>
    </main>

    </>)

}