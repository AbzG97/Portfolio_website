import React from 'react'
import styled from "styled-components"

function EducationSection({resumeData}) {
    return (
        <EducationSectionStyle>
            <p className="sectionTitle">Education</p>
            <div className="schoolList">
                {resumeData.education.map((school) => (
                    <div className="school">
                        <p className="diploma">{school.diploma} /</p>
                        <p>{school.school}, {school.location}</p>
                        {school.highlights.map((element) => (
                            <ul>
                                <li>{element}</li>
                            </ul>
                        ))}
                    </div> 
                ))}

            </div>

        </EducationSectionStyle>
    )
}

const EducationSectionStyle = styled.div`
    /* background-color: white; */
    color: white;
    padding: 1rem;
    letter-spacing: 2px;
   
    .sectionTitle {
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: lighter;
        padding-bottom: 1rem;
        color: lightgreen;
    }
    .schoolList {
        .school {
            color: violet;
            .diploma {
                padding-bottom: .5rem;
            }
            ul {
                font-weight: lighter;
                color: white;
                padding: 1rem;
            }
        }
    }

`;

export default EducationSection
