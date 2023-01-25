const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesGetRecipes = require('./get/routesGetRecipes');
const routesGetDiets = require('./get/routesGetDiets');



const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', routesGetRecipes);

router.use('/diets', routesGetDiets);


module.exports = router;
