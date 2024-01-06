const Router = require('express')
const router = new Router()
const CityController = require ('../controllers/cities.controller')

router.post('/cities', CityController.createCity)
router.get('/cities', CityController.getCity)
router.delete('/cities', CityController.deleteCity)
module.exports = router