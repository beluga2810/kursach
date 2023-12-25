import { NavLink } from 'react-router-dom'
import style from './header.module.css'
import { useEffect, useState } from 'react'
import {
    UserOutlined
} from '@ant-design/icons';



const Header = () =>{

    


    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.logotype}>
                <img src={''} alt="" />
                <h1><a>TourAgency</a></h1>
            </div>
            <ul className={style.list}>
                <NavLink to={'/tours'}><li>Экскурсии</li></NavLink>
                <NavLink to={'/reviews'}><li>Отзывы</li></NavLink>
                <NavLink to={'/recomendation'}><li>Рекомендации</li></NavLink>
                <NavLink to={'/fq'}><li>F&Q</li></NavLink>
                
                <li className={style.login}><a to='/accaunt'><UserOutlined /></a></li>
            </ul>
        </div>  
        
    </section>
}
// </>

export default Header