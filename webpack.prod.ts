import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import common from './webpack.common';

var config: webpack.Configuration = {
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          }),
        new UglifyJSPlugin()
    ]
}

export default merge(common, config);