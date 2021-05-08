import React from 'react'
import styled from "styled-components"

function ResumeQualificationSection({resumeData}) {
    return (
        <ResumeQualificationStyle>
            <p className="sectionTitle">Summary of <span>qualifications</span></p>
            <ul className="qualifications">
                {resumeData.qualifications.map((element) => (
                    <li>{element}</li>
                ))}

            </ul>

        </ResumeQualificationStyle>
    )
}

const ResumeQualificationStyle = styled.div`
    /* background-color: violet; */
    padding: 1rem;
    color: white;
    .sectionTitle {
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: lighter;
        padding-bottom: 1rem;
        span {
            color: lightgreen;
        }

    }
    .qualifications {
        display: grid;
        grid-template-columns: 25% 25% 25%;
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        li {
            font-weight: lighter;
            font-size: 1rem;
            letter-spacing: 2px;
            list-style: none;
        }
    }
`;



export default ResumeQualificationSection
