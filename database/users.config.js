const { Sequelize } = require('sequelize');

const dbUsers = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'MyPostgreSQL!',
    database: 'dbacademlousers',
    port: 5432,
    logging: false,
});

module.exports = { dbUsers };