import  { useState } from 'react';
 import { Education } from './education/Education';
import PersonalDetails  from './PersonalDetail';
import PreviewSection from './PreviewSection';
import '../style/leftSection.css'
import '../style/form.css'


function Base() {
    const [experienceData, setExperienceData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [personalDetails, setPersonalDetails] = useState({});

 var experiencesData =[]

    return (
        <>
        <main>
          
            <div className="left-bar">
        
                <div className="sticky-btn">
                <div className="edit">
                    <div className="edit-btn clear-resume"> Clear Resume</div>
                    <div className="edit-btn load-example">Load Example</div>
                    </div>
                </div>
                   
                </div>
            
        
            <PreviewSection
             experience={experienceData}
             education={educationData}
             personalDetails={personalDetails}
            />
            </main>
        
            </>
            )
      
}


export default Base;
