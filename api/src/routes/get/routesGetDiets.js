const { Router } = require('express');
const { getDiets } = require('../../controllers/get/getDiets');


const router = Router();


router.get('/', async (req, res) => {
    const {name} = req.query;
    const diets = await getDiets();
    try {
        if(name){
            let filterDiet = diets.filter(r => r.name.toLowerCase().includes(name.toLocaleLowerCase()));
            filterDiet.length ? res.status(200).send(filterDiet) : res.status(404).send('Diet not found');
        }else{
            res.status(200).send(diets);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router;