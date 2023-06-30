import React from 'react'
import styled from 'styled-components'
import HeaderLogo from './HeaderLogo'

const Nav = styled.nav`
    margin: 0 30px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TitleLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
const LogoContainer = styled.div`
    margin: 0 15px 0 15px;
    svg{
        fill: var(--light-blue);
    }
`

const TitleContainer = styled.div`
    font-size: 2rem;
    font-family: "Ubuntu Mono", monospace;
    color: #005377;
    margin-bottom: 0.4rem;
`

const PlayContainer = styled.button`
    background-color: #005377;
    border: 2px solid #005377;
    border-radius: 30px;
    box-shadow: #052F5F 5px 7px 0 0;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: "Ubuntu Mono", monospace;
    letter-spacing: .8px ;
    font-weight: 600;
    font-size: 18px;
    padding: 0 18px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    text-transform: uppercase;
    &:hover{
        filter: brightness(1.1);
    }
    &:active {
        box-shadow: #052F5F 3px 3px 0 0;
        transform: translate(2px, 2px);
    }
`


export default function Navbar() {
    return (
        <Nav>
            <TitleLogoContainer>
                <LogoContainer>
                    <HeaderLogo width="70" height="70" fill="#052F5F"/>
                </LogoContainer>
                <TitleContainer>
                    mejping
                </TitleContainer>              
            </TitleLogoContainer>
            <PlayContainer>
                play
            </PlayContainer>
        </Nav>
    )
}
