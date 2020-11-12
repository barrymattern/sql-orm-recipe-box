'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.INTEGER,
    measurementUnitID: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeID: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    // associations can be defined here
  };
  return Ingredient;
};