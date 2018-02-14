const Schema = require('mongoose').Schema;

module.exports = app => {
    const db = app.db.connectionFactory();

    const contact = new Schema({
        name: String,
        email: String
    });

    const user = new Schema({
        email: {
            type: String,
            required: true,
            index: {unique: true}
        },
        password: {
            type: String,
            required: true,
        },
        contacts: [contact]
    });

    return db.model('User', user);
}