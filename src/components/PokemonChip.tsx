import React from 'react'
import {styled} from '@linaria/react'

const Chip = styled.button`
	background-color: #3f51b5;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	text-align: center;
	cursor: pointer;
	margin: 4px;
	&:hover {
		background-color: #303f9f;
	}
`

interface PokemonChipProps {
  name: string,
  onClick: () => void
}



const PokemonChip = ({name, onClick}: PokemonChipProps) => {
  return (
    <Chip onClick={onClick}>{name}</Chip>
  )
}

export default PokemonChip
