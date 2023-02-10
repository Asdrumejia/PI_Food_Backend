const { Router } = require ('express');
const { postRecipe } = require('../../controllers/post/postRecipe');


const router = Router();


router.post('/', async (req, res) => {
    const { name, summary, dishTypes, healthScore, diets, image, steps } = req.body; 
    try {
        if(!name || !summary || !dishTypes || !healthScore || !diets || !image || !steps){
            return res.status(404).send('Missing data to create Recipe');
        }
        const newRecipe = await postRecipe(name, summary, dishTypes, healthScore, diets, image, steps);
        res.status(200).send(newRecipe);
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router;