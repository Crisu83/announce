path = require('path');

module.exports = {
    listenPort: 3000,
    webRoot: path.resolve(__dirname, '../client/web'),
    db: {
        name: 'announce'
    }
};