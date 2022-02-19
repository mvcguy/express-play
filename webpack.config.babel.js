// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// import { MiniCssExtractPlugin} from 'mini-css-extract-plugin';
// const path = require('path');
import { resolve as _resolve } from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const devMode = process.env.NODE_ENV !== "production";
const config = {
    entry: './app-client/client-app.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            allowTsInNodeModules: true
                        }
                    }
                ]

                // exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader"
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: _resolve(__dirname, 'public'),
        publicPath:'/',
        library: {
            name: "bs_dt_demo",
            type: "umd"
        }
    },
    // plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};

export default config;