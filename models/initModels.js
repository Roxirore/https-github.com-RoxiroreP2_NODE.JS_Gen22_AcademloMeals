const User = require('./users.model');
const Meal = require('./meals.model');
const Order = require('./orders.model');
const Restaurant = require('./restaurants.model');
const Review = require('./reviews.model');

const initModel = () => {
  // un usuario puede tener varias reviews
  User.hasMany(Review, { foreingKey: 'userId' });
  Review.belongsTo(User, { foreingKey: 'userId' });

  // un restaurant puede tener varias reviews
  Restaurant.hasMany(Review, { foreingKey: 'restaurantId' });
  Review.belongsTo(Restaurant, { foreingKey: 'restaurantId' });

  // un restaurant puede tener varias meals
  Restaurant.hasMany(Meal, { foreingKey: 'restaurantId' });
  Meal.belongsTo(Restaurant, { foreingKey: 'restaurantId' });

  // un meal puede tener una order
  Meal.hasMany(Order, { foreingKey: 'mealId' });
  Order.belongsTo(Meal, { foreingKey: 'mealId' });

  // un user puede tener una order
  User.hasMany(Order, { foreingKey: 'userId' });
  Order.belongsTo(User, { foreingKey: 'userId' });
};

module.exports = initModel;
