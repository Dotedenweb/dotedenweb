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
                include: path.resolve(__dirname, '../src'),
                use: ["style-loader", "css-loader", "postcss-loader"],
                test : /\.css$/i
            },
        ]
    }
    
}

module.exports = merge(common, devConfig);