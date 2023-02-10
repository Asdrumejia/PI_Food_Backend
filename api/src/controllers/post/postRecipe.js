 const { Recipe, Diet } = require('../../db');


const postRecipe = async (name, summary, dishTypes, healthScore, diets, image, steps, createdInDb) => {
        const newRecipe = await Recipe.create({
            name,
            summary,
            dishTypes,
            healthScore,
            image,
            steps, 
            createdInDb
        });
        
        const dietsDb = await Diet.findAll({
        where: { name: diets }
        });

        await newRecipe.addDiet(dietsDb);
        return newRecipe;
};


module.exports = {
    postRecipe
}


