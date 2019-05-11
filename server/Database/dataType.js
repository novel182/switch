var mongoose = require('mongoose');
//var schema = mongoose.Schema;

var form = new mongoose.Schema({
    message:string
},
{collection: 'chatData'});

module.exports = mongoose.model('chatData',form);