const noteRouter = require("express");

const notesController = require("../controllers/notesController");

noteRouter.route("/notes")
	.post(notesController.create) //save note

noteRouter.route("notes/:id")
	.get(notesController.findById) //get notes associated with article
	.delete(notesController.delete)

module.exports = noteRouter;