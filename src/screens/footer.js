import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    background-color: #f6f6f6;
    width: 90%;
    height: 40vh;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 5rem 3rem;

    @media(max-width: 768px) {
        flex-direction: column
    }
`
const CaixaLogo = styled.div`
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
        display: none;
    }
`

const Logo = styled.img`
    width: 70%;
`
const ContentMidia = styled.div`
    width: 23%;
    height: 80%;

    padding: 2rem 0;

    text-align: start;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 768px) {
        width: 100%;
        height: 100%;

        align-items: flex-start;
        justify-content: space-around;

        padding: 0;
    }
`
const CaixaMidia = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Midia = styled.h1`
    font-size: 3rem;
    color: #00b5cd;
`

const Contato = styled.p`
    font-size: 1.2rem;
    color: #00b5cd;
`
const Barrinha = styled.span`
    background-color: #00b5cd;
    
    width: 2px;
    height: 60%;

    padding: 2rem 0;

    @media(max-width: 768px) {
        display: none;
    }
`
const CaixaMenu = styled.ul`
    width: 20%;
    height: 90%;

    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    @media(max-width: 768px) {
        display: none;
    }
`

const MenuItem = styled.li `
    font-size: 1.5rem;
    color: #00b5cd;
`;


class Footer extends Component {
    render() {
        return(
            <Content>
                <CaixaLogo>
                    <Logo src="https://png.pngitem.com/pimgs/s/499-4990481_rick-and-morty-logo-png-rick-and-morty.png" />
                </CaixaLogo>
                <ContentMidia>
                    <CaixaMidia>
                        <Midia>A</Midia>
                        <Midia>A</Midia>
                        <Midia>A</Midia>
                    </CaixaMidia>
                    <Contato>ricksanchezc137@gov.com</Contato>
                    <Contato>Via Lactia - Planeta Terra, Dimensão C-137</Contato>
                </ContentMidia>
                <Barrinha></Barrinha>
                <CaixaMenu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Adote</MenuItem>
                    <MenuItem>Seja Voluntario</MenuItem>
                </CaixaMenu>
            </Content>
        )
    };
}

export default Footer;