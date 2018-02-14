exports.notFound = (req, res, next) => {
    res.status(404).render('404');
    next();
}

exports.serverError = (err, req, res, next) => {
    res.status(500).render('500', {err});
    next();
}