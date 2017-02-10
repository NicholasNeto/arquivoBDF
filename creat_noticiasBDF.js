var noticia = require('./projectArquivo');

// create a new user
var noticia2 = noticia({
  
  title: "Kael quer ver a noticia sendo criada",
  url: "https://www.brasildefato.com.br/2017/02/06/temer-indica-alexandre-de-moraes-para-vaga-no-stf/",
  data : "Agência Brasil, 07 de Fevereiro de 2017 às 19:19",
  post: ""

});

// save the user
noticia2.save(function(err) {
  if (err) throw err;

  console.log('noticia created!');
  process.exit()
});

