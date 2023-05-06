const catchAsync = require('../utils/catchAsync');
const Meal = require('./../models/meals.model');

//controllers sin id
exports.findAllActiveMeals = catchAsync(async (req, res) => {
  const { restaurantId, status } = req.body;
  const meals = await Meal.findAll({
    where: {
      restaurantId,
      status: 'active',
    },
  });

  res.status(200).json({
    status: 'success',
    message: `The active meals of restaurntId ${restaurantId} are found`,
    results: meals.length,
    meals,
  });
});

//controllers con id
exports.createMeal = catchAsync(async (req, res) => {
  const { name, price, restaurantId } = req.body;

  const meal = await Meal.create({
    name,
    price,
    restaurantId,
  });

  res.status(201).json({
    status: 'success',
    message: 'The meal has been created!',
    meal,
  });
});

exports.findOneMeal = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const meal = await Meal.findOne({
    where: {
      id,
      status: 'active',
    },
  });
  if (!meal) {
    return res.status(404).json({
      message: `The meal with id ${id} not found`,
    });
  }
  res.status(200).json({
    message: 'The meal has been found successfully',
    meal,
  });
});

exports.updateMeal = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const meal = await Meal.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!meal) {
    return res.status(404).json({
      status: 'error',
      message: `the meal with id: ${id} is not found`,
    });
  }

  await meal.update({ name, price });
  res.status(200).json({
    status: 'success',
    message: 'the meal has been updated',
  });
});

exports.deleteMeal = catchAsync(async (req, res) => {
  const { id } = req.params;

  const meal = await Meal.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!meal) {
    return res.status(404).json({
      status: 'error',
      message: `the meal with id: ${id} is not found`,
    });
  }

  await meal.update({ status: 'disabled' });
  res.status(200).json({
    status: 'success',
    message: 'the meal has been cancelled',
  });
});

module.exports = mealsController;

