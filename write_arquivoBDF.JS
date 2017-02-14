var readinDataBase = require('./read_arquivoBDF.js');
var fs = require("fs");

readinDataBase(function(err, resultado) {
	if(err) throw err;

	fs.writeFile('./md.txt', resultado, function(err){
		if(err) throw err;

		console.log('escrito com sucesso');
		process.exit()
	});
});