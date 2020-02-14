const express = require ('express');
const routes = express.Router();

const recipes = require('./app/controllers/recipes');
const viewer = require('./app/controllers/viewer');
const chefs = require('./app/controllers/chefs');


// --------------------- PUBLIC AREA --------------------- //

routes.get('/about', viewer.about);

routes.get('/', recipes.index);
routes.get('/recipes', recipes.recipes);
routes.get('/recipes/:id', recipes.show);
routes.get('/chefs', recipes.show);  ///////// CHANGE

//routes.get("/recipes/:index", recipes.show);

// --------------------- ADMIN AREA --------------------- //

routes.get('/admin', recipes.adminIndex);
routes.get('/admin/recipes', recipes.adminRecipes);
routes.get('/admin/recipes/create', recipes.create);

routes.get('/admin/chefs', chefs.adminChefs);
routes.get('/admin/chefs/create', chefs.create);

routes.post('/admin/recipes', recipes.post);
routes.post('/admin/chefs', chefs.post);

module.exports = routes;