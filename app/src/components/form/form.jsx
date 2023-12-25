import style from './form.module.css'



const Forma = (props) =>{



    return <div className={style.form}>
    <div className={style.error_massage}>
        
    </div>
    <div className={style.input_field}>
        <p>Email</p>
        <input type="text" placeholder='BSU@BSU.COM'/>
    </div>
    {!props.type && <div className={style.input_field}>
        <p>NickName</p>
        <input type="text"  placeholder='BSU@BSU.COM'/>
    </div>}
    <div className={style.input_field}>
        <p>Password</p>
        <input type="text" placeholder='BSU@BSU.COM'/>
    </div>
    {!props.type ? <div className={style.button}>Регистрация</div>
    : <div className={style.button}>Войти</div>}
</div>

}



export default Forma