const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//post model
class Comment extends Model {}

//comment table
Comment.init(
    //table columns
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        //table configurations
        sequelize,
        freezeTableName: true, 
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;