var noticia = require('./projectArquivo');

var id = '5899ad373809dd0290b129c1'

// get a user with ID of 1
noticia.findById( id , function(err, noticia1) {
  if (err) throw err;

  // change the users location
  noticia1.post = "blablablabla"

  // save the user
  noticia1.save(function(err) {
    if (err) throw err;

    console.log('Noticia successfully updated!');
  });

});
