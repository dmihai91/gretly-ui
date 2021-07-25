import en from './lang/en';
import fs from 'fs';

export default {
	ssr: true,
	target: 'static',
	/** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: 'Gretly',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
			}
		]
	},
	/*
	 ** Global CSS
	 */
	css: ['~/assets/scss/style.scss'],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [
		{
			src: '~/plugins/global.js',
			ssr: false
		},
		'~/plugins/lastRouterPath.ts',
		'~/plugins/initApiService'
	],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv', 'nuxt-typed-vuex'],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		'@nuxtjs/pwa',
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'nuxt-i18n',
		'@nuxtjs/proxy'
	],
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {
		extend(config, { isClient }) {
			if (isClient) {
				config.optimization.splitChunks.maxSize = 499712; // 488 Kb
				config.optimization.runtimeChunk = 'single';
			}
		},
		babel: {
			compact: true
		}
	},
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
		apiUrl: process.env.API_URL || 'http://localhost:44381',
		fbClientId: process.env.FB_CLIENT_ID,
		googleClientId: process.env.GOOGLE_CLIENT_ID
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
		vueI18n: {
			messages: {
				en: {
					...en
				}
			}
		}
	},
	// extend routes
	router: {
		extendRoutes(routes, resolve) {
			routes.push({
				path: '*',
				component: resolve(__dirname, '~/pages/not-found.vue')
			});
		},
		prefetchLinks: true
	},
	styleResources: {
		scss: ['~/assets/scss/style.scss']
	},
	server: {
		https: {
			key: fs.readFileSync('cert/server.key'),
			cert: fs.readFileSync('cert/server.crt')
		}
	},
	axios: {
		proxy: true
	},
	proxy: {
		// Simple proxy
		'/api/': {
			target: process.env.API_URL,
			pathRewrite: {
				'^/api': '/'
			},
			secure: false
		}
	},
	pwa: {
		icon: false
	},
	loader: {
		color: '#028656'
	},
	loadingIndicator: {
		name: 'chasing-dots',
		color: '#028675',
		background: 'white'
	}
};
