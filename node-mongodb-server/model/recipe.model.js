const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ingredient = require('./ingredient.model');

const RecipeSchema = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    ingredients: [Ingredient]
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

const recipe = new Recipe({
    name: 'Tasty Schnitzel',
    description: 'A super-tasty Schnitzel - just awesome!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    ingredients: [{name: 'schnitzel meat', amount: 1}]
}).save();

module.exports = Recipe;
