import React from 'react'
import styled from 'styled-components'

function HomeSection() {
    return (
        <StyledHomeSection>
            <div className="intro">
                <div className="title">
                    <p id="name">Hi I am <span>Abdulla</span> Ghazalah</p>
                    <p id="desc">A current programming student and <span>aspiring</span> web developer</p>
                </div>
                <div className="aboutMe">
                    <p>Currently working as a Supply Technician in the Canadian Armed Forces reserves, while attending Sheridan college for an advanced diploma in Computer Systems - System Analyst.
                         I am skilled in computer programming languages such as Java and JavaScript. I spend my time learning about web development,
                          and technologies like Node.js, MongoDB, and JSON APIs in my free time to get better at developing web apps, 
                          since it's a field I want to get into and hopefully be able to intern for it soon.</p>
                </div>
            </div>
        </StyledHomeSection>
    )
}

const StyledHomeSection = styled.div`
    /* background-color: violet; */
    color: white;
    letter-spacing: 3px;
    margin-left: 35%;
    margin-top: 10%;
    width: 60%;
    font-weight: lighter;
    
    
    .intro {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content:center;
        .title {
            padding: 0rem 0rem 4rem 0rem;
            
            #name {
                font-size: 2.5rem;
                padding: 0rem 0rem 1rem 0rem;
                animation: slideFromBottom 1s ease-out;
                span {
                    color: lightgreen;
                }
            }
            #desc {
                animation: slideFromBottom 1.2s ease-out;
                font-size: 1.5rem;
                span {
                    color: violet;
                }
            }
        }
        .aboutMe {
            animation: slideFromBottom 1.5s ease-out;
            padding: 0rem 0rem 4rem 0;
            font-size: 1.25rem;
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

export default HomeSection;
