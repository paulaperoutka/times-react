//mongoose model || SCHEMA
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	link: {
    type: String,
    required: true
  }, 
	notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }],
  saved: {
    type: Boolean,
    default: false
  }
});

//model name Article and const schema
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
