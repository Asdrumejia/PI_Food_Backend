const { Router } = require('express');
const { putRecipe } = require('../../controllers/put/putRecipes')


const router = Router();


router.put('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const {name, summary, dishTypes, healthScore, diets, image, steps} = req.body; 
       if(!name || !summary || !dishTypes || !healthScore || !diets || !image || !steps){
          res.status(404).send('Missing data to modify this recipe');
       }else{
          const recipeUpdated = await putRecipe(id, name, summary, dishTypes, healthScore, diets, image, steps);
          res.status(200).send('Successfully modified recipe');
       }
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router;
