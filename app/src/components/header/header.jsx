import { NavLink } from 'react-router-dom'
import style from './header.module.css'
import { useEffect, useState } from 'react'
import {
    UserOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileCookie } from '../redux/profile-reducer'
import { getProfileDate } from '../redux/profile-reducer-selector'
import logo from '../../assets/travel.avif'


const Header = () =>{

    let Profile = useSelector(getProfileDate)
    let dispatch = useDispatch()

    useEffect(() =>{
        dispatch(ProfileCookie())
    }, [])

    return Profile && <section className={style.section}>
        <div className={style.wrapper}>
            <NavLink to={'/'}><div className={style.logotype}>
                <img src={logo} alt="" />
                <h1><a>TourAgency</a></h1>
            </div></NavLink>
            <ul className={style.list}>
                {Profile.status === 'admin' && <NavLink to={'/create'}><li>Создать экскурсию</li></NavLink>}
                <NavLink to={'/tours'}><li>Экскурсии</li></NavLink>
                <NavLink to={'/reviews'}><li>Отзывы</li></NavLink>
                <NavLink to={'/recomendation'}><li>Рекомендации</li></NavLink>
                <NavLink to={'/fq'}><li>F&Q</li></NavLink>
                
                <NavLink to={'/accaunt'}><li className={style.login}><UserOutlined /></li></NavLink>
            </ul>
        </div>  
        
    </section>
}
// </>

export default Header