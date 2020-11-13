'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Ingredients', [
      { recipeId: 12, amount: 3, measurementUnitId: 12, foodStuff: 'Thai green curry paste', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 12, amount: 400, measurementUnitId: 6, foodStuff: 'coconut milk', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 12, amount: 150, measurementUnitId: 4, foodStuff: 'cooked prawns', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 12, amount: 250, measurementUnitId: 4, foodStuff: 'courgetti', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 11, amount: 3, measurementUnitId: 14, foodStuff: 'large white potatoes', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 11, amount: 2, measurementUnitId: 12, foodStuff: 'olive oil, for frying', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 11, amount: 4, measurementUnitId: 14, foodStuff: 'pork sausages', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 11, amount: 200, measurementUnitId: 4, foodStuff: 'cherry tomatoes on the vine', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 11, amount: 0.5, measurementUnitId: 14, foodStuff: 'tub fresh pesto', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 10, amount: 150, measurementUnitId: 4, foodStuff: 'peeled king prawns', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 10, amount: 1.5, measurementUnitId: 12, foodStuff: 'jerk seasoning', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 10, amount: 400, measurementUnitId: 4, foodStuff: 'kidney beans in chili sauce', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 10, amount: 250, measurementUnitId: 4, foodStuff: 'coconut rice', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, amount: 2, measurementUnitId: 12, foodStuff: 'olive oil, for frying', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, amount: 200, measurementUnitId: 4, foodStuff: 'risotto rice', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, amount: 700, measurementUnitId: 6, foodStuff: 'chicken or vegetable stock', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, amount: 1, measurementUnitId: 14, foodStuff: 'tub fresh pesto', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, amount: 100, measurementUnitId: 4, foodStuff: 'goat\'s cheese', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, amount: 1, measurementUnitId: 14, foodStuff: 'cauliflower', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, amount: 1.5, measurementUnitId: 12, foodStuff: 'oil', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, amount: 2, measurementUnitId: 13, foodStuff: 'fennel seeds', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, amount: 150, measurementUnitId: 4, foodStuff: 'red lentils', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, amount: 3, measurementUnitId: 12, foodStuff: 'curry paste of your choice', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, amount: 0.5, measurementUnitId: 14, foodStuff: 'lemon, juiced', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, amount: 200, measurementUnitId: 4, foodStuff: 'cooking chorizo', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, amount: 800, measurementUnitId: 4, foodStuff: 'chopped tomatoes', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, amount: 800, measurementUnitId: 4, foodStuff: 'drained butter beans', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, amount: 1, measurementUnitId: 14, foodStuff: 'tub fresh pesto', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, amount: 2, measurementUnitId: 15, foodStuff: 'cherry tomatoes', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, amount: 400, measurementUnitId: 4, foodStuff: 'mixed bean salad, drained', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, amount: 200, measurementUnitId: 4, foodStuff: 'baby spinach', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, amount: 4, measurementUnitId: 14, foodStuff: 'medium eggs', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, amount: 50, measurementUnitId: 4, foodStuff: 'thinly sliced smoked ham', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 300, measurementUnitId: 4, foodStuff: 'cooked beetroot in water', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 400, measurementUnitId: 4, foodStuff: 'can of chickpeas, drained', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 3, measurementUnitId: 12, foodStuff: 'vegan pesto', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 1, measurementUnitId: 12, foodStuff: 'olive oil', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 1, measurementUnitId: 16, foodStuff: 'vinegar', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 2, measurementUnitId: 14, foodStuff: 'ciabatta rolls', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, amount: 2, measurementUnitId: 14, foodStuff: 'handfulls mixed greens', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, amount: 250, measurementUnitId: 4, foodStuff: 'new potatoes, halved', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, amount: 2, measurementUnitId: 12, foodStuff: 'oil', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, amount: 2, measurementUnitId: 14, foodStuff: 'large leeks, thinly sliced', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, amount: 4, measurementUnitId: 14, foodStuff: 'eggs', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, amount: 100, measurementUnitId: 4, foodStuff: 'peppered smoked mackerel', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, amount: 2, measurementUnitId: 12, foodStuff: 'creamed horseradish', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 1, measurementUnitId: 10, foodStuff: 'lean ground beef', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 1, measurementUnitId: 14, foodStuff: 'medium onion, chopped', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 2, measurementUnitId: 14, foodStuff: 'garlic cloves, minced', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 1, measurementUnitId: 13, foodStuff: 'Italian seasoning', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 0.5, measurementUnitId: 13, foodStuff: 'pepper', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 0.25, measurementUnitId: 13, foodStuff: 'salt', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 2, measurementUnitId: 1, foodStuff: 'beef stock', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 1, measurementUnitId: 15, foodStuff: 'fire-roasted diced tomatoes', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 2, measurementUnitId: 1, foodStuff: 'uncooked spiral pasta', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 1, measurementUnitId: 1, foodStuff: 'frozen peas', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 1, measurementUnitId: 1, foodStuff: 'heavy whipped cream', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, amount: 0.5, measurementUnitId: 1, foodStuff: 'grated Parmesan cheese', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, amount: 2, measurementUnitId: 12, foodStuff: 'peanut butter', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, amount: 1, measurementUnitId: 12, foodStuff: 'jelly, your favorite flavor', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, amount: 2, measurementUnitId: 16, foodStuff: 'bread, your favorite kind', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 2, measurementUnitId: 14, foodStuff: 'unbaked pie crusts', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 2.5, measurementUnitId: 10, foodStuff: 'green grapes', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 1, measurementUnitId: 1, foodStuff: 'white sugar, plus extra for top crust', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 0.5, measurementUnitId: 13, foodStuff: 'nutmeg', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 1, measurementUnitId: 14, foodStuff: 'lemon', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 0.25, measurementUnitId: 1, foodStuff: 'elderberry flower syrup', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 0.25, measurementUnitId: 1, foodStuff: 'dark honey', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 0.25, measurementUnitId: 13, foodStuff: 'salt', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 3, measurementUnitId: 12, foodStuff: 'cornstarch', createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, amount: 2, measurementUnitId: 12, foodStuff: 'unsalted butter, cut into small pieces', createdAt: new Date(), updatedAt: new Date() }

    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};