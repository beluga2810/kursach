import style from './reviews.module.css'
import { Button, Rate } from 'antd';


const Reviews = () =>{
    return <section className={style.section}>
        <div className={style.wrapper}>
            <h1 className={style.name}>Отзывы</h1>
            <p className={style.name_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Iste reprehenderit provident aliquid voluptate reiciendis maiores 
                at consequatur atque sit quos ut, corporis ducimus accusantium 
                error. Accusantium officia voluptatum quidem eaque.
            </p>
            <div className={style.content}>
                <div className={style.card}>
                    <div className={style.tittle}>
                        <h1>Rocket Skywalker</h1>
                        <Rate value={5} disabled/>
                    </div>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, 
                        consequatur optio a debitis cumque ducimus, deleniti sunt culpa 
                        maiores dicta modi, dolor pariatur amet tenetur itaque? 
                        Amet non sequi incidunt!
                    </p>
                </div>
            </div>
            <div className={style.add}>
                <div className={style.tittle}>    
                    <h1>Оставить отзыв</h1>
                    <Rate onChange={(e) => console.log(e)}/>
                </div>
                <textarea name="" id="" cols="30" rows="10" maxLength={400}></textarea>
                <div className={style.button}>Отправить</div>
            </div>
        </div>
    </section>
}




export default Reviews