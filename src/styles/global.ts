import { css } from '@linaria/core'
import 'normalize.css'

export const globalStyles = css`
	:global() {
		body {
			font-family: 'Raleway',Arial, sans-serif;
			background-color: #f4f4f4;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			margin: 0;
		}
	}
`
