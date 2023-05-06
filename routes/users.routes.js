const express = require('express');
const usersController = require('./../controllers/users.controller');
const usersMiddlewares = require('./../middlewares/users.middlewares');
const validationMiddleware = require('./../middlewares/validations.middlewares');
const authMiddleware = require('./../middlewares/auth.middlewares');
const authController = require('../controllers/auth.controller');

const usersRouter = express.Router();

userRouter.use(authMiddleware.protect);

usersRouter.route('/').get(usersController.findAllUsers);
// .post(usersController.createUser)

usersRouter
  .route('/:userId')
  .get(usersMiddlewares.validExistUser, usersController.findOneUser)
  .patch(
    usersMiddlewares.validExistUser,
    validationMiddleware.updateUserValidation,
    authMiddleware.protectAccountOwner,
    usersController.updateUser
  )
  // .patch(usersController.updateUserClient)
  .delete(
    usersMiddlewares.validExistUser,
    validationMiddleware.deleteUserValidation,
    authMiddleware.protectAccountOwner,
    usersController.deleteUser
  );

usersRouter
  .route('/password/:userId')
  .patch(
    validationMiddleware.updatedPasswordValidation,
    usersMiddlewares.validExistUser,
    authMiddleware.protectAccountOwner,
    authController.updatedPassword
  );

module.exports = usersRouter;

// /api/v1/users 
// POST /signup 
// Crear usuario (enviar name, email, y password por req.body) (opcional el role) 
// POST /login 
// Iniciar sesión (enviar email y password por req.body) 

// PATCH /:id 
// Actualizar perfil de usuario (solo name y email) 
// DELETE /:id 
// Deshabilitar cuenta de usuario 
// GET /orders 
// Obtener todas las ordenes hechas por el usuario 
// GET /orders/:id 
// Obtener detalles de una sola orden dado un ID

//  Todas las rutas, excepto para crear usuario e iniciar sesión, se deben proteger por un medio de autentificación, es decir, por JWT. 
//  Se debe usar express-validator para el endpoint de crear usuarios. 
//  Se debe encriptar la contraseña usando bcryptjs 
//  El endpoint /orders y /orders/:id, debe buscar las órdenes del usuario en sesión (del token que se envió), extraer el id del token y usarlo para buscar dichas órdenes. 
//  Los métodos PATCH y DELETE deben estar protegidos para que únicamente el dueño de la cuenta a modificar pueda realizar dichas acciones. 
//  Para los endpoints /orders, se debe incluir la siguiente información: 
//     | La comida que se ordenó 
//       El restaurant de donde se pidió la comida 