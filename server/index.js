var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

// app.use(function(req, res) {
//   res.setHeader('content-type': 'text/plain')
//   res.write('Wow I did it line 15 index.js server')
//   res.end(JSON.stringify(req.body, null, 2))
// });

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function(req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      // console.log('sean');
      items.selectAll();  
    }
  });
});

app.post('/items', function(req, res) {
  
  console.log(req.body);
  
  res.end(JSON.stringify(req.body));
 
  // console.log(items.addMessage());
  
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

