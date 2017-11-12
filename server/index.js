var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

var i = 0;
 
app.get('/items', function(reqForMessagesFromDB, sendBackToClient) {
  items.selectAll(function(err, messagesFromDB) {
    if (err) {
      console.log(i, '**Unable to retrieve data from DB');
      i++;
      sendBackToClient.sendStatus(500);
    } else { // success, route matched
      console.log(i, 'Successfully got messaged from DB');
      i++;
      sendBackToClient.json(messagesFromDB);
    }
  });
});

app.post('/items', function(req, res) {
  
  //Once the message data arrives here, pass it into addMessages() to add to database.
  items.addMessage(req.body);

  res.end(JSON.stringify(req.body));
  
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


