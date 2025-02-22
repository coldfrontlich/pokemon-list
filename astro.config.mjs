// @ts-check
import { defineConfig } from 'astro/config'
import wyw from '@wyw-in-js/vite'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [wyw()],
	},
})
