const authenticator = require('../middleware/authenticator');

module.exports = app => {
    const { contact } = app.controllers;

    app.get('/contacts', authenticator, contact.index)
    app.post('/contacts', authenticator, contact.create);
    app.get('/contacts/:id/edit', authenticator, contact.edit);
    app.put('/contacts/:id', authenticator, contact.update);
    app.delete('/contacts/:id', authenticator, contact.delete);
    app.get('/contacts/:id', authenticator, contact.show);
}