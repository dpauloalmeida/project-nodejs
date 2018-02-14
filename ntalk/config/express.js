const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const cookie = require('cookie');
const compression = require('compression');
const error = require('../app/middleware/error');

module.exports = () => {
    const app = express();
    const store = new expressSession.MemoryStore();

    app.use(compression());
    app.use(express.static('./app/public'));

    // view engine setup
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // expressSession use to encode and decodes the SessionID
    app.use(expressSession({ 
        store,
        resave: true, 
        saveUninitialized: true, 
        name: 'ntalk.id',
        secret: 'ntalk_secret'
    }));

    // responsibles create obeject JSON of form HTML
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // allows use a same path between the methods HTTP making override method
    app.use(methodOverride('_method'));
 
    consign({cwd: 'app', verbose: false})
    .include('db')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);  

    // allows routes to pages error
    app.use(error.notFound);
    app.use(error.serverError);

   return app;
}
