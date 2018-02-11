const Plan=require('../models/plan.model');

module.exports.index = (req, res, next) => {
    Plan.find()
    .then((plans) => {
      console.log(plans);

      res.render('plans/index', {
        plans
      });
    });
};