const Router = require('express')
const router = new Router()
const TourController = require ('../controllers/tours.controller')

router.get('/tours', TourController.getTours)
router.post('/tour/create', TourController.createTour)
router.post('/tour', TourController.getOneTour)
router.delete('/tour/delete', TourController.deleteTour)
module.exports = router