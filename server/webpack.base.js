module.exports = {

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "@babel/env",
                            {
                                targets: "last 2 Chrome versions", //"> 0.25%, not dead"
                            },
                        ],
                        "@babel/preset-react",
                    ]
                }
            }
        ]
    }

};