const { Types: { ObjectId } } = require('mongoose');

module.exports = app => {
    const {User} = app.models;

    const ContactController = {
        index(req, res) {
            const { _id } = req.session.user;
            
            User.findById(_id)
                .then(user => {
                    const { contacts } = user;
                    res.render('contacts/index', {contacts: contacts});
                }).catch(err => {
                    console.log(err);
                    res.redirect('/');
                });
        },
        create(req, res) {
            const { contact } = req.body;
            const { _id } = req.session.user;
            const set = {$push: {contacts: contact}};

            User.findByIdAndUpdate(_id, set)
                .then(() => res.redirect('/contacts'))
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                });
        },
        show(req, res) {
            const { _id } = req.session.user;
            const contactId = req.params.id;
            
            User.findById(_id)
                .then(user => {
                    const { contacts } = user;
                    const contact = contacts.find(ct => ct._id.toString() === contactId);
                    res.render('contacts/show', {contact: contact});
                }).catch(err => {
                    console.log(err);
                    res.redirect('/');
                });
        },
        edit(req, res) {
            const { _id } = req.session.user;
            const contactId = req.params.id;
            
            User.findById(_id)
                .then(user => {
                    const { contacts } = user;
                    const contact = contacts.find(ct => ct._id.toString() === contactId);
                    res.render('contacts/edit', {contact: contact});
                }).catch(err => {
                    console.log(err);
                    res.redirect('/');
                });
        },
        update(req, res) {
            const { contact } = req.body;
            const { _id } = req.session.user;
            const contactId = req.params.id;
            const where = {'contacts._id': contactId};
            const set = {
                $set: {contacts: [contact]}
            };

            User.update(where, set)
                .then(() => res.redirect('/contacts'))
                .catch(() => {
                    console.log(err);
                    res.redirect('/');
                });
        },
        delete(req, res) {
            const { _id } = req.session.user;
            const contactId = req.params.id;
            const where = { _id };
            const set = {$pull: {contacts: {_id: ObjectId(contactId)}}};

            User.update(where, set)
                .then(() => res.redirect('/contacts'))
                .catch(err => {
                    console.log(err);
                    res.redirect('/');
                });
        }
    };
    return ContactController;
};