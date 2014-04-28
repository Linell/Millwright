var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ticket = new Schema ({
	user_id : String,
	title: String,
	description: String,
	content : String,
	urgency: String,
	department: String,
	assigned: String,
	status: String,
	updated : Date
});

mongoose.model('Ticket', Ticket);
mongoose.connect('mongodb://localhost/millwright');