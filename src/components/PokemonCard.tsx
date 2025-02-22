import React from 'react'
import { styled } from '@linaria/react'

const CardContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	z-index: 1000;
	max-width: 300px;
	text-align: center;
`

const StatItem = styled.div`
	margin: 8px 0;
	font-size: 14px;
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

const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
		<CardContainer>
			<h2>{pokemon.name}</h2>
			<img src={pokemon.sprite} alt={pokemon.name} />
			<StatItem>ID: {pokemon.id}</StatItem>
			<StatItem>Height: {pokemon.height}</StatItem>
			<StatItem>Episodes: {pokemon.numberEpisodes}</StatItem>
			<StatItem>Attack: {pokemon.attack}</StatItem>
		</CardContainer>
	)
}

export default PokemonCard
