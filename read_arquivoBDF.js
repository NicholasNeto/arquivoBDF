var Noticia = require('./projectArquivo');

// get all the noticias
Noticia.find({}, function(err, resultNoticia) {
  if (err) throw err;

  
  console.log(resultNoticia);
  process.exit()
});

