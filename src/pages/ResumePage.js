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
    /* background-color: white; */
    padding: 3rem;
    hr {
        margin: 1rem;
        height: 2px;
        background-color: white;
        border-radius: 50px;
    }
`

export default ResumePage;
