# react1-webpack-babel-MARK1
## (Template code for a react project with webpack and babel)

## initialize [package.json](package.json) :
initialize the file with required data
```
npm init
```

## install react:
```
npm install react react-dom --save
```

## install required devDependencies:
```
npm install babel-core babel-loader babel-preset-env babel-preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server --save-dev
```

## babel file config => [.babelrc](.babelrc):
```
{
    "presets":["env","react"]
}
```

## create a webpack config file with file contents  [webpack.config.js](webpack.config.js)
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};

```

## add the run and build configuration to [package.json](package.json) :

in "scripts" section add :
```
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
```

## after all the above changes type in console:
```
npm build
```

# `npm start` or `npm run start` :
## To start the server on localhost port 8080, in development mode.

# `npm build` or `npm run build` :
## To start the project in deployment mode, and create a "dist" folder with contents : 

### -> main.js 
### -> index.html

