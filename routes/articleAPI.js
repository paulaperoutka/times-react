//express router
const articleRouter = require("express");
//require controllers
const articlesController = require("../controllers/articlesController");

//Slash defines /api/articles as default
articleRouter.route("/")
	.get(articlesController.findAll) //get all articles
	.post(articlesController.create) //save an article

articleRouter.route("/:id")
	.get(articlesController.findById) //get an article by id
	.put(articlesController.update) //update an article by id
	.delete(articlesController.delete) //delete an article by id

module.exports = articleRouter;