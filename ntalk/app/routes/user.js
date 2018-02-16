module.exports = app => {
    const {user} = app.controllers;

    app.get('/register', user.index);
    app.post('/register', user.create);
}