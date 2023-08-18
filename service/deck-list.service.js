const {Deck_list} = require('../models/deck_list')

const Service = {
    getAll: async function(query){
        let deck_list = await Deck_list.findAll(query);

        return {deck_list, count: Deck_list.length}
    },
    get: async function(id, query){
        return await Deck_list.findByPk(id,query);
    },
    create: async function(model){
        return await Deck_list.create(model);
    },
    update: async function(id, model){
        let lab = await Deck_list.findByPk(id);

        if(!lab)
            throw new Error({message: "Unknown Deck"})

        Object.keys(model).map(function(key) {
            lab[key] = model[key] !== undefined ? model[key] : lab[key];
        })

        await lab.save();
        return lab;
    },
    delete: async function(id){
        const deleted = await Deck_list.destroy({where: {id: id}});
        return deleted > 0 ? {success: "Item Deleted"} : {error: "Couldn't delete item"};
    }
}

module.exports = Service;
