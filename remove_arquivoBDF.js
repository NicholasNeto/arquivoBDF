var Noticia = require('./projectArquivo');

var id = '5899ad373809dd0290b129c1'

// get the user starlord55
// find the user with id 4
Noticia.findByIdAndRemove(id, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('Noticia deleted!');
  process.exit()
});
