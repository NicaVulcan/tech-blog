const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//user model
class User extends Model {
    //set up method for checking password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//user table
User.init(
    //table columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        //encrypt password before creating/updating user
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await
                bcrypt.hash(newUserData.password,10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await
                bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        //table configurations
        sequelize,
        timestamps: false,
        freezeTableName: true, 
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;