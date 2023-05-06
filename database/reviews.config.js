const { Sequelize } = require('sequelize');

const dbReviews = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'MyPostgreSQL!',
  database: 'dbacademloreviews',
  port: 5432,
  logging: false,
});

module.exports = { dbReviews };
