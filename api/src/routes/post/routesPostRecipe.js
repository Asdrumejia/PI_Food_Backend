const { Router } = require ('express');
const { postRecipe } = require('../../controllers/post/postRecipe');


const router = Router();


router.post('/', async (req, res) => {
    const {image, name, summary, dishTypes, healthScore, diets, steps} = req.body; 
    try {
        const newRecipe = await postRecipe(image, name, summary, dishTypes, healthScore, diets, steps)
        res.status(200).send(newRecipe);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


module.exports = router;