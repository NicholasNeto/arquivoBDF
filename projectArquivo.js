var mongoose = require('mongoose')  

uri = 'mongodb://localhost/minha-database';

mongoose.connect(uri);  

// grab the things we need

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({  

  title: String, 
  url : String, 
  data : String,
  post : String
  
});

// the schema is useless so far
// we need to create a model using it
var Noticia = mongoose.model('Noticia', userSchema);

// make this available to our noticias in our Node applications
module.exports = Noticia;