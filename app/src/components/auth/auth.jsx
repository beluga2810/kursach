import { useState } from 'react'
import style from './auth.module.css'



const Auth = () =>{


    let [type, setType] = useState(0)



    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.tittle}>
                <h1>Регистрация</h1>
                {!type ? <p>Есть аккаунт? <span onClick={() => setType(1)}>Войти</span></p>
                : <p>Нет аккаунт? <span onClick={() =>setType(0)}>Регистрация</span></p>}
            </div>
            <div className={style.form}>
                <div className={style.error_massage}>
                    
                </div>
                <div className={style.input_field}>
                    <p>Email</p>
                    <input type="text" placeholder='BSU@BSU.COM'/>
                </div>
                {!type && <div className={style.input_field}>
                    <p>NickName</p>
                    <input type="text"  placeholder='BSU@BSU.COM'/>
                </div>}
                <div className={style.input_field}>
                    <p>Password</p>
                    <input type="text" placeholder='BSU@BSU.COM'/>
                </div>
                {!type ? <div className={style.button}>Регистрация</div>
                : <div className={style.button}>Войти</div>}
            </div>
        </div>
    </section>
}


export default Auth