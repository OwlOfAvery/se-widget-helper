import fields from '../src/fields.json' with { type: 'json' }

/**
 * @type {import('postcss').PluginCreator}
 */
export default () => {
	const templateStringRegexPattern = new RegExp(
		/(["']\s*{{\s*)(?<field>[^\s]+?)(\s*}}["'])(\s(?=(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc)))?/g
	)

	const templateStringReplacer = '{{$<field>}}'

	const replacementArgs = [templateStringRegexPattern, templateStringReplacer]

	return {
		postcssPlugin: 'se-regex',
		OnceExit(root) {
			// In production build, we simply strip quotes from field templates
			root.walk((node) => {
				switch (node.constructor.name) {
					case 'Declaration':
						node.prop = node.prop.replace(...replacementArgs)
						node.value = node.value.replace(...replacementArgs)
						break
					case 'AtRule':
						node.params = node.params.replace(...replacementArgs)
						break
					case 'Rule':
						node.selector = node.selector.replace(...replacementArgs)
						break
				}
			})
			// In development build, we want to replace the field templates with their default values
			if (process.env.NODE_ENV === 'development') {
				const fieldKeys = Object.keys(fields)
				root.walk((node) => {
					for (const fieldKey of fieldKeys) {
						if (!fields[fieldKey].hasOwnProperty('value')) continue
						const fieldPattern = new RegExp(`{{?\\s?${fieldKey}\\s?}?}`, 'g')
						switch (node.constructor.name) {
							case 'Declaration':
								node.prop = node.prop.replace(fieldPattern, fields[fieldKey].value)
								node.value = node.value.replace(fieldPattern, fields[fieldKey].value)
								break
							case 'AtRule':
								node.params = node.params.replace(fieldPattern, fields[fieldKey].value)
								break
							case 'Rule':
								node.selector = node.selector.replace(fieldPattern, fields[fieldKey].value)
								break
						}
					}
				})
			}
		}
	}
}

const postcss = true
export { postcss }
