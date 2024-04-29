const { default: merge } = require("webpack-merge");

const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

/**@type {import('webpack').Configuration} */


const prodConfig = {
    mode : "production",
    devtool: 'source-map',
    optimization: {
       splitChunks:{
        chunks: "all",
       },
       minimize : true,
       minimizer : [new TerserPlugin({
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
       })]
    },
    plugins: [new MiniCssExtractPlugin()],
    module:{
        rules:[
            {
                use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader'],
                test: /\.(sass|less|css)$/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
            
        ]
    }
}

module.exports = merge(common, prodConfig);