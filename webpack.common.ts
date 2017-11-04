import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    entry:'./src/app.tsx',
    resolve:{ extensions: ['.ts','.tsx', '.js', '.jsx', '.json']},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }         
        ]
    }
}

export default config;