const db = require('../db.js')
const { use } = require('../server.js')

class CityController{
    async createCity(req, res) {
        const { name} = req.body;
        try {
          const newCity = await db.query(
            `INSERT INTO cities (name)
             VALUES ($1)
             RETURNING *`,
            [name]
          );
      
          res.json(newCity.rows[0]);
          console.log(name);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        }
      }
    async getCity(req, res) {
        try {
        const cities = await db.query('SELECT * FROM cities');
        res.json(cities.rows)
        } catch (error) {
        
            console.error(error);
            res.status(500).json('Ошибка сервера');
        }
        }

    async deleteCity(req, res) {
        const cityId = req.body.id;
            
        try {
        const result = await db.query('DELETE FROM cities WHERE id = $1', [cityId]);
        res.json(result.rows[0]);
        } catch (error) {
        console.error(error);
        res.status(500).json('Ошибка сервера');
        }
        }
}
module.exports = new CityController()