const domain = 'dva.mobile.com/';
const defaultConfig = {
  "entry": "src/index.js",// 入口
  "theme": {
    "@primary-color": "#1DA57A"
  },
  "externals": {// 配置 react 和 react-dom 不打入代码
    "react": "window.React",
    "react-dom": "window.ReactDOM"
  },
  "define": {
    "process.env.TEST": 1,
    "USE_COMMA": 2,
  },
  "browserslist": [
    "iOS >= 8", "Android >= 4"
  ],
  "publicPath": `//${domain}/h5/`,//??
  outputPath: `./dist/h5/`,
  "hash": true,
  "html": {
    "template": "./src/index.ejs"
  },
  "disableCSSModules": true,
  "extraBabelPlugins": [
    ["@babel/transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true
    }],
    ["import", { "libraryName": "antd-mobile", "style": true }]
  ],
  "proxy": {
    '/api/': {
      "target": 'http://rtapi.uat1.rs.com/',
      "changeOrigin": true,
      "pathRewrite": { "^api/": "" }
    },
  },
  ignoreMomentLocale: true,
  "env": {
    "development": {
      "publicPath": `/h5/`,
      "extraBabelPlugins": [
        "dva-hmr",
      ],
      "devtool": 'source-map',
      "extraBabelPresets": [
        // 'minify'
      ],
      "define": {
        "env": "development",
        // "process.env.config": process_env_config
      },
    },
  },
};

module.exports = Object.assign({}, defaultConfig);
