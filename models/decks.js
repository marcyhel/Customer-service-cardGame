'use strict';
const {DataTypes, Model} = require('sequelize');
var sequelize = require('../helpers/db');
// console.log(sequelize)
class Decks extends Model {}
Decks.init({
	id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	id_user: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	name:{
		type: DataTypes.STRING,
		allowNull: true
	},
	favorit:{
		type: DataTypes.BOOLEAN,
		allowNull: true
	}
},{
	sequelize,
	timestamps:false,
	tableName:"Decks",
	modelName:"decks",
});

module.exports = {Decks};
