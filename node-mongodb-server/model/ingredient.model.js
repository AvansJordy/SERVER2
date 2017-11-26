const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String,
    amount: Number
}, {
    timestamps: true
});

// const Ingredient = mongoose.model('ingredient', IngredientSchema);
//
// const ingredient = new Ingredient({
//     name: 'Buns',
//     amount: 2
// }).save();
//
// const ingredient2 = new Ingredient({
//     name: 'Meat',
//     amount: 1
// }).save();

module.exports = IngredientSchema;
