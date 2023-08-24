Agenda :- explain about project
setup,
the source and distribution ,
packages ,
npm and npx,
different type of dependencies,
node modules,
packagejson and packagelockjson file
Webpack as a tool and its config,
Babel config,
adding .gitinore file
#1 initialise npm project
by using npm init
#2 create folders for source(src) and distribution(dist)
#3 install npm packages/dependencies remotely using cli
npm install  webpack webpack-cli --save-dev
#4 Explaination of dependecies and different places to keep dependencies (global/project/dev)
#5 tell students to notice the creation of node_module and showcase the internal code.
#6 create webpack.config.js file. at root level
#7 paste this in webpack.config.js
const path = require('path');
module.exports = {
"mode": "none",
"entry": "./src/index.js",
"output": {
"path": __dirname + '/dist',
"filename": "bundle.js"
},
devServer: {
contentBase: path.join(__dirname, 'dist')
}
}
#8 to be able to import css add loaders
#9  // npm install
npm install --save-dev css-loader style-loader
#10 add dev tools for better debugging creating source tree
devtool: 'cheap-module-eval-source-map',
#11 npm install --save-dev babel-loader @babel/core @babel/preset-env
#12 check final webpack.config file content
const path = require('path');

        module.exports = {
        "mode": "none",
        "entry": "./src/index.js",
        "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
        },
        devtool: 'cheap-module-eval-source-map',
        devServer: {
        contentBase: path.join(__dirname, 'dist')
        },
        "module": {
        "rules": [
            {
            "test": /\.css$/,
            "use": [
                "style-loader",
                "css-loader"
            ]
            },
            {
            "test": /\.js$/,
            "exclude": /node_modules/,
            "use": {
                "loader": "babel-loader",
                "options": {
                "presets": [
                    "@babel/preset-env",
                ]
                }
            }
            },
        ]
        }
        };