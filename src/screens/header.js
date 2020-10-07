import React, {Component} from 'react';
import styled from 'styled-components';

const Content = styled.div`
    background-color: #f6f6f6;

    width: 100%;
    height: 10vh;
    
    display: flex;
    align-items: center;
    justify-content: space-beteween;

    padding: 5rem 0;

    @media(max-width: 768px) {
        height: 15vh;
        align-items: flex-center;
        justify-content: space-between;

        padding: 0;
    }
`;

const BoxLogo = styled.div`
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentHamburguer = styled.div`
    width: 20%;

    display: none;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        display: flex;
    }
`
const LogoHamburguer = styled.img`
    width: 70%;
    

`
const Logo = styled.img`
    width: 60%;

    @media(max-width: 768px) {
        width: 70%;
    }
`
const CaixaMenu = styled.div`
    width: 70%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        display: none;
    }
`

const Menu = styled.ul`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-beteween;
`

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-beteween;

    width: 22%;

`

const TextoItem = styled.p`
    color: #00b5cd;
    font-size: 1.8rem;
    text-shadow: #82ca39 3px 0 1px;

    :hover {
        border-bottom: 2px solid #00b5cd;

        transition: 0.1s;
    }
`
const ImagemItem = styled.img`
    width: 10%;

    position: relative;
    top: -10px;
`



class Header extends Component {
    render() {
        return(
            <Content>
                <BoxLogo>
                    <Logo src="https://png.pngitem.com/pimgs/s/499-4990481_rick-and-morty-logo-png-rick-and-morty.png" />
                </BoxLogo>
                <ContentHamburguer>
                    <LogoHamburguer src="https://banner2.cleanpng.com/20180503/zbq/kisspng-hamburger-button-computer-icons-menu-ios-7-5aebaafc0cdf33.1472082215253941720527.jpg" />
                </ContentHamburguer>
                <CaixaMenu>
                    <Menu>
                        <MenuItem>
                            <TextoItem>Home</TextoItem>
                            <ImagemItem src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" />
                        </MenuItem>
                        <MenuItem>
                            <TextoItem>Sobre</TextoItem>
                        </MenuItem>
                        <MenuItem>
                            <TextoItem>Adote</TextoItem>
                        </MenuItem>
                        <MenuItem>
                            <TextoItem>Seja Voluntario</TextoItem>
                        </MenuItem>
                    </Menu>
                </CaixaMenu>
            </Content>
        )
    }
}





export default Header;