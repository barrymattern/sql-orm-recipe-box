const { Op } = require('sequelize');
// const { all } = require('sequelize/types/lib/operators');
const { sequelize } = require('../models');
let Instruction;
let moduleError;

try {
  const db = require('../models');
  ({ Instruction } = db);
  if (Instruction === undefined) {
    moduleError = 'It looks like you need to generate the Instruction model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function createNewInstruction(specification, recipeId) {
  // Use the findAll method of the Instruction object to find all the
  // instructions for the specified recipe.
  //
  // Use the create method of the Instruction object to create a new object and
  // return it using the maximum listOrder from the query just before this.
  //
  // Docs: https://sequelize.org/v5/manual/instances.html#creating-persistent-instances

  let maxValue;

  // const allInstructions = await Instruction.findAll({
  //   where: {
  //     recipeId: {
  //       [Op.eq]: recipeId
  //     }
  //   }
  // });

  // const listOrderNumbers = allInstructions.map(instruction => {
  //   return instruction.listOrder;
  // });

  // if (!listOrderNumbers.length) {
  //   maxValue = 0;
  // } else {
  //   maxValue = Math.max(...listOrderNumbers);
  // }

  maxValue = await Instruction.max('listOrder', {
    where: {
      recipeId: recipeId
    }
  }) || 0; // If it returns falsy value, use 0

  return await Instruction.create({
    specification: specification,
    listOrder: maxValue + 1,
    recipeId: recipeId
  });
}
  
/* Don't change code below this line ******************************************/
module.exports = {
  createNewInstruction,
  loadingDbError: moduleError,
};
