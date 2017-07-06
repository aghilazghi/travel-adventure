module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "C:\\Users\\AMINE\\Desktop\\projects\\travel-adventure\\app\\temp\\scripts",
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}