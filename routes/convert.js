const express = require('express');
const router = express.Router();
const { convertRomanHandler } = require('../controllers/convertController');

router.post('/', convertRomanHandler);

module.exports = router;
