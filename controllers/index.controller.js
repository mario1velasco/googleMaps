const Plan=require('../models/plan.model');

module.exports.index = (req, res, next) => {
    res.render("index");
};