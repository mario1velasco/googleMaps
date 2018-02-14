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


    Plan.find()
        .then(plans => {
            let solution = getPlans(plans, initHour, endHour);
            console.log(solution);

            res.json({
                solution: solution
            });
        })
        .catch(error => next(error));
};

function getPlans(plans, arriveHourDate, leftHourDate) {
    let arraySolution = [];
    arriveHourDate = new Date(arriveHourDate);
    leftHourDate = new Date(leftHourDate);
    var diffDays = (leftHourDate.getTime() - arriveHourDate.getTime()) / (24 * 60 * 60 * 1000);
    //SI NO hay mas de un día de diferencia
    if ((diffDays >= 0) && (diffDays <= 1)) {
        let arriveHour=arriveHourDate.getHours();
        let leftHour=leftHourDate.getHours();
        plans.forEach(plan => {
            console.log('arriveHour = ' + arriveHour);
            console.log('leftHour = ' + leftHour);
            console.log('plan.startTime = ' + plan.startTime);
            console.log('plan.endTime = ' + plan.endTime);
            console.log('plan.duration = ' + plan.duration);
            console.log('plan.days[arriveHourDate.getUTCDay()] = ' + plan.days[arriveHourDate.getUTCDay()]);

            //Si el plan esta abierto ese dia y el plan solo dura el mismo día
            if ((plan.days[arriveHourDate.getUTCDay()] === true) && (plan.startTime < plan.endTime)) {
                //SI Te vas al dia siguiente
                if (arriveHour > leftHour) {
                    leftHour += 24;
                    let possiblePlan = calculatePlans(arriveHour, leftHour, plan.startTime, plan.endTime, plan.duration);
                    console.log("possiblePlan = " + possiblePlan);
                    console.log("Plan Plan Plan Plan Plan Plan Plan Plan Plan Plan:");
                    console.log(plan);
                    
                } else {
                    let possiblePlan = calculatePlans(arriveHour, leftHour, plan.startTime, plan.endTime, plan.duration);
                    console.log("possiblePlan = " + possiblePlan);
                    console.log("Plan Plan Plan Plan Plan Plan Plan Plan Plan Plan:");
                    console.log(plan);
                }
            }
            console.log("__________________________________________________________");
            
        });
    } else {
        return 'You just can do a StopOver less than 1 days';
    }

}

function calculatePlans(arriveHour, leftHour, startTime, endTime, duration) {
    //El plan esta dentro de tu hora de entrada y salida
    if ((arriveHour <= startTime) && (endTime <= leftHour)) {
        return true;
    } else
        //El plan ya esta cuando llegaste y acaba antes de que te vayas
        if ((arriveHour + duration <= endTime) && (endTime <= leftHour)) {
            return true;
        } else
            //El plan empieza despues de que llegaste y acaba despues de que te marchas
            if ((arriveHour <= startTime) && (startTime + duration <= leftHour)) {
                return true;
            } else
                //FALTA UN PLAN QUE DURE MAS QUE TU PARADA PERO QUE POR DURACION SIEMPRE PUEDES HACER
                //EJEMPLO SIEMPRE PUEDES PASEAR A CUALQUIER HORA Y DURA 2H
                if ((arriveHour + duration <= endTime) && (startTime + duration <= leftHour)) {
                    return true;
                }
    return false;
}