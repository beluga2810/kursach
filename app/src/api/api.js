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

}

export const PostRequestAPI = {

}