const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IngredientSchema = require('./ingredients').IngredientSchema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: String,
    ingredients: [IngredientSchema]

});


const Recipe = mongoose.model('recipe', RecipeSchema);

Recipe.count({}, function (err, count) {
    if(count < 5){
        console.log('Voeg recipe toe (database is leeg)');
        const recipe = new Recipe({
            name: 'Chebureki (ЧЕБУРЕКИ)',
            description: 'Lekker Russish recept wat vaak wordt gegeten',
            imagePath: 'http://2.bp.blogspot.com/-Gjw-YnoxoMI/VWJClqhdzYI/AAAAAAAASnM/KGJcHXU7RTU/s1600/%25D0%25A7%25D0%25B5%25D0%25B1%25D1%2583%25D1%2580%25D0%25B5%25D0%25BA%25D0%25B8%2B%25231.jpg',
            ingredients: [
                {
                    name: 'Rundvlees',
                    amount: 3
                },
                {
                    name: 'Frituurpan',
                    amount: 1
                },
                {
                    name: 'Deeg',
                    amount: 2
                }
            ]
        }).save();
    }
    else {
        console.log('Test recipe wordt niet gebruikt, er zijn al recepten aanwezig in de database')
    }
});




module.exports = Recipe;