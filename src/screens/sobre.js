import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
	width: 90%;
	height: 80vh;

	display: flex;

	@media(max-width: 768px) {
		height: 100vh;
		flex-direction: column;
	}
`
const CaixaConteudo = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;

	@media(max-width: 768px) {
		width: 100%;
		height: 60%;

		align-items: center;
		justify-content: center;
	}
`

const CaixaTitulo = styled.span`
	width: 100%;
	height: 10vh;

	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const Titulo = styled.h1`
	color: #00b5cd;
	font-size: 3rem;
	text-shadow: #82ca39 3px 0 1px;
`

const CaixaTexto = styled.div`
	width: 100%;
	height: 50%;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
`
const Texto = styled.p`
	font-size: 1rem;

	padding-bottom: 1.2rem;

	text-align: start;

	@media(max-width: 768px) {
		font-size: 1.2rem;
}
`
const CaixaBotao = styled.div`
	width: 100%;
	height: 20%;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	@media(max-width: 768px) {
		align-items: center;
		justify-content: center;
}
`
const Botao = styled.button`
	width: 20rem;
	height: 3rem;

	font-size: 1.2rem;
	color: white;

	background-color: #82ca39;

	border: 0;
	border-radius: 50px;

	@media(max-width: 768px) {
		width: 75%;
}
`
const CaixaFigure = styled.div`
	width: 50%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media(max-width: 768px) {
		width: 100%;
		height: 40%;

		justify-content: center;
		align-items: center;
	}
`

const Imagem = styled.img`
	width: 70%;

	@media {
		width: 50%;
}
`
class Sobre extends Component {
	render() {
		return(
			<Content>
				<CaixaConteudo>
					<CaixaTitulo>
						<Titulo>SOBRE</Titulo>
					</CaixaTitulo>
					<CaixaTexto>
						<Texto>Muitos desses Morty's já conseguiram um lar, mas o número de abandonos ainda aumenta, com esse que pode ser o seu grande companheiro de aventuras. Vem promover mais finais felizes, ou so deixar de lado e mandar arrumar suas coisas pra nao ter que fazer ou pagar uma empregada... Ou simplesmente para enchez o saco quando não tiver nada pra fazer!</Texto>
						<Texto>ps: nao nos responsabilizamos pela burrice do seu morty, pois ele é um animal pouco compreendido e muito lento quando o assunto não se baseia em desenhos ou videogames, não conte com ele para tudo, pois ele ira se apaixonar pela primeira femea (não nessesario ser da mesma especie) e ira te deixar na mão a qualquer momento para ir atras dela e depois voltar chorando para voce</Texto>
					</CaixaTexto>
					<CaixaBotao>
						<Botao>Seja Voluntario</Botao>
					</CaixaBotao>
				</CaixaConteudo>
				<CaixaFigure>
					<Imagem src="https://www.pinclipart.com/picdir/big/169-1693254_rick-and-morty-gif-png-image-library-library.png" />
				</CaixaFigure>
			</Content>
		)
	}
}

export default Sobre;