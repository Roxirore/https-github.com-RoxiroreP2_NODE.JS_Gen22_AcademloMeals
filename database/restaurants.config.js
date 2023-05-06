const { Sequelize } = require('sequelize');

const dbRestaurants = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'MyPostgreSQL!',
  database: 'dbacademlorestaurants',
  port: 5432,
  logging: false,
});

module.exports = { dbRestaurants };
