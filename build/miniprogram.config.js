/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        home: [
            '/(home|index)?',
            '/index.html',
            '/test/(home|index)',
        ],
        other: [
            '/test/list/:id',
            '/test/detail/:id',
        ],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        appWxss: 'display',
        weui: true,
    },
    app: {
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: 'kbone',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'kbone-template-vue-ui',
        appid: 'wx14c7c4cd189644a1',
    },
}
