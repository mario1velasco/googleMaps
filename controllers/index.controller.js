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
    console.log(initHour);
    console.log(endHour);

    Plan.find()
        .then(plans => {
            // console.log(plans);
            let arraySolution = [];
            // plans.forEach(plan => {
            //     console.log('plan.startTime[0] = ' + plan.startTime[0]);
            //     console.log('initHour[0] = ' + initHour[0]);
            //     console.log('endHour[0] = ' + endHour[0]);
            //     console.log('plan.duration[0] = ' + plan.duration[0]);

            //     if ((plan.startTime[0] >= initHour[0]) && (plan.startTime[0] <= (endHour[0] - plan.duration[0]))) {
            //         arraySolution.push(plan);

            //     }
            // });

            res.json({
                arraySolution
            });
        })
        .catch(error => next(error));
};