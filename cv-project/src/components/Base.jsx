import { Education } from "./Education"
import { Personal } from "./Personal"


export const Base = ()=>{
    return (<>
<main>
  
    <div className="left-bar">
        <div className="edit"></div>
        <div className="description">
           <Personal></Personal>
            <Education></Education>
           
            <button id="save-btn">save</button>
            <button id="delete-btn">delete</button>

            <div className="experince"></div>
        </div>
    </div>
    <div className="container"></div>
    </main>

    </>)

}