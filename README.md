# SE Widget Helper
Built with Vite, SE Widget Helper is a custom setup made to streamline the StreamElements widget developer experience, enabling a local development alternative to StreamElement's built-in code editor.

_NOTE: SE Widget Helper is an independent project and has no affiliation with StreamElements._


## Why use SE Widget Helper?
### Local Development
&nbsp;&nbsp;&nbsp;&nbsp;You don't need to leave the comfort of your local code editor! You maintain the ability to leverage your editor's linting, 3rd party packages such as Prettier (built-in) and ESLint, as well as any other plugins and features that reduce your development overhead. 
### JS Modules
&nbsp;&nbsp;&nbsp;&nbsp;With the power of Vite we're no longer restricted to writing all of our code in a single file. Utilizing ECMAScript's `import` and `export` module syntax, we can easily organize our code by moving messy helpers and utilities to separate files, then simply importing the functions into our `main.js` file.
### SASS
&nbsp;&nbsp;&nbsp;&nbsp;If you're a fan of SASS, it's your lucky day! Vite allows us to transform our styles using PostCSS. As a result, CSS preprocessors are a go! With the ability to utilize CSS nesting, mixins, functions, imports, etc, writing complex CSS will be a breeze. If you're not a fan of SASS, or simply aren't familiar, there's no need to fear. We use the SCSS flavor of SASS in SE Widget Helper, which means the file is 100% compatible with normal CSS, simply compose your styles as your normally would!
> [!NOTE]
> Currently, SE Widget Helper is set up to exclusively look for a `main.scss` file. In the future I may endeavor to make the system more preprocessor agnostic if the idea garners community interest!
### Automatic Reloading
&nbsp;&nbsp;&nbsp;&nbsp;Ever wish you could just save your file, and see the results? Yeah, me too! SE Widget Helper leverages Vite's development server environment with HMR. With the server started, our simulation environment (meant to emulate the iframe environment in the StreamElements widget editor) will automatically reflect our code changes, as soon as we save our files! 
### (Planned/WIP) Flexible Test Events & Initialization data
&nbsp;&nbsp;&nbsp;&nbsp;One of the biggest selling points of StreamElements built-in widget editor is the ability to fire off all sorts of mock events. No test environment would be complete without this functionality, so SE Widget Helper supercharges this process by allowing us to fire off various test events and giving us access to the underlying event JSON, for more fine-tuned control of your test cases.
