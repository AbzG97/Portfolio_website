import React from 'react'
import HomeSection from '../components/HomeSection'
import styled from 'styled-components'

function Home() {

    
    return (
        <StyledHomePage>
            <HomeSection/>
        </StyledHomePage>
    )
}

const StyledHomePage = styled.div`
    width: 60%;
    margin-left: 30%;
    margin-top: 3%;
    letter-spacing: 2px;
    color: white;
    font-weight: lighter;
    padding: 1rem;
    /* for tablets */
    @media (max-width: 768px) {
        margin: 0;
        margin-top: 6rem;
        margin-left: 10%;
    }
   
    `

export default Home
