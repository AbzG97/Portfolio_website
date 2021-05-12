import React from 'react'
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';

function ResumeQualificationSection({resumeData}) {
    return (
        <ResumeQualificationStyle>
            <p className="sectionTitle">Summary of <span>qualifications</span></p>
            <ul className="qualifications">
                {resumeData.qualifications.map((element) => (
                    <li key={uuidv4()}>{element}</li>
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
        grid-gap: 20px;
        li {
            font-weight: lighter;
            font-size: 1rem;
            letter-spacing: 2px;
            list-style: none;
        }
    }
    @media (max-width: 365px) {
        .qualifications {
            grid-template-columns: 50% 50%;
            padding: 1rem;
        }
    }
`;



export default ResumeQualificationSection
