module.exports = app => {
    const {User} = app.models;

    const UserController = {
        index(req, res) {
            if (req.session.user == null) {
                res.render('user/index');
            } else {
                res.redirect('/contacts');
            }
        },
        create(req, res) {
            const { user } = req.body;
            const newUser = new User({
                email: user.email, password: user.password, contacts: []
            });

            newUser.save()
                .then(() => res.redirect('/'))
                .catch(err => {
                    console.log(err);
                    res.redirect('/register');
                });
        }
    };
    return UserController;
}