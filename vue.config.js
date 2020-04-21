const path = require('path');

module.exports = {
	// publicPath: '/',
	productionSourceMap: false,
	filenameHashing: true,
	lintOnSave: process.env.NODE_ENV !== 'production',
	//webpack配置
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/guide/webpack.md
	chainWebpack: (config) => {
		config.plugins.delete('prefetch');
		config.module.rule('pug').test(/\.pug/).use('pug-html-loader').loader('pug-html-loader').end();
		// 默认设置的别名
		// config.resolve.alias.set('@assets', 'src/assets');
	},
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			//为生成环境修改配置
			config.mode = 'production';
		} else {
			//为开发环境修改配置
			config.mode = 'development';
		}
		// 开启分离js
		config.optimization = {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 20000,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
							// npm package names are URL-safe, but some servers don't like @ symbols
							return `npm.${packageName.replace('@', '')}`;
						}
					}
				}
			}
		};
		Object.assign(config, {
			//开发和生产环境共同配置
			resolve: {
				extensions: [ '.js', '.vue', '.json', '.ts', '.tsx' ],
				//别名
				alias: {
					//__dirname获取当前项目的绝对路径
					'@': path.resolve(__dirname, './src'),
					vue$: 'vue/dist/vue.js'
				}
			}
		});
	},
	//css相关配置
	css: {
		//是否使用css分离插件ExtractTextPlugin
		// extract: true,
		//是否开启css source maps
		// sourceMap: false,
		//css预设器配置项
		// loaderOptions: {
		// 	postcss: {
		// 		plugins: {
		// 			'postcss-preset-env': {}
		// 		}
		// 	}
		// }
		//是否启用css module for all css/pre-processor files
		// requireModuleExtension: false
	},
	devServer: {
		proxy: {
			'/api/*': {
				target: 'https://cnode.org',
				host: 'cnode.org'
			}
		}
	}
};
