import { useEffect, useId, useState } from 'react'
import style from './tour-card.module.css'
import { useLocation } from 'react-router-dom';
import { GetRequestAPI } from '../../api/api';
import mogilev_first from '../../assets/mogilev_first.png'
import mogilev_second from '../../assets/mogilev_second.png'
import mogilev_3th from '../../assets/mogilev_3th.png'
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons'


const TourCard = () =>{

    let location = useLocation()

    let [currentSliderStep, setCurrentSliderStep] = useState(0)
    
    let id = location.pathname.slice(6)
    
    console.log(id)

    let [tour, setTour] = useState()

    useEffect(()=>{
        GetRequestAPI.GetTour(+id).then(data =>{
          setTour(data[0])
          console.log(data[0])
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
                    {tour.desckription}
                </p>
            </div>
            <div className={style.data}>
                <div className={style.data_data}>
                    <h1>{tour.company}</h1>
                    <p><span>Стоимость</span> : {tour.price} Br</p>
                    <p><span>Точка отправления</span> : {tour.fromAdress}</p>
                    <p><span>Направление</span> : {tour.to}</p>
                    <p><span>Дата отправления</span> : {tour.fromDate}</p>
                    <p><span>Время отправления</span> : {tour.fromTime}</p>
                    <p><span>Дата обратного отправления</span> : {tour.toDate}</p>
                    <p><span>Время обратного отправления</span> : {tour.toTime}</p>
                </div>
                <div className={style.button}>
                    Купить
                </div>
            </div>
        </div>
    </section>
}




export default TourCard