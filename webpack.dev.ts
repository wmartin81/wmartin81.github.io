import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = {
    devtool: "source-map",
    module:{
        rules:[
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }            
        ]
    }
}

export default merge(common, config);