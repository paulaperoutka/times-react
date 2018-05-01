module.exports = {
	//require from same folder each model, don't need .js
	//wrapped into higher-level db object for easier consumption
	Article: require("./Article"),
	Note: require("./Note")
};