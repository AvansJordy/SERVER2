var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Recipe = require('../model/recipe.model');

routes.get('/recipes', function(req, res) {
    res.contentType('application/json');
    Recipe.find({})
        .then((recipes) => {
        // console.log(recipes);
        res.status(200).json(recipes);
})
.catch((error) => res.status(401).json(error));

});


routes.get('/recipes/:id', function(req, res) {
    res.contentType('application/json');
    Recipe.findOne({':id': req.query._id})
        .then((recipes) => {
        res.status(200).json(recipes);
    })
    .catch((error) => res.status(401).json(error));
});

routes.put('/recipes/push/:id', function(req, res) {
    res.contentType('application/json');
    Recipe.findOne({':id': req.query._id})
        .then((recipes) => {
          recipes.ingredients.push(req.body);
          recipes.save();
        res.status(200).json(recipes);
        res.send(result);
    })
    .catch((error) => res.status(400).json(error));
});


routes.post('/recipes', function(req, res) {
    res.contentType('application/json');
        Recipe.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        ingredients: req.body.ingredients
    }, function(err, result) {
        if (err) return res.send(err);
        res.send(result);
    })
});

routes.put('/recipes/:id', function(req, res) {
    res.contentType('application/json');
    Recipe.findByIdAndUpdate({_id: req.params.id}, {
      name: req.body.name,
      description : req.body.description,
      imageUrl: req.body.imageUrl,
      ingredients: req.body.ingredients

    })
        .then(()=> Recipe.findById({_id: req.params.id}))
        .then(driver => res.send(driver))
    .catch((error) => res.status(400).json(error))
});

routes.delete('/recipes/:id', function(req, res) {
    Recipe.findByIdAndRemove(req.param('id'))
        .then((status) => res.status(200).json({
        'succes': true,
        'recipe': status
    }))
    .catch((error) => res.status(400).json(error))
});

routes.delete('/recipes/remove/:id', function(req, res) {
    Recipe.findOne({':id': req.query._id})
        .then((ingredients) => {
          ingredients.findByIdAndRemove({_id: req.query.id})
        })
    .catch((error) => res.status(400).json(error))
});

module.exports = routes;
