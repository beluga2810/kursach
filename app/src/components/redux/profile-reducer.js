import { GetRequestAPI } from "../../api/api"
import { SetCookie } from "../../setcookiefunction"

let AUTH = 'AUTH'


let initialState = {
    Profile: {
        status: '',
        id: '',
        email: '',
        name: '',
        password: '',
    }
}



const ProfileReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'AUTH' : {
            let newState = {...state}
            newState.Profile = {...state.Profile}
            newState.Profile = action.profile
            console.log(action.profile)
            return newState
            
        }

        default: return state
    }
}



export const auth = (profile) =>({type: AUTH, profile})


export const SetProfile = (profile) => (dispatch) =>
{
    console.log('thunkCreatore SetProfile was called')
        dispatch(auth(profile))
        SetCookie(profile.id)

        // console.log('thunkCreatore SetProfile was called', 'ProfileCredits' + ' ' + data[0])
}
export const ProfileCookie = () => (dispatch) =>
{
    console.log('thunkCreatore ProfileCookie was called')
    GetRequestAPI.GetProfile().then(data =>{
        console.log(data)
        dispatch(auth(data))
    })
}

export default ProfileReducer