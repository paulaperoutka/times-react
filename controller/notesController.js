const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.Note
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			//422 is unprocessable entity
			.catch(err => res.status(422).json(err))
	},
	findById: function(req, res) {
		db.Note
			//passing though ID as parameter
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	create: function(req, res){
		db.Note
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	delete: function(req, res){
		db.Note
			.findById({_id: req.params.id})
			//promise chaining
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	}
};