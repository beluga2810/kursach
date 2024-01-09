const db = require('../db.js')
const { use } = require('../server.js')

class BookedController{
    async createBooked(req, res) {
        const { user_id, tour_id } = req.body
        const newBooking = await db.query(
          `INSERT INTO booked_tours (user_id, tour_id) VALUES ($1, $2) RETURNING *`,
          [user_id, tour_id]
        );
        res.json(newBooking.rows[0]);
      }
    async deleteBooked(req, res) {
        const bookedId = req.body.id
        try {
          const result = await db.query('DELETE FROM booked_tours WHERE id = $1', [bookedId])
          res.json(result.rows[0]);
        } catch (error) {
          console.error(error);
          res.status(500).json('Ошибка сервера');
        }
      }
      async getBooked(req, res){
        const booked = await db.query('SELECT * FROM booked_tours')
        res.json(booked.rows[0])
    }
}
module.exports = new BookedController()