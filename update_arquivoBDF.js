var Noticia = require('./projectArquivo');

var id = '5899ad373809dd0290b129c1'

// get a noticia  with ID of 1
Noticia.findById( id , function(err, resultNoticia) {
  if (err) throw err;

  // change the noticia location
  resultNoticia.post = "kael quer fazer um update"

  // save the noticia 
  resultNoticia.save(function(err) {
    if (err) throw err;

    console.log('Noticia successfully updated!');
    process.exit()
  });

});
