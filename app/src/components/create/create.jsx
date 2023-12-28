import { useState } from 'react'
import style from './create.module.css'
import { PostRequestAPI } from '../../api/api'



const Create = () =>{

    let [Name, setName] = useState()
    let [Desckription, setDesckription] = useState()
    let [From, setFrom] = useState()
    let [To, setTo] = useState()
    let [Price, setPrice] = useState()
    let [Company, setCompany] = useState()
    let [FromAdress, setFromAdress] = useState()
    let [FromData, setFromData] = useState()
    let [FromTime, setFromTime] = useState()
    let [ToTime, setToTime] = useState()
    let [ToDate, setToDate] = useState()


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
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Описание</p>
                <textarea type="text" value={Desckription} onChange={(e) => setDesckription(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Компания</p>
                <textarea type="text" value={Company} onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Откуда</p>
                <input type="text" value={From} onChange={(e) => setFrom(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Куда</p>
                <input type="text" value={To} onChange={(e) => setTo(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Место подачи транспорта</p>
                <input type="text" value={FromAdress} onChange={(e) => setFromAdress(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Время отъезда туда</p>
                <input type="text" value={FromTime} onChange={(e) => setFromTime(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Дата отъезда туда</p>
                <input type="text" value={FromData} onChange={(e) => setFromData(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Время отъезда обратно</p>
                <input type="text" value={ToTime} onChange={(e) => setToTime(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Дата отъезда обратно</p>
                <input type="text" value={ToDate} onChange={(e) => setToDate(e.target.value)}/>
            </div>
            <div className={style.input_field}>
                <p>Стоимость</p>
                <input type="text" value={Price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className={style.button} onClick={() =>{
                PostRequestAPI.AddEvent(Name, Desckription, From, To, Price, Company, FromAdress, FromData, FromTime, ToTime, ToDate)
                alert('вы создали экскурсию')
            }}>Создать</div>
        </div>
    </section>
}



export default Create