var User = require('./projectArquivo');

var id = '58986440be2cf50319dec717'

// get the user starlord55
// find the user with id 4
User.findByIdAndRemove(id, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
