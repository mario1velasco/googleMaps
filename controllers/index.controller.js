const Plan = require('../models/plan.model');

module.exports.index = (req, res, next) => {
    res.render("index");
};
module.exports.search = (req, res, next) => {
    res.render("search");
};
module.exports.doSearch = (req, res, next) => {
    const {
        initHour,
        endHour
    } = req.body;
    console.log(endHour);
    
    Plan.find()
        .then(plans => {
            res.json({
                plans
            });


        })
        .catch(error => next(error));
};