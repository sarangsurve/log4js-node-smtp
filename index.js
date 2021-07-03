const errorLogger = require(__dirname + '/logger').getLogger('error');
const infoLogger = require(__dirname + '/logger').getLogger('info');

function init() {
    errorLogger.error('This first log will be logged in logs/error.log');
    infoLogger.info('This second log will be logged in logs/info.log');
    errorLogger.error('This third log will be logged in logs/error.log');
    infoLogger.info('This fourth log will be logged in logs/info.log');
}

init();