<div id="top"></div>

<div align="center">
  <h1>Shared react components library</h1>
</div>

[[_TOC_]]

## 📍 About The Project

`ui-components` contains shared re-useable react components. It also presents these using Storybook.

### Dependencies

- [![Storybook][storybook-badge]][storybook-url]
- [![styled-components][styled-badge]](https://styled-components.com/)
- [reach-ui](https://reach.tech/)

<div align="right">
  <p>(<a href="#top">back to top</a>)</p>
</div>

## 🚀 Getting Started

To get a local copy up and running, follow these simple example steps.

### Installation

1. Clone the repo

```sh
  git clone
```

2. Install node dependencies

```sh
  npm i
```

3. Start the local dev server with the following command

```sh
  npm run storybook:dev
```

4. Open the URL - http://localhost:6060

### Build and Deploy

#### 1. Development

```bash
# Install dependencies
npm install

# Run storybook locally (watches for changes in stories and all the other code)
npm run storybook:dev

# Run command to create build
npm run build

# Increment version (make this on master branch after you have merged your MR and pulled on master)
npm version patch # can be other values, see: npm version -h
# If you want to test your changes in discovery or content, it's possible to create
# pre-release or prepatch version instead

# Publish to npm (also builds the code)
npm publish

```

[storybook-badge]: https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white
[styled-badge]: https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white
[storybook-url]: https://storybook.js.org/
