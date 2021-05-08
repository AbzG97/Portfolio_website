import React, {useState} from 'react'
import styled from 'styled-components'

function FrontendSkillsSection() {
    const [frontendSkills, setFrontSkills] = useState([
        "HTML", "CSS", "SCSS", "React", "React styled components", "Javascript"
    ]);

    return (
        <StyledFrontendSection>
            <div className="frontendSkills">
                <p className="title"><span>Frontend</span> technologies</p>
                <p className="desc">Some of the technologies that I <span>learnt</span> and <span>use</span> to design the look of my projects </p>
                <div className="skills">
                    {frontendSkills.map((skill) => (
                        <p>{skill}</p>
                    ))}
                </div>
               
            </div>

        </StyledFrontendSection>
    )
}

const StyledFrontendSection = styled.div`
    /* background-color: white; */
    width: 60%;
    margin-left: 30%;
    margin-top: 1%;
    color: white;
    letter-spacing: 2px;
    font-weight: lighter;
    .frontendSkills {
        .title {
            font-size: 3.5rem;
            padding-bottom: 1rem;
            animation: slideFromBottom 2.85s ease-out;
            span {
                color: lightgreen;
            }
        }
        .desc {
            font-size: 1.5rem;
            padding-top: .5rem;
            padding-bottom: 1rem;
            animation: slideFromBottom 3.5s ease-out;
            span {
                color: violet;
            }
        }
        .skills {
            display: grid;
            grid-template-columns: 20% 20% 20% 20%;
            grid-gap: 15px;
            /* background-color: violet; */
            padding: 0.5rem;
            animation: slideFromBottom 4.25s ease-out;
            p {
                font-size: 1rem;
                border-right: 2px solid white;
                border-bottom: 2px solid white;
                border-radius: 15px;
                text-align: center;
                /* background-color: lightgreen; */
                padding: 0.5rem;
                transition: all 0.5s ease-in-out;
                &:hover {
                    color: black;
                    background-color: white;
                    border-color: black;
                }
            }
        }
        @keyframes slideFromBottom {
            0% {
                transform: translateY(50%);
                opacity: 0;

            }
            100% {
                transform: translateY(0%);
                opacity: 1;
            }
        }
    }

`;

export default FrontendSkillsSection;