const express = require('express');
const routes = express.Router();
const mongodb = require('../config/mongo.db');
const recipes = require('../model/recipe.model');

routes.get('/recipes', function(req, res) {
    res.contentType('application/json');
    recipes.find({})
        .then((recipes) => {
        res.status(200).json(recipes);
})
    .catch((error) => res.status(400).json(error));
});


routes.get('/recipes/:id', function(req, res) {
    res.contentType('application/json');
    const id = req.param('id');
    console.log(id);
    recipes.find({_id: id})
        .then((recipes) => {
        res.status(200).json(recipes);
})
    .catch((error) => res.status(400).json(error));
});


routes.post('/recipes', function(req, res) {

    recipes.create(req.body)
        .then((recipes) => {
        res.status(200).send(recipes)
})
    .catch((error) => res.status(400).json(error))
});


routes.put('/recipes/:id', function(req, res) {
    res.contentType('application/json');

    recipes.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(()=> recipes.findById({_id: req.params.id}))
    .then(driver => res.send(driver))
    .catch((error) => res.status(400).json(error))

});


routes.delete('/recipes/:id', function(req, res) {
    const id = req.param('id');
    recipes.findByIdAndRemove(id)
        .then((status) => res.status(200).json({
        'status': 'succesvol verwijderd',
        'recipe': status
    }))
    .catch((error) => res.status(400).json(error))
});

module.exports = routes;