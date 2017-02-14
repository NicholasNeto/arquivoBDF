var Noticia = require('./projectArquivo');

var readinDataBase = function(callback) {

	Noticia.find({}, function(err, resultNoticia) {
  		if (err) throw err;

  		callback(null, resultNoticia)		
  	});
};

module.exports = readinDataBase;