const db = require('../db.js')
const { use } = require('../server.js')

class ReviewsController{
    async createReview(req, res) {
        const { rate, name, text} = req.body
        const cookieValue = req.cookies.id
        try {
            const newReview = await db.query(
            'INSERT INTO reviews (rate, name, text, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [rate, name, text, cookieValue])
            res.json(newReview.rows[0])
        } catch (error) {
            console.error(error)
            res.status(500).json('Ошибка сервера')
        }
    }   
    async getReviews(req, res) {
        try {
        const reviews = await db.query('SELECT * FROM reviews');
        res.json(reviews.rows)
        } catch (error) {
        
            console.error(error);
            res.status(500).json('Ошибка сервера');
        }
        }

    async deleteReview(req, res) {
        const reviewId = req.body.id;
            
        try {
        const result = await db.query('DELETE FROM reviews WHERE id = $1', [reviewId]);
        res.json(result.rows[0]);
        } catch (error) {
        console.error(error);
        res.status(500).json('Ошибка сервера');
        }
        }
}

module.exports = new ReviewsController()