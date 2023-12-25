import { NavLink } from 'react-router-dom'
import style from './header.module.css'
import { useEffect, useState } from 'react'
import {
    UserOutlined
} from '@ant-design/icons'



const Header = () =>{

    


    return <section className={style.section}>
        <div className={style.wrapper}>
            <NavLink to={'/'}><div className={style.logotype}>
                <img src={''} alt="" />
                <h1><a>TourAgency</a></h1>
            </div></NavLink>
            <ul className={style.list}>
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