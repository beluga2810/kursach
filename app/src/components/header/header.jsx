import { NavLink } from 'react-router-dom'
import style from './header.module.css'
import { useEffect, useState } from 'react'




const Header = () =>{

    


    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.logotype}>
                <img src={''} alt="" />
                <h1><a>TourAgency</a></h1>
            </div>
            <ul className={style.list}>
                <NavLink to={'/tours'}><li>Экскурсии</li></NavLink>
                <li><a to='/search'>Экология</a></li>
                <li><a to='/search'>Интересные места</a></li>
                
                <li className={style.login}><a to='/accaunt'>Профиль</a></li>
            </ul>
        </div>  
        
    </section>
}
// </>

export default Header