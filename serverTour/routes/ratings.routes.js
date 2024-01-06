const Router = require('express')
const router = new Router()
const RatingsController = require ('../controllers/ratings.controller')

router.post('/ratings', RatingsController.createRating)
router.get('/ratings', RatingsController.getRating)
router.delete('/ratings', RatingsController.deleteRating)
module.exports = router