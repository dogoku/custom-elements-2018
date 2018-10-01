# Custom Elements 2018

A bare minimum repo, with Webpack 4, Babel 7 and Custom Elements

## Features

- Support both v0 and v1 specs of custom elements on all modern browsers + IE11
- Using the battle-tested [WebReflections/document-register-element](https://github.com/WebReflection/document-register-element) polyfill
- Babel 7, which supports transpiled code for browser with native Custom Elements support
- Webpack 4 with bare minimum configuration + webpack-html-plugin

## Usage

```bash
> npm install && npm run start
```

## Things to note

- You will need to add a few more things for a large, production ready project
  - Better styling tooling (CSS Preprocessor, PostCSS or CSS in JS)
  - Testing framework
  - Linting tooling for js, css, etc
  - Configuration management (env variables, dev, prod, test, etc)
  - Baked in ServiceWorker and PWA support
  - Modern (chrome, ff, safari, edge) + legacy (ie11) builds, using script type=module + safari fix
  - Conventional commits + changelog generation
- Consider using a wrapper around Custom Elements like [WebReflections/hyperhtml-element](https://github.com/WebReflection/hyperhtml-element)
  - CustomElements are pretty low level and require a lot of DOM knowledge
  - hyperhtml-element provides a jsx-like developer experience, using only pure ES2015+ template literals
  - Written by the same guy who wrote the polyfill, so you can be sure they work well together
  - Support for Server Side Rendering using viper-html if that's a thing you care about
