const { Router } = require('express');
const { putRecipe } = require('../../controllers/put/putRecipes')


const router = Router();


router.put('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const {image, name, summary, dishTypes, healthScore, diets, steps} = req.body 
       if(!image || !name || !summary || !dishTypes || !healthScore || !diets || !steps){
          res.status(400).send("Missing data to modify this recipe")
       }else{
          const recipeUpdated = await putRecipe(id, image, name, summary, dishTypes, healthScore, diets, steps)
          res.status(200).send("Successfully modified recipe")
       }
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;
