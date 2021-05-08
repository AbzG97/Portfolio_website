import React from 'react'
import styled from 'styled-components'

function Project({project}) {
    return (
        <StyledProject>
              <p className="projectName" >{project.name}</p>
              <p className="projectDesc">{project.description}</p>
             

              <ul className="featuresList">
                  {project.features.map((feature) => (
                  <li>{feature}</li>
              ))}
              </ul>

              <div className="techList">
                  {project.technologies.map((tech) => (
                  <p>{tech}</p>
              ))}
              </div>
             
              <div className="links">
                  
                    <a href={project.github_rep}><button>Github link</button></a>
                    <a href={project.github_rep}><button>Open app</button></a>
                  
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
        display: flex;
        flex-direction: row;
        padding: 0.5rem;
        p {
            background-color: lightgreen;
            margin: 0rem 1rem 0rem 1rem;
            padding: .35em;
            border-radius: 50px;
            letter-spacing: 2px;
            color: black;
            font-weight: bolder;
            
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
        padding: .5rem;
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
`

export default Project;
