const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 80
const cors = require('cors')
const userRouter = require('./routes/user.routes.js')
const reviewsRouter = require('./routes/reviews.routes.js')
const toursRouter = require('./routes/tours.routes.js')
const app = express()




// let DataBase = {
//     tours: [
//         {
//             id: 0,
//             name: 'Могилёв',
//             fromm: 'Минск',
//             too: 'Могилёв',
//             price: 300,
//             desckription: 'bfrebufenibgvuebvhbqe f yugui3f er giugfiuhu',
//             company: 'ООО ТУРАГЕНСТВО',
//             fromAdress: 'Минск, Кирова 8',
//             fromData: '24.10.2023', 
//             fromTime: '18:00',
//             toDate: '25.10.1232',
//             toTime: '18:00'
//         }
//     ],
//     reviews: [
//         {
//             id: 0,
//             rate: 5,
//             name: 'Egor',
//             text: 'good tour. Suggest all my family. Lorem goovmsk kygvh giyguishily yuhgaiorhyiy gugiy ui ug yugaufehio'
//         },
//         {
//             id: 0,
//             rate: 5,
//             name: 'Vannya',
//             text: 'good tour. Suggest all my family. Lorem goovmsk kygvh giyguishily yuhgaiorhyiy gugiy ui ug yugaufehio'
//         }
//     ],
//     users: [
//         {
//             status: 'user',
//             id: 0,
//             name: 'Yani',
//             email: 'devyangyani@gmail.com',
//             password: '123qwerty123'
//         }
//     ]
// }



app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())




app.use('/api', userRouter, reviewsRouter, toursRouter)


// app.get('/tours', (req, res) =>{
//     let from = req.body.from
//     let to = req.body.to
//     let tours = DataBase.tours.filter(el => from ? el.from === from : el).filter(el => to ? el.to === to : el)
//     res.json(tours)
//     console.log(tours)
// })

// app.post('/tour', (req, res) =>{
//     let id = req.body.id
//     let tour = DataBase.tours.filter(el => +el.id === +id)
//     res.json(tour)
//     console.log(tour)
// })
// app.get('/reviews', (req, res) =>{
//     res.json(DataBase.reviews)
//     console.log(DataBase.reviews)
// })
// app.post('/sendReview', (req, res) =>{
//     let rate = req.body.rate
//     let name = req.body.name
//     let text = req.body.text
//     DataBase.reviews.push({
//         id: DataBase.reviews.length,
//         rate: rate,
//         name: name,
//         text: text
//     },)
//     res.json(DataBase.reviews)
//     console.log(DataBase.reviews)
// })
// app.post('/addEvent', (req, res) =>{
//     let Name = req.body.Name
//     let Desckription = req.body.Desckription
//     let From = req.body.From
//     let To = req.body.To
//     let Price = req.body.Price
//     let Company = req.body.Company
//     let FromAdress = req.body.FromAdress
//     let FromData = req.body.FromData
//     let FromTime = req.body.FromTime
//     let ToTime = req.body.ToTime
//     let ToDate = req.body.ToDate
//     DataBase.tours.push({
//         id: DataBase.tours.length,
//         name: Name,
//         from: From,
//         to: To,
//         price: Price,
//         desckription: Desckription,
//         company: Company,
//         fromAdress: FromAdress,
//         fromData: FromData, 
//         fromTime: FromTime,
//         toDate: ToDate,
//         toTime: ToTime
//     })
//     res.json(DataBase.tours)
//     console.log(DataBase.tours)
// })


// app.post('/reg', (req, res) =>{
//     let email = req.body.email
//     let name = req.body.name
//     let password = req.body.password
//     DataBase.users.push({
//         status: 'user',
//         id: DataBase.users.length,
//         name: name,
//         email: email,
//         password: password
//     })
//     res.json(DataBase.users)
//     console.log(DataBase.users)
// })
// app.post('/regCheck', (req, res) =>{
//     let email = req.body.email
//     let password = req.body.password
//     let user = DataBase.users.filter(el => el.email === email).filter(el => el.password === password)
//     res.json(user)
//     console.log(user)
// })

// app.get('/profile', (req, res) =>{
//     const cookieValue = req.cookies.id
//     let user = DataBase.users.filter(el => el.id === +req.cookies.id)
//     user.length < 1 && user.push({id: '', type: '', login: '', password: '', mail: ''})
//     res.json(user)
//     console.log(user.length + ' ' + cookieValue)
// })




app.listen(PORT, ()=>{
    console.log(PORT)
})




module.exports = app