var Article = require("../models/Article");

module.exports = {
    find: function(req, res) {
        Article.find().then(function(document) {
        res.json(document);
        }).catch(function(err) {
        res.json(err);
        });
    },

    insert: function(req, res) {
        Article.create(req.body).then(function(document) {
        res.json(document);
        }).catch(function(err) {
        res.json(err);
        });
    },

    delete: function(req, res) {
        Article.remove({
        _id: req.params.id
        }).then(function(document) {
        res.json(document);
        }).catch(function(err) {
        res.json(err);
        });
    }
};