import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 90%;
    height: 70vh;

    background-color: #00b5cd;

    display: flex;
    flex-direction: column;

    @media {
        height: 100vh ;
    }
`
const CaixaConteudo = styled.div`
    width: 100%;
    height: 35%;

    display: flex;
    align-items: center;
    justify-content: center;
`
const CaixaInformacao = styled.div`
    width: 50%;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    @media(max-width: 768px) {
        width: 90%;
    }
`
const Titulo = styled.h1`
    color: white;
    font-size: 3rem;
`
const Texto = styled.p`
    width: 55%;
    font-size: 1rem;
    color: white;

    text-align: start;
`
const CaixaImagens = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    @media(max-width: 768px) {
        display: none;
    }
`

const Poopy = styled.img`
    width: 20%;
`
const Rick = styled.img`
    width: 30%;
`
const CaixaSlide = styled.div`
    width: 97%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 768px) {
        height: 60%;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        padding-left: 1.2rem;

    }
`
const CaixaImg = styled.figure`
    width: 15%;
    height: 50%;

    border-radius: 50px;
    border: solid 5px white;

    position: relative;

    @media(max-width: 768px) {
        position: initial;

        border: 0;

        width: 20%;
        height: 40%;
    }
`
const Morty = styled.img`
    width: 100%;

    border-radius: 50px;

    position: absolute;
    top: -40px;
    left: -30px;

    @media(max-width: 768px) {
        position: inherit;
        top: 0;
        left: 0;
    }
`
const Direita = styled.h3`
    color: #00b5cd;
    font-size: 1.8rem;
    text-shadow: #82ca39 3px 0 1px;

    transform: rotate(180deg);

    @media(max-width: 768px) {
        display: none;
    }
`
const Esquerda = styled.h3`

    color: #00b5cd;
    font-size: 1.8rem;
    text-shadow: #82ca39 3px 0 1px;

    @media(max-width: 768px) {
        display: none;
    }
`


class Adote extends Component {
    render() {
        return(
            <Content>
                <CaixaConteudo>
                    <CaixaInformacao>
                        <Titulo>Adote</Titulo>
                        <Texto>Adote agora um desses Morty's e receba inteiramente gratis um boneco do Sr.Bunda Cagada que vem equipado com sistema de hack para tirar todo dinheiro da sua conta e jogar na minha, mas é por coincidencia.</Texto>
                    </CaixaInformacao>
                    <CaixaImagens>
                        <Poopy src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/ddgdrdz-29bab153-6b21-4744-bd02-e22b35a1de68.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWFhNzkzNTctOTQ3Ni00YzFkLWI5YTgtNmU4ODFmMjQ0OWQzXC9kZGdkcmR6LTI5YmFiMTUzLTZiMjEtNDc0NC1iZDAyLWUyMmIzNWExZGU2OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ct5cHjYmFgX3DAjhDFRzQ8hqqXFVAyqcFzSxTkJJCD8" />
                        <Rick src="https://lh3.googleusercontent.com/proxy/gxIkhNBE4R-rBDUfsummj-8FG6cwrAjZwp7aNLeDYAFZORxIBHZKVBpkovFK-uErdF2Z2QhU8x8OqdyUho6bcEGkWXR6TAWJ-lu44DoQiZtb85az5A" />
                    </CaixaImagens>
                </CaixaConteudo>
                <CaixaSlide>
                    <Direita>▶</Direita>
                    <CaixaImg>
                        <Morty src="https://pbs.twimg.com/profile_images/618398438481358848/2NidMZC8.jpg" />
                    </CaixaImg>
                    <CaixaImg>
                        <Morty src="https://vignette.wikia.nocookie.net/rickandmorty/images/f/f7/S1e1_smiling_morty.png/revision/latest/top-crop/width/220/height/220?cb=20160904231918" />
                    </CaixaImg>
                    <CaixaImg>
                        <Morty src="https://pbs.twimg.com/profile_images/671794841521676298/Aj121GAr_400x400.jpg" />
                    </CaixaImg>
                    <CaixaImg>
                        <Morty src="https://vignette.wikia.nocookie.net/rickandmorty/images/7/75/Slick_Morty.png/revision/latest/top-crop/width/360/height/360?cb=20170912224114" />
                    </CaixaImg>
                    <Esquerda>▶</Esquerda>
                </CaixaSlide>
            </Content>
        )
    }
}

export default Adote;