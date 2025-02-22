import React from 'react'
import { styled } from '@linaria/react'

const Chip = styled.button`
	background: #1986ec;
	color: white;
	border: none;
	padding: 1.25rem;
	border-radius: 2.75rem;
	cursor: pointer;
	transition: background 0.2s;
	margin-right: 0.375rem;
	margin-bottom: 0.625rem;
	font-family: Raleway;
	font-size: 1rem;
	font-weight: 500;
	line-height: 100%;
	letter-spacing: 0%;
	text-align: left;
	&:hover {
		background: #0f70d1;
	}
`

interface PokemonChipProps {
	name: string
	onClick: () => void
}

const PokemonChip = ({ name, onClick }: PokemonChipProps) => {
	return <Chip onClick={onClick}>{name}</Chip>
}

export default PokemonChip
