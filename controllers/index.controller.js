const Plan = require('../models/plan.model');

module.exports.index = (req, res, next) => {
    res.render("index");
};
module.exports.search = (req, res, next) => {
    res.render("search");
};
module.exports.doSearch = (req, res, next) => {

    res.json({
        hola: {
            Nombre:'Hicimos una peticion get'
        }
    });
};