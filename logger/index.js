var log4js = require("log4js");
var log4jsConfig = require(__dirname+'/log4js.json');
log4js.configure(log4jsConfig);
module.exports = log4js;