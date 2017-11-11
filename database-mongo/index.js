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
  // id: Number,
  message: String,
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      console.log('wtf!!!');
      callback(err, null);
    } else {

    }
  });
};

var addMessage = function(message, callback) {
  
  Item.create({message: message.data}, function (err) {
  if (err) { 
    console.log(err);
  };
  // saved!
})
  
}

module.exports.selectAll = selectAll;
module.exports.addMessage = addMessage;







