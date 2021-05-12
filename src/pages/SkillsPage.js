import React from 'react'
import BackendSkillsSection from '../components/skills/BackendSkillsSection'
import FrontendSkillsSection from '../components/skills/FrontendSkillsSection'
import styled from 'styled-components'

function SkillsPage() {
    return (
        <StyledSkillsPage>
            <BackendSkillsSection/>
            <FrontendSkillsSection/>
        </StyledSkillsPage>
         
    )
}

const StyledSkillsPage = styled.div`
    width: 60%;
    margin-left: 30%;
    margin-top: 3%;
    letter-spacing: 2px;
    color: white;
    font-weight: lighter;
    padding: 1rem;
    /* for tablets */
    @media (max-width: 768px) {
        margin: 0;
        margin-top: 6rem;
        margin-left: 10%;
    }

`

export default SkillsPage;

