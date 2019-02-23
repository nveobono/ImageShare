const express = require('express');

const config = require('./server/config');

//DB is initializ
require('./database');

//Server initialize
const app =  config(express());



app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});