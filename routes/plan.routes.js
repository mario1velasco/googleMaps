var express = require('express');
var router = express.Router();
var planController=require('../controllers/plan.controller');

/* GET plans listing. */
router.get('/', planController.index);

module.exports = router;
