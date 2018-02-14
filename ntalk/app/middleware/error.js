exports.notFound = (req, res, next) => {
    res.status(404).render('404');
    next();
}

exports.serverError = (error, req, res, next) => {
    res.status(500).render('500', {error});
    next();
}