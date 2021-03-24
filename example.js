scraper = require('./index.js');
const util = require('util');

var medium = {user: 'Himanshu Mishra'}

scraper.getPosts(medium).then(function(results) {
  console.log(util.inspect(results))
})