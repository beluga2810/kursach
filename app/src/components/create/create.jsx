import { useState } from 'react'
import style from './create.module.css'
import { PostRequestAPI } from '../../api/api'



const Create = () =>{

    let [name, setName] = useState()
    let [description, setDesckription] = useState()
    let [from_location, setFrom] = useState()
    let [to_location, setTo] = useState()
    let [price, setPrice] = useState()
    let [company, setCompany] = useState()
    let [from_address, setFromAdress] = useState()
    let [from_date, setFromData] = useState()
    let [from_time, setFromTime] = useState()
    let [to_time, setToTime] = useState()
    let [to_date, setToDate] = useState()
    let [transport, setTransport] = useState()

    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.tittle}>
                <h1>Создать экскурсию</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate qui 
                    ipsam iusto nemo nisi ab eaque alias esse, at modi nobis optio debitis. 
                    Dolorum nobis molestiae officiis doloribus dignissimos?
                </p>
            </div>
            <div className={style.input_field}>
                <p>Название</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Описание</p>
                <textarea type="text" value={description} onChange={(e) => setDesckription(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Компания</p>
                <textarea type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Откуда</p>
                <input type="text" value={from_location} onChange={(e) => setFrom(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Куда</p>
                <input type="text" value={to_location} onChange={(e) => setTo(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Место подачи транспорта</p>
                <input type="text" value={from_address} onChange={(e) => setFromAdress(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Время отъезда туда</p>
                <input type="text" value={from_time} onChange={(e) => setFromTime(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Дата отъезда туда</p>
                <input type="text" value={from_date} onChange={(e) => setFromData(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Время отъезда обратно</p>
                <input type="text" value={to_time} onChange={(e) => setToTime(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Дата отъезда обратно</p>
                <input type="text" value={to_date} onChange={(e) => setToDate(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Стоимость</p>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Транспорт</p>
                <input type="text" value={transport} onChange={(e) => setTransport(e.target.value)}/>
            </div>
            <div className={style.button} onClick={() =>{
                PostRequestAPI.AddEvent( name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport )
                alert('вы создали экскурсию')
            }}>Создать</div>
        </div>
    </section>
}



export default Create