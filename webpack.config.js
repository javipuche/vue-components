const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isProduction = process.argv.indexOf('--production') >= 0

const webpackConfig = () => {
    let options = {
        stats: 'minimal',
        entry: {
            styles: './src/scss/styles.scss',
            docs: './docs/main.js'
        },
        output: {
            path: resolve('./dist'),
            filename: `js/[name].js`,
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.json', '.vue', '.scss'],
            alias: {
                '@': resolve('./docs'),
                '@lib': resolve('./src'),
                node_modules: resolve('./node_modules')
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    include: [resolve('./docs')]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'vue-style-loader',
                        'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: !isProduction,
                                reloadAll: true
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProduction
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: !isProduction,
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !isProduction,
                                prependData: `
                                    @import "settings/settings";
                                    @import "tools/tools";
                                    @import "foundations/foundations";
                                `,
                                sassOptions: {
                                    outputStyle: isProduction ? 'compressed' : 'expanded',
                                    includePaths: [
                                        resolve('./src/scss')
                                    ]
                                }
                            }
                        }

                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    exclude: /(a-z A-Z 0-9)*\/(font?s)\//,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images',
                                publicPath: '/images'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|ttf|svg|woff|woff2)$/i,
                    exclude: /(a-z A-Z 0-9)*\/(img|image?s)\//,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts',
                                publicPath: '/fonts'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `css/[name].css`
            }),
            new HtmlWebpackPlugin({
                template: './docs/index.html',
                filename: 'index.html'
            }),
            new VueLoaderPlugin()
        ],
        performance: {
            hints: false
        }
    }

    if (!isProduction) {
        options = Object.assign(options, {
            mode: 'development',
            devtool: 'source-map',
            devServer: {
                contentBase: './dist',
                open: true,
                compress: false,
                hot: true,
                port: 8080,
                historyApiFallback: true
            }
        })
    }

    if (isProduction) {
        options = Object.assign(options, {
            mode: 'production',
            optimization: {
                minimizer: [
                    new TerserPlugin(),
                    new OptimizeCssAssetsPlugin()
                ]
            }
        })
    }

    return options
}

module.exports = webpackConfig
