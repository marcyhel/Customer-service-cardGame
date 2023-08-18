const Cards = require('../service/cards.service');

var controller = {
    getAll: async function(req, res, next){
        try{
            let labs = await Cards.getAll();
            res.json(labs);
        } catch (err){
            next(err);
        }
    },
    get: async function(req, res, next){
        try{
            let labs = await Cards.get(req.params.id);
            res.json(labs);
        } catch (err){
            next(err)
        }
    },
    create: async function(req, res, next){
        try{
            let laboratory = await Cards.create(req.body);
            res.json(laboratory);
        } catch (err) {
            next(err);
        }
    },
    update: async function(req, res, next){
        try {
            let laboratory = await Cards.update(req.params.id, req.body);
            res.json(laboratory);
        } catch(err){
            next(err);
        }
    },
    delete: async function(req, res, next){
        try{
            await Cards.delete(req.params.id);
            res.json({message: "Success - Compatibility Deleted"});
        } catch (err){
            next(err);
        }
    }
}

module.exports = controller;
