const db = require('../db.js')
const { use } = require('../server.js')

class TourController{
    async createTour(req, res) {
        const { name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport } = req.body;
        try {
          const newTour = await db.query(
            `INSERT INTO tours (name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
             RETURNING *`,
            [name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport]
          );
      
          res.json(newTour.rows[0]);
          console.log(name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        }
      }
      async getTours(req, res){
        const tours = await db.query('SELECT * FROM tours')
        res.json(tours.rows)
    }
    // async getOneTour(req, res){
        
    //     try {const cookieValue = req.cookies.id
    //         const user = await db.query(`SELECT * FROM users WHERE (id) = ($1)`, [cookieValue])  
    //         res.json(user.rows[0])
    //     } catch (error) {
    //     console.error(error);
    //     res.json('Ошибка сервера')
    //   }
    // }
}

module.exports = new TourController()