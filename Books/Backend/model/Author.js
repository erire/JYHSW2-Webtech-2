const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Author = new Schema({
  name: {
    type: String
  },
  Date_of_Birth: {
    type: Date
  }
}, {
  collection: 'authors'
})
 
module.exports = mongoose.model('Author', Author)