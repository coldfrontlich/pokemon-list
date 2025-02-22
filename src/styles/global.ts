import { css } from '@linaria/core'
import 'normalize.css'

export const globalStyles = css`
	:global() {
		body {
			font-family: 'Raleway', Arial, sans-serif;
			font-size: 18px;
			background-color: #131313;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
		}
	}
`
