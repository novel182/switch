var mongoose = require('mongoose');

var uri = "mongodb://switch:Gaame5@ds139425.mlab.com:39425/webpractice";

//connect to the uri and see if there is an error
mongoose.connect(uri).then(
    ()=>{console.log("connected to database")},
    (err)=>{console.log("error connecting to databse"+err)}
);

module.exports = mongoose.connection;