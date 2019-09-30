const mongoose = require('mongoose');
const URI = 'mongodb+srv://admin-Fit:1234@cluster0-4kscd.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));


module.exports = mongoose;