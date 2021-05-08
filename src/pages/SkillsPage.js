import React from 'react'
import BackendSkillsSection from '../components/skills/BackendSkillsSection'
import FrontendSkillsSection from '../components/skills/FrontendSkillsSection'

function SkillsPage() {
    return (
        <div className="skillsPage">
            <BackendSkillsSection/>
            <FrontendSkillsSection/>
        </div>
    )
}

export default SkillsPage;

