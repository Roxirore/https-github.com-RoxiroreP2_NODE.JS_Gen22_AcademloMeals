const express = require('express');
 
const mealsController = require('./../controllers/meals.controller');

const mealsRouter = express.Router();

mealsRouter
  .route('/')
  // Obtener todas las comidas con status active 
  .get(mealsController.findAllActiveMeals);


mealsRouter
  .route('/:id')
  // Crear una nueva comida en el restaurant, 
  // siendo :id el id del restaurant (enviar name, price (INT) en req.body) 
  .post(mealsController.createMeal)
  // Obtener por id una comida con status active
  .get(mealsController.findOneMeal)
  // Actualizar comida (name, price) 
  .patch(mealsController.updateMeal)
  // Deshabilitar comida 
  .delete(mealsController.deleteMeal);


module.exports = mealsRouter;

// /api/v1/meals 
// POST /:id 
// Crear una nueva comida en el restaurant, siendo :id el id del restaurant (enviar name, price (INT) en req.body) 
// GET / 
// Obtener todas las comidas con status active 
// GET /:id 
// Obtener por id una comida con status active 
// PATCH /:id 
// Actualizar comida (name, price) 
// DELETE /:id 
// Deshabilitar comida 

//  Todas las rutas, excepto GET / y /:id, 
//  deben estar protegidas por un método de autentificación. 
//  El endpoint para crear comidas, debe estar protegido 
//  con express-validator. 
//  Los métodos POST, PATCH y DELETE deben estar protegidos 
//  para que únicamente el usuario admin pueda realizar estas acciones. 
//  Para los endpoints GET, se debe incluir 
//  la información de su restaurant.