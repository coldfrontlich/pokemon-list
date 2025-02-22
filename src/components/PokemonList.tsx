import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonChip from './PokemonChip'
import { globalStyles } from '../styles/global'
import PokemonCard from './PokemonCard'
import { styled } from '@linaria/react'

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
`

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	text-align: center;
`

interface Pokemon {
	name: string
	url: string
}

interface PokemonDetails {
	id: number
	name: string
	sprite: string
	numberEpisodes: number
	height: number
	attack: number
}

const PokemonList = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([])
	const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
		null
	)

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=10')
			.then(response => setPokemons(response.data.results))
			.catch(error => console.error('Error fetching Pokemons', error))
	}, [])

	const handlePokemonClick = (url: string) => {
		axios
			.get(url)
			.then(response => {
				const pokemonData = response.data
				setSelectedPokemon({
					id: pokemonData.id,
					name: pokemonData.name,
					sprite: pokemonData.sprites.front_default,
					numberEpisodes: pokemonData.base_experience,
					height: pokemonData.height,
					attack: pokemonData.stats[1].base_stat,
				})
			})
			.catch(error => console.error('Error fetching pokemon details', error))
		console.log(selectedPokemon)
	}

	return (
		<MainContainer>
			<TitleContainer>
        <h1>Pokemons</h1>
				<h2>afaf</h2>
      </TitleContainer>
			<div>
				{pokemons.map(pokemon => (
					<PokemonChip
						key={pokemon.url}
						name={pokemon.name}
						onClick={() => handlePokemonClick(pokemon.url)}
					/>
				))}
				{selectedPokemon && (
					<PokemonCard pokemon={selectedPokemon}></PokemonCard>
				)}
			</div>
		</MainContainer>
	)
}

export default PokemonList

