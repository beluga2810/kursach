const Router = require('express')
const router = new Router()
const BookedController = require('../controllers/booked.controller')

router.post('/booked', BookedController.createBooked)
router.delete('/booked', BookedController.deleteBooked)

module.exports = router