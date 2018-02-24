// Require Mongoose
const mongoose = require('mongoose');
// Setup Schema
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

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
const Article = mongoose.model('Article', ArticleSchema);

// Export
module.exports = Article;