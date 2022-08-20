const path = require('path');

module.exports = {
    entry: './public/js/script.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
};