const db = require('../db.js')
const { use } = require('../server.js')




class UserController{
    async createUser(req, res){
        const {email, name, password} = req.body
        const newUser = await db.query(`INSERT INTO users (email, name, password, status) values ($1, $2, $3, $4) RETURNING *`, [email, name, password, 'user'])
        res.json(newUser.rows[0])
        console.log(email, name, password)
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const {email, password} = req.body
        try { 
            const user = await db.query(`SELECT * FROM users WHERE (email) = ($1) AND (password) = ($2)`, [email, password])        
            res.json(user.rows[0])
        } catch (error) {
            console.error(error);
            res.json({error : 'Пользователь не найден'})
        }
    }
    async getAuthUser(req, res){
        const cookieValue = req.cookies.id
        let initProfile = {
            status: '',
            id: '',
            email: '',
            name: '',
            password: '',
        }
        try {
            const user = await db.query('SELECT * FROM users WHERE (id) = ($1)', [cookieValue])
            user.rowCount === 0 ? res.json(initProfile) : res.json(user.rows[0])

        } catch (error) {
        console.error(error);
        res.json(initProfile)
      }
    }
    async updateUser(req, res){
        const cookieValue = req.cookies.id
        const name = req.body.name
        const user = await db.query('UPDATE users SET name = $1 WHERE id = $2', [name, cookieValue])
        const users = await db.query(`SELECT * FROM users WHERE (id) = ($1)`, [cookieValue])  
        res.json(users.rows[0])
    }
    async deleteUser(req, res) {
        const userId = req.body.id
        try {
          const result = await db.query('DELETE FROM users WHERE id = $1', [userId])
          res.json(result.rows[0]);
        } catch (error) {
          console.error(error);
          res.status(500).json('Ошибка сервера');
        }
      }
}
module.exports = new UserController()