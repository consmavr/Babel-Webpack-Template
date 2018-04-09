const path = require('path');

module.exports = {
    entry: {
        
        app: ['babel-polyfill',
            './src/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'html/build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /mode_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es3']
            }
        },{
            test: /\.css?$/,
            use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}