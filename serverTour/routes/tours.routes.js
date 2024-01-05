const Router = require('express')
const router = new Router()
const TourController = require ('../controllers/tours.controller')

router.post('/tours', TourController.createTour)
router.get('/tours', TourController.getTours)


module.exports = router