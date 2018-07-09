<div style="text-align:center">

<h1>Bulma 0.7.1  Webpack 4 Boilerplate</h1>

<table style="border: none;margin:0 auto;">
  <tr style="border: none;">
    <td style="border: none;">
      <img src="https://bulma.io/images/bulma-logo.png" alt="bulma logo" width=80/>
    </td>
    <td style="border: none;">
      <img src="https://github.com/webpack/media/blob/master/logo/icon-square-big.png?raw=true" alt="webpack logo" width=100/>
    </td>
  </tr>
</table>

</div>

## Prerequisites

- [nodejs](https://nodejs.org/)

If you don't yet have nodejs installed and you are running mac os, I suggest using [nvm](https://github.com/creationix/nvm) (node version manger), which makes managing different node versions a breeze.

## Usage

Clone the repo:

```bash
git clone
```

Cd into the project folder

```bash
cd webpack-bulma
```

Install yarn modules

```bash
yarn install
```

Build production

```bash
yarn deploy
```

Build version is available in `dist` folder.

## Development

### Server

For development you can use:

```bash
yarn start
```

This brings up demo website on [http://localhost:8080](http://localhost:8080).

For demo purposes I've copied the [bulma blog template](https://dansup.github.io/bulma-templates/templates/blog.html).

## Folder structure

<pre>
webpack-bulma/
├── src/
│   ├── sass
│   │   └── main.scss
│   ├── templates/index.html
│   └── app.js  # main webpack entry file
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
</pre>
