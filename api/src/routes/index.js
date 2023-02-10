const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipes = require('./get/routesGetRecipes');
const getDiets = require('./get/routesGetDiets');
const postRecipe = require('./post/routesPostRecipe');
const putRecipe = require('./put/routesPutRecipe');
const deleteRecipe = require('./delete/routesDeleteRecipe');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', getRecipes);

router.use('/diets', getDiets);

router.use('/recipe', postRecipe);

router.use('/recipe', putRecipe);

router.use('/recipe', deleteRecipe);






module.exports = router;
