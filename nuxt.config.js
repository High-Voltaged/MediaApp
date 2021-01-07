const pkg = require('./package');

module.exports = {
    mode: 'spa',
    srcDir: 'src/',
    extension: ['js', 'ts'],
    server: {
        host: '127.0.0.1',
        port: 1337,
    },
    head: {
        title: "Media App",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "NTEST" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ],
    },
    loading: { color: "#3B8070" },
    css: [
      './src/assets/css/main.scss',
        './src/assets/css/secondary.scss',
        './src/assets/fonts/poppins.css',
        './src/assets/fonts/roboto.css',
    ],
    buildModules: [
        '@nuxtjs/router',
        '@nuxtjs/tailwindcss',
    ],
    modules: [
        "@nuxtjs/axios",
        '~/modules/typescript',
    ],

    plugins: [
        '~/plugins/fontawesome.js',
        '~/plugins/vuesax.js',
        '~/plugins/route_config.ts',
    ],

    axios: {},

    build: {
        additionalExtensions: ['ts', 'tsx'],
        extend(config, ctx) { },
    },

    generate: {
        routes: [
            '/',
        ]
    },

}