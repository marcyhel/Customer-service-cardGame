const Deck = require('../service/deck.service');

var controller = {
    getAll: async function(req, res, next){
        try{
            // let labs = await Deck.getAll();
            // new Promise(resolve => setTimeout(resolve, 10000));
            res.json(labs);
        } catch (err){
            next(err);
        }
    },
    get: async function(req, res, next){
        try{
            let labs = await Deck.get(req.params.id);
            res.json(labs);
        } catch (err){
            next(err)
        }
    },
    create: async function(req, res, next){
        try{
            let laboratory = await Deck.create(req.body);
            res.json(laboratory);
        } catch (err) {
            next(err);
        }
    },
    update: async function(req, res, next){
        try {
            let laboratory = await Deck.update(req.params.id, req.body);
            res.json(laboratory);
        } catch(err){
            next(err);
        }
    },
    delete: async function(req, res, next){
        try{
            await Deck.delete(req.params.id);
            res.json({message: "Success - Compatibility Deleted"});
        } catch (err){
            next(err);
        }
    }
}

module.exports = controller;
