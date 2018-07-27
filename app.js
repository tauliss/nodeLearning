const fs = require('fs');
const os = require('os');

var userName = os.hostname;

fs.appendFile('test.txt',`Hello ${userName}!`,function err(err){
	//console.log(err);
});