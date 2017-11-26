var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Recipe = require('../model/ingredient.model');

routes.get('/ingredients', function(req, res) {
    res.contentType('application/json');
    Ingredient.find({})
        .then((ingredients) => {
        res.status(200).json(ingredients);
})
.catch((error) => res.status(401).json(error));
});

routes.get('/ingredients/:id', function(req, res) {
});


routes.post('/ingredients', function(req, res) {
});

routes.put('/ingredients/:id', function(req, res) {
});

routes.delete('/ingredients/:id', function(req, res) {
});

module.exports = routes;
