import React from 'react'
import { styled } from '@linaria/react'

const CardContainer = styled.div`
	background: #000;
	padding: 2.2rem 2.2rem 2.2rem 2.2rem;
	border-radius: 0.625rem;
	text-align: left;
	color: white;
	display: flex;
	width: 24.75rem;
	height: 25rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.75rem;
	margin-left: 0.75rem;
`

const CardTitle = styled.h2`
	color: rgb(160, 160, 160);
	font-family: Raleway;
	font-size: 3rem;
	font-weight: 700;
	line-height: 100%;
	letter-spacing: 0%;
	text-align: left;
	margin: 0;
`

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  min-width: 25rem;
  min-height: 12.5rem;
	align-self: center;
`

const CardInfo = styled.p`
	font-size: 0.875rem;
	color: #bbb;
	font-family: Raleway;
	font-weight: 500;
	font-size: 1.0625rem;
	margin: 0;
`

interface PokemonCardProps {
	pokemon: {
		id: number
		name: string
		sprite: string
		numberEpisodes: number
		height: number
		attack: number
	}
}

const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
		<CardContainer>
			<CardTitle>{capitalizeFirstLetter(pokemon.name)}</CardTitle>
			<CardImage src={pokemon.sprite} alt={pokemon.name} />
			<CardInfo>Снялся в {pokemon.numberEpisodes} сериях</CardInfo>
			<CardInfo>Id: {pokemon.id}</CardInfo>
			<CardInfo>height: {pokemon.height}</CardInfo>
			<CardInfo>attack: {pokemon.attack}</CardInfo>
		</CardContainer>
	)
}

export default PokemonCard
