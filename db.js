var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ticket = new Schema ({
	user_id : String,
	content : String,
	updated : Date
});

mongoose.model('Ticket', Ticket);
mongoose.connect('mongodb://localhost/millwright');