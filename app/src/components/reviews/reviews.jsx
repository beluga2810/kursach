import { useEffect, useState } from 'react';
import { GetRequestAPI, PostRequestAPI } from '../../api/api';
import style from './reviews.module.css'
import { Button, Rate } from 'antd';
import { useSelector } from 'react-redux';
import { getProfileDate } from '../redux/profile-reducer-selector';


const Reviews = () =>{



    let [reviews, setReviews] = useState([])

    let [rate, setRate] = useState([])
    let [text, setText] = useState([])
    let ProfileDate = useSelector(getProfileDate)

    useEffect(()=>{
        GetRequestAPI.GetReviews().then(data =>{
        setReviews(data)
        console.log(data)
        })
      },[])
    let ReviewsCard = reviews.map(el => <div className={style.card}>
        <div className={style.tittle}>
            <h1>{el.name}</h1>
            <Rate value={el.rate} disabled/>
        </div>
        <p className={style.text}>
            {el.text}
        </p>
    </div>)
    return reviews.length > 0 && <section className={style.section}>
        <div className={style.wrapper}>
            <h1 className={style.name}>Отзывы</h1>
            <p className={style.name_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Iste reprehenderit provident aliquid voluptate reiciendis maiores 
                at consequatur atque sit quos ut, corporis ducimus accusantium 
                error. Accusantium officia voluptatum quidem eaque.
            </p>
            <div className={style.content}>
                {ReviewsCard}
            </div>
            <div className={style.add}>
                <div className={style.tittle}>    
                    <h1>Оставить отзыв</h1>
                    <Rate onChange={(e) => setRate(e)}/>
                </div>
                <textarea name="" id="" cols="30" rows="10" maxLength={400} onChange={(e) => setText(e.target.value)}></textarea>
                <div className={style.button} 
                    onClick={() =>{
                        PostRequestAPI.SendReview(rate, ProfileDate.name, text)   
                    }}
                >Отправить</div>
            </div>
        </div>
    </section>
}




export default Reviews