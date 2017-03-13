var entry = '../nixin-form/scripts/modules/_nixin-IDNumber.ts';
module.exports = {
    entry: entry,
    output: {
        filename: '_IDNumber.js',
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
