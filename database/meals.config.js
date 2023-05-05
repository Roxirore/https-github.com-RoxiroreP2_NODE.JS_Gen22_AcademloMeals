const { Sequelize } = require('sequelize');

const dbMeals = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'MyPostgreSQL!',
    database: 'dbacademlomeals',
    port: 5432,
    logging: false,
});

module.exports = { dbMeals };