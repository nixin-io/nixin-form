var entry = './specTS/IDNumberSpec.ts';
module.exports = {
    entry: entry,
    output: {
        filename: 'IDNumberSpec.js',
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
