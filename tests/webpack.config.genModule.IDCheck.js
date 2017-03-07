var entry = '../nixin-form/scripts/modules/_nixin-IDCheck.ts';
module.exports = {
    entry: entry,
    output: {
        filename: '_IDCheck.js',
        path: __dirname + '/src/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};
