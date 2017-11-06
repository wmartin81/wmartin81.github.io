import * as webpack from 'webpack';
import * as path from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

const config: webpack.Configuration = {
    entry:'./src/app.tsx',
    resolve:{ extensions: ['.ts','.tsx', '.js', '.jsx', '.json']},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader?minimize"
                })
            },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=8192' }         
        ]
    },
    plugins:[
        new ExtractTextPlugin('bundle.css')
    ],
    externals:{
        'react': "React",
        'react-dom': 'ReactDOM'
    }
}

export default config;