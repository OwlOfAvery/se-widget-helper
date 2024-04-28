import pluginVue from 'eslint-plugin-vue'
export default [
	...pluginVue.configs['flat/recommended'],
	{
		rules: {
			'vue/html-indent': ['error', 'tab'],
			'vue/script-indent': ['error', 'tab'],
			'vue/max-attributes-per-line': 'off'
		}
	}
]
