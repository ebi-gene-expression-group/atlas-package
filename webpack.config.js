var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// If you get the message “loaderUtils.parseQuery() received a non-string value...” uncomment next line
// process.traceDeprecation = true;

module.exports = {
    entry: {
        myPackage: './html/render.js',
        dependencies: ['prop-types', 'react', 'react-dom', 'urijs']
    },

    output: {
        library: '[name]',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/html/'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {verbose: true, dry: false}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'dependencies',
            filename: 'vendorCommons.bundle.js',
            minChunks: Infinity     // Explicit definition-based split, see dependencies entry
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally, necessary along with devServer.hot: true (see below) for HMR to work as expected 🤔
        // new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/i,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: {
                                name: '[hash].[ext]',
                                hash: 'sha512',
                                digest: 'hex'
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                bypassOnDebug: true,
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: {
                                name: '[hash].[ext]',
                                hash: 'sha512',
                                digest: 'hex'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules\//,
                use: 'babel-loader'
            }
        ]
    },

    devServer: {
        // hot: true,      // CLI --hot is equivalent to this option, but it also enables the HMR plugin (see above)
        // hotOnly: true,  // Won’t inject modules if there’s a compilation error (without this a full page reload is
                           // done after a successful build and we lose state)
        port: 9000
    }
};
