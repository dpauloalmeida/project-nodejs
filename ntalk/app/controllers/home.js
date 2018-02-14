module.exports = app => {
    const {User} = app.models;

    const HomeController = {
        index(req, res) {
            res.render('home/index');
        },
        login(req, res) {
            const { user } = req.body;
            const where = {'email': user.email, 'password': user.password};

            User.findOne(where)
                .then(user => {
                    if (user == null) {
                        res.redirect('/');
                        return;
                    }
                    req.session.user = user;
                    res.redirect('/contacts');
                }).catch(() => res.redirect('/'));

        },
        logout(req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
    return HomeController;
};