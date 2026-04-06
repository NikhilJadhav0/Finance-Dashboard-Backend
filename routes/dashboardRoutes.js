const express = require('express');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

const {
getSummary,
categorySummary,
monthlySummary
} = require('../controllers/dashboardController');
router.get('/summary', roleMiddleware('admin', 'user', 'viewer'), getSummary);
router.get('/category', roleMiddleware('admin', 'user', 'viewer'), categorySummary);
router.get('/monthly', roleMiddleware('admin', 'user', 'viewer'), monthlySummary);

module.exports = router;