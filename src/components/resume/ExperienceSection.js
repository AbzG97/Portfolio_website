import React from 'react'
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';

function ExperienceSection({resumeData}) {
    return (
        <ExperienceSectionStyle>
             <p className="sectionTitle">Experience</p>
             <div className="workList">
                 {resumeData.work.map((workplace) => (
                     <div key={uuidv4()} className="workplace">
                         <p>{workplace.title} / {workplace.company}</p>
                         <p>{workplace.location} / {workplace.dates}</p>
                         <ul>
                         {workplace.tasks.map((task) => (
                            <li>{task}</li>
                         ))}
                         </ul>
                     </div>
                 ))}

             </div>

        </ExperienceSectionStyle>

    )
}

const ExperienceSectionStyle = styled.div`
    padding: 1rem;
    letter-spacing: 2px;
    .sectionTitle {
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: lighter;
        padding-bottom: .5rem;
        color: lightgreen;
    }
    .workplace {
        padding-top: 1rem;
        color: violet;
        ul {
            color: white;
            padding-left: 1rem;
            padding-top: 1rem;
            
        }
    }
`;

export default ExperienceSection
