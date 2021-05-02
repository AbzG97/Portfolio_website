import React from 'react'
import BackendSkillsSection from '../components/BackendSkillsSection'
import FrontendSkillsSection from '../components/FrontendSkillsSection'

function SkillsPage() {
    return (
        <div className="skillsPage">
            <BackendSkillsSection/>
            <FrontendSkillsSection/>
        </div>
    )
}

export default SkillsPage;

