const Router = require('express')
const router = new Router()
const TransportController = require ('../controllers/transport.controller')

router.post('/transport', TransportController.createTransport)
router.get('/transport', TransportController.getTransport)
router.delete('/transport', TransportController.deleteTransport)
module.exports = router