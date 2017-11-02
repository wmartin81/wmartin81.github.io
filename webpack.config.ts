import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    entry:'./src/app.ts',
    resolve:{ extensions: ['.ts','.tsx', '.js', '.jsx', '.json']},
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }            
        ]
    }
}

export default config;