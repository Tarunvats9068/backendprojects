const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Student_db');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error in connection'));
db.once('open',function()
{console.log('databases is connected successfully')});
