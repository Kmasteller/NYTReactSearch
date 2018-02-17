// Require Mongoose
var mongoose = require('mongoose');

// Setup Schema
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  }

});

// Create the Article model
var Article = mongoose.model('Article', ArticleSchema);

// Export
module.exports = Article;