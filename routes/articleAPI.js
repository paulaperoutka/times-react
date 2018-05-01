//express router
const router = require("exoress");

//Slash defines /api/articles as default
router.route("/")
	.get() //get all articles
	.post() //save an article

router.route("/:id")
	.get() //get an article by id
	.put() //update an article by id
	.delete() //delete an article by id

module.exports = router;