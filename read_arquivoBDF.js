var Noticia = require('./projectArquivo');

// Neste Script os callbacks não são anonimos, eles estão em variavel ex. 
var readinDataBase = function(callback) {

	var callbackFind = function(err, resultNoticia) {
  		if (err) throw err;
  		
  		callback(null, resultNoticia)
 	}

	Noticia.find({}, callbackFind);
};

// Esta chamada é para rodar o script sozinho  
// readinDataBase(function(erro , resul ) {
//	console.log(resul)
// });

module.exports = readinDataBase;