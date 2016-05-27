
const config = {
    baseUrl: './app',
    map: {
        'plugin-babel'        : '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    },
    transpiler: 'plugin-babel'
};

System.defaultJSExtensions = true;
SystemJS.config (config);


System.import (`${config.baseUrl}/app.js`).then (function (app) {
    app.run ();
});
