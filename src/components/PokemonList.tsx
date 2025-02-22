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
	max-width: 75rem;
	height: 100vh;
`

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 61.25rem;
	margin-bottom: 3.375rem;

	h1 {
		font-weight: 500;
		font-size: 0.75rem;
		padding: 0.4375rem;
		border: 1px solid #ffffff;
		user-select: none;
	}
`
const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.75rem;
	justify-content: space-between;
	h2 {
		font-weight: 500;
		font-size: 0.75rem;
		line-height: 0.75rem;
		user-select: none;
	}
`

const ContentContainer = styled.div`
	display: flex;
	gap: 1.875rem;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const ChipList = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 25rem;
	justify-content: flex-start;
`

const EmptyCard = styled.div`
	background: #000;
	padding: 1.25rem;
	text-align: center;
	width: 24.75rem;
	height: 25rem;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
`

const PlaceholderChip = styled.div`
	background: #e0e0e0;
	border-radius: 2.75rem;
	width: 6rem;
	height: 3rem;
	margin-right: 0.375rem;
	margin-bottom: 0.625rem;
`

const SvgIcon = () => (
	<svg
		width='25'
		height='31'
		viewBox='0 0 25 31'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14.9084 12.2187C14.7547 11.354 13.9564 10.7727 13.1124 10.9227C12.2742 11.0717 11.7209 11.9026 11.8729 12.7582L12.7146 17.4937L11.7028 17.6735L9.93113 7.70562C9.77561 6.83059 8.97586 6.24098 8.1318 6.39099C7.29357 6.53997 6.73845 7.36063 6.89566 8.24513L8.81631 19.0515C6.32285 17.1107 3.12935 15.0578 2.21404 16.4302C1.31805 17.7736 4.71484 20.433 9.90176 26.6424C12.2388 29.4401 14.8782 31.1926 18.6825 30.517C22.8736 29.7721 25.6444 25.6418 24.8712 21.2917L23.3792 12.8967C23.2239 12.023 22.4243 11.4344 21.5803 11.5844C20.7421 11.7334 20.1888 12.5646 20.3437 13.4362L20.8092 16.055L19.7973 16.2348L19.1424 12.5499C18.9887 11.685 18.1904 11.1035 17.3463 11.2536C16.5081 11.4025 15.9523 12.2191 16.1069 13.0895L16.5752 15.7241L15.5634 15.904L14.9084 12.2187Z'
			fill='white'
		/>
		<path
			d='M16.7504 8.44786L16.7046 9.51161L12.5931 9.26753L12.6389 8.20379L16.7484 8.44774L16.7504 8.44786Z'
			fill='#1986EC'
		/>
		<path
			d='M7.51714 0L8.26377 4.20083L7.25195 4.38067L6.50532 0.179834L7.51714 0Z'
			fill='#1986EC'
		/>
		<path
			d='M11.5709 5.64038L10.789 4.93738L13.4646 1.73474L14.2463 2.43775L11.5709 5.64038Z'
			fill='#1986EC'
		/>
		<path
			d='M4.93363 10.6289L4.52414 9.64605L0.748535 11.2919L1.15802 12.2748L4.93363 10.6289Z'
			fill='#1986EC'
		/>
		<path
			d='M4.64343 6.87161L5.13513 5.94227L1.51993 3.85764L1.02823 4.78698L4.64343 6.87161Z'
			fill='#1986EC'
		/>
	</svg>
)

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
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=10')
			.then(response => {
				setPokemons(response.data.results)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Error fetching Pokemons', error)
				setIsLoading(false)
			})
	}, [])

	const handlePokemonClick = (url: string) => {
		axios
			.get(url)
			.then(response => {
				const pokemonData = response.data
				setSelectedPokemon({
					id: pokemonData.id,
					name: pokemonData.name,
					sprite: pokemonData.sprites.front_shiny,
					numberEpisodes: pokemonData.base_experience,
					height: pokemonData.height,
					attack: pokemonData.stats[1].base_stat,
				})
			})
			.catch(error => console.error('Error fetching pokemon details', error))
	}

	return (
		<MainContainer>
			<TitleContainer>
				<h1>ПОКЕМОНЫ API</h1>
				<LogoContainer>
					<SvgIcon />
					<h2>
						Нажмите на
						<br /> нужное Покемона
					</h2>
				</LogoContainer>
			</TitleContainer>
			<ContentContainer>
				<ChipList>
					{isLoading
						? Array.from({ length: 10 }).map((_, index) => (
								<PlaceholderChip key={index} />
						  ))
						: pokemons.map(pokemon => (
								<PokemonChip
									key={pokemon.url}
									name={pokemon.name}
									onClick={() => handlePokemonClick(pokemon.url)}
								/>
						  ))}
				</ChipList>
				{selectedPokemon ? (
					<PokemonCard pokemon={selectedPokemon}></PokemonCard>
				) : (
					<EmptyCard>Выберите покемона</EmptyCard>
				)}
			</ContentContainer>
		</MainContainer>
	)
}

export default PokemonList
