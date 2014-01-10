var mongoose = require('mongoose');
var Ticket = mongoose.model('Ticket');

exports.index = function(req, res){
	Ticket.find( function(err, tickets, count) {
		res.render('index', {
			title: 'Millwright',
			tickets: tickets
		});
	});
};

exports.create = function(req, res){
	new Ticket({
		title : req.body.title,
		content : req.body.content,
		urgency : req.body.urgency,
		updated : Date.now()
	}).save(function(err, ticket, count) {
		res.redirect('/');
	});
};

exports.destroy = function(req, res){
	Ticket.findById(req.params.id, function(err, todo) {
		todo.remove(function(err, todo){
			res.redirect('/');
		});
	});
};

exports.edit = function(req, res){
	Ticket.find(function(err, tickets) {
		res.render('edit', {
			title : 'Edit',
			tickets : tickets,
			current : req.params.id
		});
	});
};

exports.update = function(req, res){
	Ticket.findById(req.params.id, function(err, ticket){
		ticket.title = req.body.title;
		ticket.content = req.body.content;
		ticket.urgency = req.body.urgency;
		ticket.updated = Date.now();
		ticket.save(function (err, ticket, count) {
			res.redirect('/');
		});
	});
};














































