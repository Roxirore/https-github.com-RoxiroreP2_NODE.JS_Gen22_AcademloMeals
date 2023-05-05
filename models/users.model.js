const { DataTypes } = require('sequelize');
const { dbUsers } = require('../database/users.config');
// id, name, email, password, status, role
const User = dbUsers.define('users', {
    userId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
            type: DataTypes.STRING,
            allowNull: false,
    },
    status:{
            type: DataTypes.ENUM('available','disabled'),
            allowNull: false,
            defaultValue: 'available',
    },
    role:{
        type: DataTypes.ENUM('normal','admin'),
        allowNull: false,
        defaultValue: 'normal',
},

}) ;

module.exports = User;