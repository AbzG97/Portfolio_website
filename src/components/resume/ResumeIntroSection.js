import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ResumeIntroSection({resumeData}) {
    return (
        <IntroSectionStyle>
            <p className="name">{resumeData.intro.name}</p>
            <div>
                <a href={`mailto:${resumeData.intro.email}`}><FontAwesomeIcon icon={faAt} size="2x" /> </a>
                <a href={resumeData.intro.linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x"/> </a>
                <a href={resumeData.intro.github}><FontAwesomeIcon icon={faGithub} size="2x"/> </a>
            </div>
        </IntroSectionStyle>
    )
}

const IntroSectionStyle = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: yellow; */
    justify-content: space-between;
    padding: 1rem;
    color: white;
    .name {
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: lighter;

    }
    
    div {
        width: 7%;
        /* background-color: violet; */
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-left: 3px solid black;
        border-color: white;
        a {
            
            padding-bottom: .5rem;
            &:nth-child(1) {
                animation: ShowLinks .5s ease-in-out;
            }
            &:nth-child(2) {
                animation: ShowLinks .75s ease-in-out;
            }
            &:nth-child(3) {
                animation: ShowLinks 1s ease-in-out;
            }
            @keyframes ShowLinks {
                0% {
                    transform: translateX(150%);
                    opacity: 0;
                }
                100% {
                    transform: translateX(0%);
                }
            }
        }

    }


`;

export default ResumeIntroSection;
