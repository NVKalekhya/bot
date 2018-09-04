var mongoose = require("mongoose");

var dotEnv = require("dotenv");
dotEnv.load();

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://vamsi:vamsi@ds123770.mlab.com:23770/vamsi");

var replySchema=mongoose.Schema({
    message: String,
    
})

exports.Reply=mongoose.model('Reply',replySchema,'replies')
var messageSchema=mongose.schema({
    message:[]
})
exports.Message=mogose.model('Message',messageSchema,'messages')