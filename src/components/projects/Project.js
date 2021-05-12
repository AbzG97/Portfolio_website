import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

function Project({project}) {
    return (
        <StyledProject>
              <p className="projectName" >{project.name}</p>
              <p className="projectDesc">{project.description}</p>
             

              <ul className="featuresList">
                  {project.features.map((feature) => (
                  <li key={uuidv4()}>{feature}</li>
              ))}
              </ul>

              <div className="techList">
                  {project.technologies.map((tech) => (
                  <p key={uuidv4()}>{tech}</p>
              ))}
              </div>
             
              <div className="links">
                  
                    <a href={project.github_rep}><button>Github link</button></a>
                    <a href={project.website_link}><button>Open app</button></a>
                  
              </div>
            
        </StyledProject>
    )
}

const StyledProject = styled.div`
    /* background-color: violet; */
    color: white;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: flex-start;
    /* width: 100%; */
    .projectName {
        font-size: 1.75rem;
        letter-spacing: 3px;
        font-weight: bold;
        padding: .5rem;
        color: violet;
    }

    .projectDesc {
        font-size: 1.25rem;
        letter-spacing: 2px;
        font-weight: lighter;
        padding: .5rem;
    }
    .techList {
        /* background-color: yellow; */
        width: 100%;
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        align-items: center;
        margin: 1rem;
        /* padding: 0.5rem; */
        grid-gap: 25px;
        p {
            background-color: lightgreen;
            margin: 1rem;
            padding: 1rem;
            border-radius: 25px;
            letter-spacing: 1px;
            color: black;
            font-weight: bolder;
            width: 75%;
            
        }
    }
    .featuresList {
        padding: 0rem 0rem 1rem 2rem;
        li {
            padding: .25rem;
            font-weight: lighter;
            letter-spacing: 2px;
        }
    }
    .links {
        padding: .85rem;
        width: 100%;
        display: flex;    
        align-items: center;
        justify-content: space-evenly;
        a {
            button {
                padding: 1rem;
                letter-spacing: 2px;
                font-family: 'Roboto', sans-serif;
                background-color: transparent;
                border: 2px lightskyblue solid;
                border-radius: 50px;
                transition: all .25s ease-in-out;
                font-weight: bold;
                color: white;
                cursor: pointer;
                &:hover {
                    background-color: lightskyblue;
                    color: black;
                }
            }
        }
    }
    @media (min-width: 768px){
        .techList {
            grid-template-columns: 33% 33% 33%;
        }   
    }
    @media (max-width: 600px){
        .techList {
            grid-template-columns: 50% 50%;
            margin: 0;
        }
    }
`

export default Project;
