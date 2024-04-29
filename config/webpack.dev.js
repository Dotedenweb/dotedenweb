const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");


const path = require('path');

/**@type {import('webpack').Configuration} */


const devConfig = {
    mode : "development",
    devtool: 'eval-source-map',
    devServer:{
        static: {
              directory: path.resolve(__dirname, "../dist"), // Path to your static content
        },
        hot: true,
        open : true,
        port : 3000,
        historyApiFallback: true, 
        liveReload: true,
    },
    target : "web",
    module:{
        rules:[
            {
                use: ["style-loader", "css-loader", "postcss-loader"],
                test: /\.(sass|less|css)$/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
    
}

module.exports = merge(common, devConfig);