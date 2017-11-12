var mongoose = require('mongoose');
var request = require('request');

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
  Item.find({}, function(err, messageData) {
    if(err) {
      console('Error when trying to find.')
      callback(err, null);
    } else {
      callback(null, messageData);
    }
  });
};

var addMessage = function(message, callback) {
  
  Item.create({message: message.data}, function (err) {
  if (err) { 
    console.log(err);
  }
  // saved!
  })
  
}

// var notify = function() {
  
//   console.log('Before notify');
  
//   $.ajax({
//     url: 'https://api.clockworksms.com/http/send.aspx?key=131ee2110d1a8194acb1379bd91ae8fc8554591c&to=19257055654&content=You+have+received+a+new+message+from',
//     key: '131ee2110d1a8194acb1379bd91ae8fc8554591c',
//     to: '19257055654', //encrypt these phone numbers later?
//     content: 'You have received a new message from',
//     success: function(data) {
//       console.log('TEXTING WORKED?!888888', data);
//     },
//     error: (err) => {
//       console.log('error texting', err);
//     }
//   });
  
//   // console.log('After notify');
// }
  

module.exports.selectAll = selectAll;
module.exports.addMessage = addMessage;
// module.exports.notify = notify;


// https://api.clockworksms.com/http/send.aspx?key=131ee2110d1a8194acb1379bd91ae8fc8554591c&to=19257055654&content=Hello



