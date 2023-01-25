const { Router } = require('express');
const { getRecipes, getAllRecipes, getDetails } = require('../../controllers/get/getRecipes')


const router = Router();


router.get('/', async (req, res) => {
    const {name} = req.query;
    const recipes = await getAllRecipes();
    try {
        if(name){
            let filterRecipe = recipes.filter(r => r.name.toLowerCase().includes(name.toLocaleLowerCase()));
            filterRecipe.length ? res.status(200).send(filterRecipe) : res.status(404).send('Recipe not found')
        }else{
           res.status(200).send(recipes);
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
});


router.get('/:id', async (req, res) => {
    //  const id = req.params.id
        const {id} = req.params
        try {
            const recipeDetail = await getDetails(id)
            res.status(200).send(recipeDetail)
        } catch (error) {
            res.status(400).send(error.message)
        }
});
    
  
module.exports = router;