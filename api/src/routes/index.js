const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesGetRecipes = require('./get/routesGetRecipes');
const routesGetDiets = require('./get/routesGetDiets');
const routersPostRecipe = require('./post/routesPostRecipe');
const routesPutRecipe = require("./put/routesPutRecipe");
const routesDeleteRecipe = require("./delete/routesDeleteRecipe");


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', routesGetRecipes);

router.use('/diets', routesGetDiets);

router.use('/recipe', routersPostRecipe);

router.use('/recipe', routesPutRecipe);

router.use('/recipe', routesDeleteRecipe);






module.exports = router;
