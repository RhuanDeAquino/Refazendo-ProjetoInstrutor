import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 90%;
    height: 83.6vh;

    background-image: url(https://cutewallpaper.org/21/rick-and-morty-pc-background/1366x768-Rick-And-Morty-2017-1366x768-Resolution-HD-4k-.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -150px;

    @media(max-width: 768px) {
        background-image: url(https://i.pinimg.com/originals/1c/ec/d5/1cecd576486193cfceda608027fc44c5.jpg);
        background-position-y: 0;

        height: 100vh;
    }
`
const Camada = styled.div`
    width: 100%;
    height: 100%;

    background-color: #00b5cd50;

    z-index: 0;
`

const CaixaConteudo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: start;
`

const CaixaMidia = styled.div`
    padding: 3rem 0;
    width: 5%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
        display: none;
    }
`

const CaixaIcones = styled.figure`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.p`
    font-size: 1.8em;
    color: white;
`

const Barrinha = styled.span`
    width: 2px;
    height: 30%;

    background-color: white;
`

const Contato = styled.p`
    width: 30%;
    height: 40%;

    font-size: 1;

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(-90deg);
`

const CaixaAdote = styled.div`
    width: 90%;
    height: 100%;

    @media(max-width: 768px) {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
}
`

const CaixaSobre = styled.div`
    width: 100%;
    height: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding-top: 2rem;
`

const Titulo = styled.h1`
    font-size: 4rem;

    color: white;

    @media(max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Subtitulo = styled.h2`
    font-size: 1.2rem;

    color: white;

    width: 50%;

    @media(max-width: 768px) {
        width: 70%;
    }
`
const CaixaBotoes = styled.div`
    padding-top: 3rem;
    width: 50%;
    height: 40%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
        width: 75%;

        padding: 0;

        flex-direction: column;
    }
`
const BotaoDoacao = styled.button`
    width: 15rem;
    height: 3rem;

    background-color: #00b5cd;

    border-radius: 50px;
    border: 0;

    color: white;
    font-size: 1.2rem;

    @media {
        width: 100%;
    }
`

const BotaoAdotar = styled.button`
    width: 15rem;
    height: 3rem;

    background-color: #82ca39;

    border-radius: 50px;
    border: 0;

    color: white;
    font-size: 1.2rem;

    @media {
        width: 100%;
    }
`
class Home extends Component {
    render() {
        return(
            <Content>
                <Camada>
                    <CaixaConteudo>
                        <CaixaMidia>
                            <CaixaIcones>
                                <Logo>a</Logo>
                                <Logo>a</Logo>
                                <Logo>a</Logo>
                            </CaixaIcones>
                            <Barrinha></Barrinha>
                            <Contato>ricksanchezc137@gov.com</Contato>
                        </CaixaMidia>
                        <CaixaAdote>
                            <CaixaSobre>
                                <Titulo>Adote um Morty</Titulo>
                                <Subtitulo>Ele pode ser meio bundão as vezes mas é um bom companheiro para qualquer tipo de aventura maluca.</Subtitulo>
                                <CaixaBotoes>
                                    <BotaoDoacao>Devolver Morty</BotaoDoacao>
                                    <BotaoAdotar>Adote um Morty</BotaoAdotar>
                                </CaixaBotoes>
                            </CaixaSobre>
                        </CaixaAdote>
                    </CaixaConteudo>
                </Camada>
            </Content>
        )
    }
}





export default Home;