//create set of methods for db operations instead of calling db directly within routes
//abstract that out for separation of concerns

//here combined in small app, but can also abstract out to service folder each "business logic"

//import models as db, give folder name to allow search for index and find all models
const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.Article
			//not necessary for find, but in case of future customization for filter; query is object propert sent from client side
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			//422 is unprocessable entity
			.catch(err => res.status(422).json(err))
	},
	findById: function(req, res) {
		db.Article
			//since passing through ID as parameter
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	create: function(req, res){
		db.Article
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	}, 
	update: function(req, res){
		db.Article
			//looking for object with ID field in mongodb format, then pass request.body to update
			.findOneAndUpdate({_id: req.params.id}, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	}, 
	delete: function(req, res){
		db.Article
			.findById({_id: req.params.id})
			//promise chaining
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	}
};
