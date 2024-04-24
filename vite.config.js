import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	if (command === 'serve') {
		return {
			plugins: [vue()],
			root: './app'
		}
	}
	if (command === 'build') {
		return {
			root: './src',
			plugins: [
				viteStaticCopy({
					targets: [
						{
							src: './fields.json',
							dest: './'
						}
					]
				})
			],
			build: {
				outDir: resolve(__dirname, './dist'),
				emptyOutDir: true,
				minify: false,
				cssMinify: false,
				rollupOptions: {
					input: [
						resolve(__dirname, './src', 'main.js'),
						resolve(__dirname, './src', 'main.html'),
						resolve(__dirname, './src', 'main.scss')
					],
					output: {
						entryFileNames: `[name].js`,
						chunkFileNames: `[name].js`,
						assetFileNames: `[name].[ext]`
					}
				}
			}
		}
	}
})
