import { useSelector } from 'react-redux'
import style from './user-profile.module.css'
import { getProfileDate } from '../redux/profile-reducer-selector'
import { useEffect, useState } from 'react'
import { GetRequestAPI } from '../../api/api'



const ProfilePage = () =>{


    let ProfileData = useSelector(getProfileDate)

    let [booked, setBooked] = useState([])

    useEffect(()=>{
        GetRequestAPI.GetBooked().then(data =>{
            setBooked(data.filter(el => +el.user_id === +ProfileData.id))
        })

    },[])
    const [TourMassive, setTourMassive] = useState([])

    useEffect(()=>{
        GetRequestAPI.GetAllTours('','').then(data =>{
            setTourMassive(data.some(el => booked.tour_id.includes(el.id)))
        })
    },[booked])

    



    let toursCard = TourMassive.map(el => <div className={style.card}>
        <h1 className={style.card_name}>
            {TourMassive.name}
        </h1>
        <p className={style.card_router}>Направление : {TourMassive.form_location}-{TourMassive.to_location}</p>
        <p className={style.data}>Место и дата отправления : {TourMassive.from_address}, {TourMassive.from_date}, {TourMassive.from_time}</p>
        <p className={style.description}>
            Забронировано
        </p>
    </div>)


    return ProfileData.name && <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.tittle}>
                <h1>Привет, {ProfileData.name}</h1>
                <p>Это ваш личный аккаунт, который видете только вы</p>
            </div>
            <div className={style.card_wrapper}>
                {toursCard}
            </div>
        </div>
    </section>
}




export default ProfilePage