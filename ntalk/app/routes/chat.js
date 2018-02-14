const authenticator = require('../middleware/authenticator');

module.exports = app => {
    const { chat } = app.controllers;

    app.get('/chat', authenticator, chat.index);
}