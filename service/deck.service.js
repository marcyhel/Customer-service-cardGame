const {Decks} = require('../models/decks')
const {Deck_list} = require('../models/deck_list')

const Service = {
    getAll: async function(query){
        console.log(query)
        let decks = await Decks.findAll({include:[{
            model: Deck_list,
           
          }]});

        return {decks, count: decks.length}
    },
    get: async function(id, query){
        return await Decks.findByPk(id,{include:[{
            model: Deck_list,
           
          }]});
    },
    create: async function(model){
        return await Decks.create(model);
    },
    update: async function(id, model){
        let lab = await Decks.findByPk(id);

        if(!lab)
            throw new Error({message: "Unknown Laboratory"})

        Object.keys(model).map(function(key) {
            lab[key] = model[key] !== undefined ? model[key] : lab[key];
        })

        await lab.save();
        return lab;
    },
    delete: async function(id){
        const deleted = await Decks.destroy({where: {id: id}});
        return deleted > 0 ? {success: "Item Deleted"} : {error: "Couldn't delete item"};
    }
}

module.exports = Service;
