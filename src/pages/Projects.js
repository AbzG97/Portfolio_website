import React, {useState} from 'react'
import data from '../ProjectData'
import styled from "styled-components"
import Project from '../components/projects/Project';
import { v4 as uuidv4 } from 'uuid';

function Projects() {
    const [projects, setProjects] = useState(data());

    return (
        <StyledProjectsPage>
            {projects.map((project) => (
                <Project key={uuidv4()} project={project}/>
            ))}

        </StyledProjectsPage>
    )
}

const StyledProjectsPage = styled.div`
    width: 60%;
    margin-left: 30%;
    margin-top: 3%;
    letter-spacing: 2px;
    color: white;
    padding: 1rem;
    /* for tablets / ipads */
    @media (max-width: 768px){
        width: 85%;
        /* margin: 6rem 0rem 0rem 1rem; */
        margin: 0rem;
        margin-top: 6rem;
    }
    
`

export default Projects
