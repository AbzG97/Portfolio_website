import React, {useState} from 'react'
import data from '../ProjectData'
import styled from "styled-components"
import Project from '../components/Project';

function Projects() {
    const [projects, setProjects] = useState(data());

    return (
        <StyledProjectsPage>
            {projects.map((project) => (
                <Project project={project}/>
            ))}

        </StyledProjectsPage>
    )
}

const StyledProjectsPage = styled.div`
    /* background-color: white; */
    width: 60%;
    margin-left: 30%;
    margin-top: 3%;
    padding: 1rem;
`

export default Projects
