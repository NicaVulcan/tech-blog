const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//post model
class Post extends Model {}

//post table
Post.init(
    //table columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        //table configurations
        sequelize,
        freezeTableName: true, 
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;