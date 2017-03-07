var entry = './specTS/IDCheckSpec.ts';
module.exports = {
    entry: entry,
    output: {
        filename: 'IDCheckSpec.js',
        path:'./spec/'
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
