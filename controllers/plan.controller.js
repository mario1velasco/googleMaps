const Plan = require('../models/plan.model');
const mongoose = require('mongoose');

module.exports.index = (req, res, next) => {
  Plan.find()
    .then((plans) => {
      console.log(plans);

      res.render('plans/index', {
        plans
      });
    });
};
module.exports.create = (req, res, next) => {
  res.render('plans/new');
};
module.exports.doCreate = (req, res, next) => {
  const plan = new Plan( req.body);
  (plan.weather==="sunny")?plan.weather=true:false;
  console.log(plan);
  
  if (!plan.title || !plan.description || !plan.imgUrl || !plan.price || !plan.duration || !plan.days || !plan.startTime || !plan.endTime || !plan.startPosition || !plan.endPosition) {
    const title = plan.title ? '' : 'Title is required';
    const description = plan.description ? '' : 'description is required';
    const imgUrl = plan.imgUrl ? '' : 'imgUrl is required';
    const price = plan.price ? '' : 'Price is required';
    const duration = plan.duration ? '' : 'Duration is required';
    const days = plan.days ? '' : 'Days is required';
    const startTime = plan.startTime ? '' : 'Start time is required';
    const endTime = plan.endTime ? '' : 'End Time is required';
    const startPosition = plan.startPosition ? '' : 'Start position is required';
    const endPosition = plan.endPosition ? '' : 'End position is required';
    res.render('plans/new', {
      error: {title, description, imgUrl, price, duration, days, startTime, endTime, startPosition, endPosition
      },
      plan: plan
    });
  } else {
    plan.save()
    .then(() => {
      res.redirect('/plans');
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('plans/new', {
          plan: plan,
          error: error.errors
        });
      } else {
        next(error);
      }
    });
  }

};