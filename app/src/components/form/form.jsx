import { useEffect, useState } from 'react'
import style from './form.module.css'
import { PostRequestAPI } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetProfile } from '../redux/profile-reducer'
import { getProfileDate } from '../redux/profile-reducer-selector'


const Forma = (props) =>{

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')



    let dispatch = useDispatch()
    let navigate = useNavigate()



    let ProfileData = useSelector(getProfileDate)

    useEffect(()=>{
        ProfileData.name && navigate('/profile')
    }, [ProfileData])
    
    return <div className={style.form}>
    <div className={style.error_massage}>
        
    </div>
    <div className={style.input_field}>
        <p>Email</p>
        <input type="text" placeholder='BSU@BSU.COM' onChange={(e) => setEmail(e.target.value)}/>
    </div>
    {!props.type && <div className={style.input_field}>
        <p>NickName</p>
        <input type="text"  placeholder='BSU@BSU.COM' onChange={(e) => setName(e.target.value)}/>
    </div>}
    <div className={style.input_field}>
        <p>Password</p>
        <input type="text" placeholder='BSU@BSU.COM' onChange={(e) => setPassword(e.target.value)}/>
    </div>
    {!props.type ? <div className={style.button} onClick={() =>{
        PostRequestAPI.Registration(email, password, name).then(data =>{
            dispatch(SetProfile(data))
            setTimeout(()=>navigate('/'), 500)
        })
        
    }}>Регистрация</div>
    : <div className={style.button} onClick={() =>{
        PostRequestAPI.AuthCheck(email, password).then(data =>{
            if(data.error){
                alert(data.error)
                console.log(data)
            } 
            else{
                data.status && dispatch(SetProfile(data))
                data.status && setTimeout(()=>navigate('/'), 500)
            }
        })
        
        
    }}>Войти</div>}
</div>

}



export default Forma