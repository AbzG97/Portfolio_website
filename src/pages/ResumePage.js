import React, {useState} from 'react'

import styled from "styled-components"
import ResumeIntroSection from '../components/resume/ResumeIntroSection';
import ResumeQualificationSection from '../components/resume/ResumeQualificationSection';
import EducationSection from '../components/resume/EducationSection';
import ExperienceSection from '../components/resume/ExperienceSection';

function ResumePage({resumeData}) {
    
    return (
        <ResumePageStyle>
            <ResumeIntroSection resumeData={resumeData}/>
            <hr/>
            <ResumeQualificationSection resumeData={resumeData}/>
            <hr/>
            <EducationSection resumeData={resumeData}/>
            <hr/>
            <ExperienceSection resumeData={resumeData}/>

        </ResumePageStyle>
    )
}

const ResumePageStyle = styled.div`
    width: 60%;
    margin-left: 30%;
    margin-top: 3%;
    letter-spacing: 2px;
    color: white;
    font-weight: lighter;
    padding: 1rem;
    hr {
        margin: 1rem;
        height: 2px;
        background-color: white;
        border-radius: 50px;
    }
     /* for tablets */
     @media (max-width: 768px) {
        margin: 0;
        margin-top: 6rem;
        margin-right: 10%;
        width: 95%;
    }
`

export default ResumePage;
