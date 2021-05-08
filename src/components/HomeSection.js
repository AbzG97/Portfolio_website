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
                    <p>Hi thank you for checking out my portfolio, my name's Abdulla and here are some things about me, i am currently attending Sherinda college in Ontario, Canada
                        studying Computer systems technologies, and working in the Canadian Army reserves. I like spending my time playing videogames, cooking and learning about
                        new web technologies like Node, MongoDB, REST APIs, Javascript and ReactJS. Feel free to check out my projects and resume, and feel free to get in touch.
                    </p>
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
