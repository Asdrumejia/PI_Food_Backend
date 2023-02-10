const axios = require('axios');
const { Recipe, Diet } = require('../../db');
const { API_KEY } = process.env;


const getRecipesApi = async () => {
//  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
    const url = 'https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5/&addRecipeInformation=true&number=100';
    const apiUrl = await axios.get(url);
    const apiInfo = await apiUrl.data.results.map(r => {
        return{
            id: r.id,
            name: r.title,
            summary: r.summary.replace(/<[^>]*>?/g,''),
            dishTypes: r.dishTypes.join(" - "),
            healthScore: r.healthScore,
            diets:  r.diets.join(" - "),
            image: r.image,
            steps: r.analyzedInstructions[0]?.steps.map(s => {
                return {
                    number: s.number,
                    step: s.step
                }
            })
        }

    })
    return apiInfo;
};


const getDbInfo = async () => {
    const dB = await Recipe.findAll({
       include: {
          model: Diet, 
          attributes: ['name'],
           through: {
              attributes: [],  
          }
       }
  })

      const dB2 = dB?.map((r) => {
          return{
              id: r.id,
              name: r.name,
              summary: r.summary,
              dishTypes: r.dishTypes,
              healthScore: r.healthScore,
              diets: r.diets.map((d) => d.name),
              image: r.image,
              steps: r.steps,
              createdInDb: r.createdInDb
            }
        })
        return dB2
    };
  

const getRecipeById = async(id) => {
        if(!isNaN(id)){
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
            const apiData = await axios.get(url); 
            const recipe = await apiData.data
            const recipeData = {
            id: recipe.id,
            name: recipe.title,
            summary: recipe.summary.replace(/<[^>]*>?/g,''),
            dishTypes: recipe.dishTypes.join(" - "),
            healthScore: recipe.healthScore,
            diets: recipe.diets.join(" - "),
            image: recipe.image,
            steps: recipe.analyzedInstructions[0]?.steps.map(s => {
                return {
                    number: s.number,
                    step: s.step
                }
            })
}
return recipeData;
} 
if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)){
    const responseDb = await Recipe.findByPk(id, {
        include: [
          {
            model: Diet,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      })
    return  responseDb;
 } 
};


const getAllRecipes = async () => {
    const apiInfo = await getRecipesApi();
    const dbInfo = await getDbInfo();
    const totalInfo = await apiInfo.concat(dbInfo);
    return totalInfo
};


module.exports = {
    getRecipesApi,
    getAllRecipes,
    getRecipeById
}



