'use strict';
const {DataTypes, Model} = require('sequelize');
var sequelize = require('../helpers/db');
// console.log(sequelize)
class Cards extends Model {}
Cards.init({
	id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	img_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	cost:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	tier:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	life:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	power:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	shield:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	moviment:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	description:{
		type: DataTypes.STRING,
		allowNull: true
	},
	effects:{
		type: DataTypes.JSON,
		allowNull: true
	}
},{
	sequelize,
	timestamps:false,
	tableName:"Cards",
	modelName:"cards",
});

module.exports = {Cards};
