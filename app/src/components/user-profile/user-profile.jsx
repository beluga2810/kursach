import { useSelector } from 'react-redux'
import style from './user-profile.module.css'
import { getProfileDate } from '../redux/profile-reducer-selector'
import { useEffect, useState } from 'react'
import { GetRequestAPI } from '../../api/api'


const ProfilePage = () => {
  let ProfileData = useSelector(getProfileDate)
  let [booked, setBooked] = useState([])
  const [TourMassive, setTourMassive] = useState([])

  useEffect(() => {
    GetRequestAPI.GetBooked().then(data => {
      let Data = data
      setBooked(Data.filter(el => +el.user_id === +ProfileData.id))
      console.log(data)
    })
  }, [])

  useEffect(() => {
    GetRequestAPI.GetAllTours('', '').then(data => {
      let Data = data
      setTourMassive(Data.filter(data => booked.some(booked => booked.tour_id === data.id)))
    })
  }, [booked])

  const toursCard = TourMassive.map(el => (
    <div className={style.card}>
      <h1 className={style.card_name}>{el.name}</h1>
      <p className={style.card_router}>Направление: {el.from_location}-{el.to_location}</p>
      <p className={style.data}>Место и дата отправления: {el.from_address}, {el.from_date}, {el.from_time}</p>
      <p className={style.description}>Забронировано</p>
    </div>
  ))

  const renderUserInfo = () => {
    return (
      <div className={style.user_info}>
        <p className={`${style.info_label} info_label`}>Имя:</p>
        <p className={`${style.info_value} info_value`}>{ProfileData.name}</p>
        <p className={`${style.info_label} info_label`}>Email:</p>
        <p className={`${style.info_value} info_value`}>{ProfileData.email}</p>
        {/* Добавьте другие поля информации о пользователе */}
      </div>
    )
  }

  return ProfileData.name && (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h1>Привет, {ProfileData.name}</h1>
          <p>Это ваш личный аккаунт, который видете только вы</p>
        </div>
        {renderUserInfo()}
        <div className={style.card_wrapper}>
          {toursCard}
        </div>
      </div>
    </section>
  )
}






export default ProfilePage