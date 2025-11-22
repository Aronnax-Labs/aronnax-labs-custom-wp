const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        'navbar/view/index': path.resolve(process.cwd(), 'src/navbar/view', 'index.js'),
    },
};
