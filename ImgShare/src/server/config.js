const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');

const routes = require('../routes/index');

module.exports = app => {

    //Settings
    app.set('port', process.env.PORT || 8844);
    app.set('views', path.join(__dirname, 'views'))
    app.engine('.hsb', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(path.get('views'), 'layout'),
        extname: '.hbs',
        helpers: require('./helpers')
    }));
    app.set('view engine', '.hbs');

    //midleware
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    //routes
    routes(app)

    //errorHandlers

    return app;
}