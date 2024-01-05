import axios from 'axios'



const instanse = axios.create({
    baseURL: 'http://localhost/',
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
    },
})



export const GetRequestAPI = {
    GetAllTours(from, to) {
        return instanse.get('/tours', {from, to}).then(Response => {
            return Response.data
        })
    },
    GetTour(id) {
        return instanse.post('/tour', {id}).then(Response => {
            return Response.data
        })
    },
    GetReviews() {
        return instanse.get('/api/reviews').then(Response => {
            return Response.data
        })
    },
    GetProfile(){
        return instanse.get('profile').then(Response =>{
            return Response.data
        })
    }
   
}

export const PostRequestAPI = {
    Registration(email, password, name){
        return instanse.post('/reg', { email, password, name }).then(Response => {
            return Response.data 
        })
    },
    AuthCheck(email, password){
        return instanse.post('/regCheck', { email, password}).then(Response => {
            return Response.data 
        })
    },
    SendReview(rate, name, text){
        return instanse.post('/sendReview', { rate, name, text }).then(Response => {
            return Response.data 
        })
    },
    AddEvent(Name, Desckription, From, To, Price, Company, FromAdress, FromData, FromTime, ToTime, ToDate){
        return instanse.post('/addEvent', { Name, Desckription, From, To, Price, Company, FromAdress, FromData, FromTime, ToTime, ToDate }).then(Response => {
            return Response.data 
        })
    },
}