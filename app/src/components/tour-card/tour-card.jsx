import { useEffect, useId, useState } from 'react'
import style from './tour-card.module.css'
import { useLocation } from 'react-router-dom';
import { GetRequestAPI, PostRequestAPI } from '../../api/api';
import mogilev_first from '../../assets/mogilev_first.png'
import mogilev_second from '../../assets/mogilev_second.png'
import mogilev_3th from '../../assets/mogilev_3th.png'
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import { getProfileDate } from '../redux/profile-reducer-selector';


const TourCard = () =>{

    let ProfileData = useSelector(getProfileDate)

    let location = useLocation()

    let [currentSliderStep, setCurrentSliderStep] = useState(0)
    
    let id = location.pathname.slice(6)
    
    console.log(id)

    let [tour, setTour] = useState()

    useEffect(()=>{
        GetRequestAPI.GetTour(+id).then(data =>{
          setTour(data)
          console.log(data)
        })
      },[id])

    return tour && <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.content}>
                <h1 className={style.tittle}>{tour.name}</h1>
                <div className={style.slider}>
                    <div className={style.slider_img}>
                        {currentSliderStep === 0 ? <img src={mogilev_first}/> : currentSliderStep === 1 ? <img src={mogilev_second}/> : <img src={mogilev_3th}/>}
                    </div>
                    <div className={style.slider_arrows}>
                        <LeftOutlined className={style.arrow} onClick={() => {
                                !(currentSliderStep === 0) ? setCurrentSliderStep(currentSliderStep-1) : setCurrentSliderStep(2)
                            }
                        }/>
                        <RightOutlined className={style.arrow} onClick={() => {
                                !(currentSliderStep === 2) ? setCurrentSliderStep(currentSliderStep+1) : setCurrentSliderStep(0)
                            }
                        }/>
            
                    </div>
                </div>
                <p className={style.description}>
                    {tour.description}
                </p>
            </div>
            <div className={style.data}>
                <div className={style.data_data}>
                    <h1>{tour.company}</h1>
                    <p><span>Стоимость</span> : {tour.price} Br</p>
                    <p><span>Точка отправления</span> : {tour.from_address}</p>
                    <p><span>Направление</span> : {tour.to_location}</p>
                    <p><span>Дата отправления</span> : {tour.from_date}</p>
                    <p><span>Время отправления</span> : {tour.from_time}</p>
                    <p><span>Дата обратного отправления</span> : {tour.to_date}</p>
                    <p><span>Время обратного отправления</span> : {tour.to_time}</p>
                </div>
                <div className={style.button} onClick={() =>{
                    alert('Забронировано, перейдите в личный кабинет, чтобы посмотреть вашу бронь')
                    PostRequestAPI.AddBooked(ProfileData.id, tour.id)
                }}>
                    Забронировать
                </div>
            </div>
        </div>
    </section>
}

// name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport


export default TourCard