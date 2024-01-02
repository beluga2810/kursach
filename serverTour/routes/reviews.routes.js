const Router = require('express')
const router = new Router()
const ReviewsController = require ('../controllers/reviews.controller')

router.post('/reviews', ReviewsController.createReview)
router.get('/reviews', ReviewsController.getReviews)
router.delete('/reviews', ReviewsController.deleteReview)
module.exports = router