const { Recipe } = require("../../db");


const deleteRecipe = async function (id){
   const deleteDb = await Recipe.findByPk(id)

   const destroyRecipe = deleteDb?.destroy() 

   return destroyRecipe;
};


module.exports = {
    deleteRecipe
}