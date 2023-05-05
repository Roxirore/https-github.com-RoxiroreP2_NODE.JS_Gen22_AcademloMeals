const { DataTypes } = require('sequelize');
const { dbReviews } = require('../database/reviews.config');
// id, userId, comment, restaurantId, rating
const Review = dbReviews.define('reviews', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}) ;

module.exports = Review;