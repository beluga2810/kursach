const Router = require('express')
const router = new Router()
const UserController = require('../controllers/user.controller')

router.post('/users', UserController.createUser)
router.get('/user', UserController.getUsers)
router.post('/user', UserController.getOneUser)
router.get('/user/auth', UserController.getAuthUser)
router.put('/user', UserController.updateUser)
router.delete('/user', UserController.deleteUser)



module.exports = router