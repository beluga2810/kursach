const db = require('../db.js')
const { use } = require('../server.js')

class TransportController{
    async createTransport(req, res) {
        const { name, description, capacity} = req.body;
        try {
          const newTransport = await db.query(
            `INSERT INTO transport (name, description, capacity)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [name, description, capacity]
          );
      
          res.json(newTransport.rows[0]);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        }
      }
    async getTransport(req, res) {
        try {
        const transport = await db.query('SELECT * FROM transport');
        res.json(transport.rows)
        } catch (error) {
        
            console.error(error);
            res.status(500).json('Ошибка сервера');
        }
        }

     async deleteTransport(req, res) {
         const transportId = req.body.id;
            
         try {
         const result = await db.query('DELETE FROM transport WHERE id = $1', [transportId]);
         res.json(result.rows[0]);
         } catch (error) {
         console.error(error);
         res.status(500).json('Ошибка сервера');
         }
         }
 }
module.exports = new TransportController()