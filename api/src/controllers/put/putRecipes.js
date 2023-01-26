const { Recipe } = require("../../db");


const putRecipe = async (id, image, name, summary, dishTypes, healthScore, diets, steps) => {
   const RecipeDb = await Recipe.findByPk(id)

   RecipeDb.update({
      image: image,
      name: name,
      summary: summary, 
      dishTypes: dishTypes, 
      healthScore: healthScore,
      diets: diets, 
      steps: steps,
   }) 
  return RecipeDb
  
};


module.exports = {
    putRecipe
}