module.exports = app => {
    const {User} = app.models;

    const UserController = {
        index(req, res) {
            if (req.session.user == null) {
                res.render('user/index');
            } else {
                res.redirect('/contacts');
            }
        }
    };
    return UserController;
}