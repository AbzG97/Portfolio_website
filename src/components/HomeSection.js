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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laudantium nostrum, 
                        fuga iure maiores architecto doloremque vel, exercitationem tempora praesentium labore ad molestiae eum, autem nisi voluptatibus quis laboriosam?</p>
                </div>
                <div className="buttons">
                    <button>My skills</button>
                    <button>Projects</button>
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
        .buttons {
            animation: slideFromBottom 2s ease-out;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            button {
                letter-spacing: 2px;
                width: 15%;
                height: 10%;
                padding: .75rem;
                font-size: 1rem;
                cursor: pointer;
                background-color: transparent;
                outline: none;
                border: 3px solid lightgreen;
                color: white;
                border-radius: 50px;
                transition: all 0.25s ease-in-out;
                &:hover {
                    color: black;
                    background-color: white;
                    border: none;
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

export default HomeSection;
