const mongoose = require('mongoose');

const { database } = require('./keys')

mongoose.connect(database.URL, {
    useNewUrlParser:true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error('error'));