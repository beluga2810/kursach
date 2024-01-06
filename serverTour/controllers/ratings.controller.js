const db = require('../db.js')
const { use } = require('../server.js')

class RatingsController{
    async createRating(req, res) {
        const { rating, comment } = req.body;
        try {
          const newRating = await db.query(
            `INSERT INTO ratings ( rating, comment)
             VALUES ($1, $2)
             RETURNING *`,
            [rating, comment]
          );
      
          res.json(newRating.rows[0]);
          console.log(rating, comment);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        }
      }
    async getRating(req, res) {
        try {
        const ratings = await db.query('SELECT * FROM ratings');
        res.json(ratings.rows)
        } catch (error) {
        
            console.error(error);
            res.status(500).json('Ошибка сервера');
        }
        }

    async deleteRating(req, res) {
        const ratingId = req.body.id;
            
        try {
        const result = await db.query('DELETE FROM ratings WHERE id = $1', [ratingId]);
        res.json(result.rows[0]);
        } catch (error) {
        console.error(error);
        res.status(500).json('Ошибка сервера');
        }
        }
}
module.exports = new RatingsController()