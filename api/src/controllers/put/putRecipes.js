const { Recipe } = require('../../db');


const putRecipe = async (id, name, summary, dishTypes, healthScore, diets, image, steps) => {
   const RecipeDb = await Recipe.findByPk(id)

   RecipeDb?.update({
      name: name,
      summary: summary, 
      dishTypes: dishTypes, 
      healthScore: healthScore,
      diets: diets, 
      image: image,
      steps: steps,
   }) 
  return RecipeDb;
  
};


module.exports = {
    putRecipe
}