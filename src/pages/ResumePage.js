import React, {useState} from 'react'
import data from '../ResumeData'
import styled from "styled-components"
import ResumeIntroSection from '../components/ResumeIntroSection';
import ResumeQualificationSection from '../components/ResumeQualificationSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';

function ResumePage() {
    const [resumeData, setResumeData] = useState(data());
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
