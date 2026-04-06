const express = require('express');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

const {
createRecord,
getRecords,
updateRecord,
deleteRecord
} = require('../controllers/recordController');
router.post('/', roleMiddleware('admin', 'user'), createRecord);
router.get('/', roleMiddleware('admin', 'user', 'viewer'), getRecords);
router.put('/:id', roleMiddleware('admin', 'user'), updateRecord);
router.delete('/:id', roleMiddleware('admin'), deleteRecord);

module.exports = router;
