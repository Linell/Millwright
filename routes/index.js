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
		content : req.body.content,
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
		ticket.content = req.body.content;
		ticket.updated = Date.now();
		ticket.save(function (err, ticket, count) {
			res.redirect('/');
		});
	});
};














































