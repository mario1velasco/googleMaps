const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/', indexController.index);
router.get('/search', indexController.search);
router.get('/doSearch', indexController.doSearch);

module.exports = router;
