var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ticket = new Schema ({
	user_id : String,
	title: String,
	content : String,
	urgency: String,
	updated : Date
});

mongoose.model('Ticket', Ticket);
mongoose.connect('mongodb://localhost/millwright');