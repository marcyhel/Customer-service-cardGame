'use strict';
const {DataTypes, Model} = require('sequelize');
var sequelize = require('../helpers/db');
const { Decks } = require('./decks')

class Deck_list extends Model {}
Deck_list.init({
	id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	id_deck: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	id_card:{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	count:{
		type: DataTypes.INTEGER,
		allowNull: true
	}
},{
	sequelize,
	timestamps:false,
	tableName:"Deck-list",
	modelName:"deck-list",
});

Decks.hasMany(Deck_list, {
    foreignKey: 'id_deck', // Chave estrangeira em Deck_list que faz referência ao Deck
  });
  
  // Uma entrada na Deck_list pertence a um Deck
Deck_list.belongsTo(Decks, {
foreignKey: 'id_deck', // Chave estrangeira em Deck_list que faz referência ao Deck
});
module.exports = {Deck_list};
