const { Router } = require('express');
const { deleteRecipe } = require('../../controllers/delete/deleteRecipe');


const router = Router();


router.delete('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const deleted = await deleteRecipe(id)
     res.status(200).send("Recipe successfully deleted")
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;
