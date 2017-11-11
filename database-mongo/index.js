var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      console.log('wtf!!!');
      callback(err, null);
    } else {
      // console.log('selectAll() working')
      // console.log('Posting to Database1!!!!!!!!', items);
      // callback(null, items);
    }
  });
};

var addMessage = function(callback) {
  // console.log('Got to addMessage()'); //successful
  
}

module.exports.selectAll = selectAll;
module.exports.addMessage = addMessage;