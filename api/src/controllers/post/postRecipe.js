const { Recipe, Diet } = require("../../db");


const postRecipe = async (image, name, summary, dishTypes, healthScore, diets, steps) => {
    if(!image || !name || !summary || !dishTypes || !healthScore || !diets || !steps){
        throw Error('Missing data to create Recipe')
    }else{
        const newRecipe = await Recipe.create({
            image,
            name,
            summary,
            dishTypes,
            healthScore,
            steps, 
        })
        
        let dietDb = await Diet.findAll({
            where: { name: diets.length ? diets : diets.map((d) = d.name) }
        }) 


        await newRecipe.addDiet(dietDb)
        return newRecipe
    }
};


module.exports = {
    postRecipe
}


