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
        return instanse.get('api/tours', {from, to}).then(Response => {
            return Response.data
        })
    },
    GetTour(id) {
        return instanse.post('api/tour', {id}).then(Response => {
            return Response.data
        })
    },
    GetReviews() {
        return instanse.get('/api/reviews').then(Response => {
            return Response.data
        })
    },
    GetProfile(){
        return instanse.get('/api/user/auth').then(Response =>{
            return Response.data
        })
    }
   
}

export const PostRequestAPI = {
    Registration(email, password, name){
        return instanse.post('/api/users', { email, password, name }).then(Response => {
            return Response.data 
        })
    },
    AuthCheck(email, password){
        return instanse.post('/api/user', { email, password}).then(Response => {
            return Response.data 
        })
    },
    SendReview(rate, name, text){
        return instanse.post('/api/reviews', { rate, name, text }).then(Response => {
            return Response.data 
        })
    },
    AddEvent( name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport ){
        return instanse.post('/api/tour/create', { name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport }).then(Response => {
            return Response.data 
        })
    },
}