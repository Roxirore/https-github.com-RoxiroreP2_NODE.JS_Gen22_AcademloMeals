const express = require('express');

// /api/v1/restaurants 
// POST / 
// Crear un nuevo restaurant (enviar name, address, rating (INT)) rating debe ser un valor del 1 al 5 
// GET / 
// Obtener todos los restaurants con status active 

// GET /:id 
// Obtener restaurant por id 
// PATCH /:id 
// Actualizar restaurant (name, address) 
// DELETE /:id 
// Deshabilitar restaurant. 
// POST /reviews/:id 
// Crear una nueva reseña en el restaurant, siendo :id el id del restaurant (enviar comment, rating (INT) en req.body) 
// PATCH /reviews/:restaurantId/:id 
// Actualizar una reseña hecha en un restaurant, siendo :id el id del review y restaurantId el id del restaurant (comment, rating) SOLO EL AUTOR DE LA RESEÑA PUEDE ACTUALIZAR SU PROPIA RESEÑA 
// DELETE /reviews/:restaurantId/:id 
// Actualizar una reseña hecha en un restaurant a status deleted, siendo :id el id del review y restaurantId  el id del restaurant. SOLO EL AUTOR DE LA RESEÑA PUEDE ACTUALIZAR SU PROPIA RESEÑA

//  Todas las rutas, excepto GET / y /:id, deben estar protegidas por un método de autentificación. Se debe incluir las reseñas de los restaurants. 
//  El endpoint para crear restaurants, debe estar protegido con express-validator. 
//  Los endpoints POST / PATCH /:id y DELETE /:id deben estar protegidos para que únicamente el usuario admin pueda realizar estas acciones.