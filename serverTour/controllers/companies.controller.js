const db = require('../db.js')
const { use } = require('../server.js')

class CompaniesController{
    async createCompany(req, res) {
        const { name, address, phone_number, email } = req.body;
        try {
          const newCompany = await db.query(
            `INSERT INTO companies (name, address, phone_number, email)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [name, address, phone_number, email]
          );
      
          res.json(newCompany.rows[0]);
          console.log(name, address, phone_number, email);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        }
      }
    async getCompanies(req, res) {
        try {
        const companies = await db.query('SELECT * FROM companies');
        res.json(companies.rows)
        } catch (error) {
        
            console.error(error);
            res.status(500).json('Ошибка сервера');
        }
        }

    async deleteCompany(req, res) {
        const companyId = req.body.id;
            
        try {
        const result = await db.query('DELETE FROM companies WHERE id = $1', [companyId]);
        res.json(result.rows[0]);
        } catch (error) {
        console.error(error);
        res.status(500).json('Ошибка сервера');
        }
        }
}
module.exports = new CompaniesController()