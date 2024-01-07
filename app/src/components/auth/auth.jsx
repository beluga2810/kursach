import { useState } from 'react'
import style from './auth.module.css'
import Forma from '../form/form'



const Auth = () =>{


    let [type, setType] = useState(0)



    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.tittle}>
                <h1>Регистрация</h1>
                {!type ? <p>Есть аккаунт? <span onClick={() => setType(1)}>Войти</span></p>
                : <p>Нет аккаунта? <span onClick={() =>setType(0)}>Регистрация</span></p>}
            </div>
            <Forma type = {type}/>
        </div>
    </section>
}


export default Auth