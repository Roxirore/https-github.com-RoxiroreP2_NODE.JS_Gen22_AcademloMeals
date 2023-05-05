const { DataTypes } = require('sequelize');
const { dbMeals } = require('../database/meals.config');
// id, name, price, restaurantId, status
const Meal = dbMeals.define('meals', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    restaurantId:{
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    status:{
            type: DataTypes.ENUM('available','disabled'),
            allowNull: false,
            defaultValue: 'available',
    },

}) ;

module.exports = Meal;