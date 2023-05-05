const { DataTypes } = require('sequelize');
const { dbOrders } = require('../database/orders.config');
// id, mealId, userId, totalPrice, quantity, status (active, cancelled, completed)
const Order = dbOrders.define('orders', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    mealId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    totalPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    status:{
            type: DataTypes.ENUM('active','cancelled','completed'),
            allowNull: false,
            defaultValue: 'active',
    },

}) ;

module.exports = Order;