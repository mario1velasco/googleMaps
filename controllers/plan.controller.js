const Plan = require('../models/plan.model');
const mongoose = require('mongoose');

module.exports.index = (req, res, next) => {
  Plan.find()
    .then((plans) => {
      res.render('plans/index', {
        plans
      });
    })
    .catch(error => next(error));
};
module.exports.create = (req, res, next) => {
  res.render('plans/new', {
    plan: new Plan()
  });
};
module.exports.doCreate = (req, res, next) => {
  const plan = new Plan(req.body);
  (plan.weather === "sunny") ? plan.weather = true: false;
  if (!req.body.title || !req.body.description || !req.body.imgUrl || !req.body.price || !req.body.duration || !req.body.days || !req.body.startTime || !req.body.endTime || !req.body.startPosition || !req.body.endPosition) {
    const title = req.body.title ? '' : 'Title is required';
    const description = req.body.description ? '' : 'description is required';
    const imgUrl = req.body.imgUrl ? '' : 'imgUrl is required';
    const price = req.body.price ? '' : 'Price is required';
    const duration = req.body.duration ? '' : 'Duration is required';
    const days = req.body.days ? '' : 'Days is required';
    const startTime = req.body.startTime ? '' : 'Start time is required';
    const endTime = req.body.endTime ? '' : 'End Time is required';
    const startPosition = req.body.startPosition ? '' : 'Start position is required';
    const endPosition = req.body.endPosition ? '' : 'End position is required';
    res.render('plans/new', {
      error: {
        title,
        description,
        imgUrl,
        price,
        duration,
        days,
        startTime,
        endTime,
        startPosition,
        endPosition
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
      })
      .catch(error => next(error));
  }

};

module.exports.update = (req, res, next) => {
  const id = req.params.id;
  Plan.findById(id)
    .then((plan) => {
      res.render('plans/new', {
        plan
      });
    })
    .catch(error => next(error));
};


module.exports.doUpdate = (req, res, next) => {
  const plan = new Plan(req.body);
  plan._id = req.params.id;
  const id = req.params.id;
  (plan.weather === "sunny") ? plan.weather = true: false;

  if (!req.body.description || !req.body.imgUrl || !req.body.price || !req.body.duration || !req.body.days || !req.body.startTime || !req.body.endTime || !req.body.startPosition || !req.body.endPosition) {
    const description = req.body.description ? '' : 'description is required';
    const imgUrl = req.body.imgUrl ? '' : 'imgUrl is required';
    const price = req.body.price ? '' : 'Price is required';
    const duration = req.body.duration ? '' : 'Duration is required';
    const days = req.body.days ? '' : 'Days is required';
    const startTime = req.body.startTime ? '' : 'Start time is required';
    const endTime = req.body.endTime ? '' : 'End Time is required';
    const startPosition = req.body.startPosition ? '' : 'Start position is required';
    const endPosition = req.body.endPosition ? '' : 'End position is required';
    Plan.findById(id)
      .then((planB) => {
        res.render('plans/new', {
          error: {
            description,
            imgUrl,
            price,
            duration,
            days,
            startTime,
            endTime,
            startPosition,
            endPosition
          },
          plan: planB
        });
      })
      .catch(error => next(error));
  } else {
    // const plan = new Plan(req.body);
    Plan.findByIdAndUpdate(id, plan)
      .then(plan => {
        res.redirect('/plans');
      })
      .catch(error => next(error));
  }
};