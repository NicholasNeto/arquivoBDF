var noticia = require('./projectArquivo');

var apresenter = function(noticias) {

	var listadeObj = [];

	for(var cadaNoticia in noticias) {

  		listadeObj.push({
  			title: noticias[cadaNoticia].title,
  			url: noticias[cadaNoticia].url,
  			data: noticias[cadaNoticia].data
  		});
  	}
  	return(listadeObj);
}

// get all the noticias
noticia.find({}, function(err, noticias) {
  if (err) throw err;

  //console.log(noticias)
  console.log(apresenter(noticias));
 
});

