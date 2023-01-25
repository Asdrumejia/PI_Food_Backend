const { Diet } = require("../../db");


const getAllDiets = async () => {
    const dietsTypes = ['gluten free', 'ketogenic', 'vegetarian', 'ovo vegetarian', 'lacto ovo vegetarian',
                    'vegan', 'pescatarian', 'paleolithic', 'primal', 'fodmap friendly', 'whole 30', 'dairy free']
    
                    
        dietsTypes?.forEach((diet) => {
            Diet.findOrCreate({
                where: {
                    name: diet
                }
            });
        });
        
        const dbDiets = await Diet.findAll();
        return dbDiets
};


module.exports = {
    getAllDiets
}

