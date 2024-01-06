const Router = require('express')
const router = new Router()
const CompaniesController = require ('../controllers/companies.controller')

router.post('/companies', CompaniesController.createCompany)
router.get('/companies', CompaniesController.getCompanies)
router.delete('/companies', CompaniesController.deleteCompany)
module.exports = router