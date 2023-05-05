const { Sequelize } = require('sequelize');

const dbOrders = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'MyPostgreSQL!',
    database: 'dbacademloorders',
    port: 5432,
    logging: false,
});

module.exports = { dbOrders };