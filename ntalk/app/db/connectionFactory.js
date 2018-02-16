const mongoose = require('mongoose');

const getConnection = () => {
    
    if (process.env.NODE_ENV == 'development') {
        mongoose.connect('mongodb://localhost/ntalk');
        return mongoose.connection;
    }
    
    if (process.env.NODE_ENV == 'test') {
        mongoose.connect('mongodb://localhost/ntalk_test');
        return mongoose.connection;
    }
}

module.exports = () => getConnection;