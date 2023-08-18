const {Cards} = require('../models/cards')

const Service = {
    getAll: async function(query){
        let cards = await Cards.findAll(query);

        return {cards, count: cards.length}
    },
    get: async function(id, query){
        return await Cards.findByPk(id,query);
    },
    create: async function(model){
        return await Cards.create(model);
    },
    update: async function(id, model){
        let lab = await Cards.findByPk(id);

        if(!lab)
            throw new Error({message: "Unknown Laboratory"})

        Object.keys(model).map(function(key) {
            lab[key] = model[key] !== undefined ? model[key] : lab[key];
        })

        await lab.save();
        return lab;
    },
    delete: async function(id){
        const deleted = await Cards.destroy({where: {id: id}});
        return deleted > 0 ? {success: "Item Deleted"} : {error: "Couldn't delete item"};
    }
}

module.exports = Service;
