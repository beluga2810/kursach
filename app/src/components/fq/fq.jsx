import { useState } from 'react'
import style from './fq.module.css'



const FQ = () =>{


    let [currentIndex, setCurrentIndex] = useState([false, false, false, false])



    return <section className={style.section}>
        <div className={style.wrapper}>
            <h1 className={style.name}>F&Q</h1>
            <p className={style.name_text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Iste reprehenderit provident aliquid voluptate reiciendis maiores 
                at consequatur atque sit quos ut, corporis ducimus accusantium 
                error. Accusantium officia voluptatum quidem eaque.
            </p>
            <div className={style.content}>
                <h3 onClick={() => setCurrentIndex(prevState =>{
                    let newState = [...prevState]
                    newState[0] = !newState[0]
                    return newState
                })}>Как оплатить?
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </h3>
                <p style={{display: currentIndex[0] ? 'flex' : 'none'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum officia odio dolorem magni perspiciatis deserunt 
                    enim asperiores dicta natus, obcaecati, eum nam facilis sit 
                    eos aspernatur! Cumque et quibusdam suscipit!
                </p>
            </div>
            <div className={style.content}>
                <h3 onClick={() => setCurrentIndex(prevState =>{
                    let newState = [...prevState]
                    newState[1] = !newState[1]
                    return newState
                })}>Как оплатить?
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </h3>
                <p style={{display: currentIndex[1] ? 'flex' : 'none'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum officia odio dolorem magni perspiciatis deserunt 
                    enim asperiores dicta natus, obcaecati, eum nam facilis sit 
                    eos aspernatur! Cumque et quibusdam suscipit!
                </p>
            </div>
            <div className={style.content}>
                <h3 onClick={() => setCurrentIndex(prevState =>{
                    let newState = [...prevState]
                    newState[2] = !newState[2]
                    return newState
                })}>Как оплатить?
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </h3>
                <p style={{display: currentIndex[2] ? 'flex' : 'none'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum officia odio dolorem magni perspiciatis deserunt 
                    enim asperiores dicta natus, obcaecati, eum nam facilis sit 
                    eos aspernatur! Cumque et quibusdam suscipit!
                </p>
            </div>
            <div className={style.content}>
                <h3 onClick={() => setCurrentIndex(prevState =>{
                    let newState = [...prevState]
                    newState[3] = !newState[3]
                    return newState
                })}>Как оплатить?
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </h3>
                <p style={{display: currentIndex[3]? 'flex' : 'none'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum officia odio dolorem magni perspiciatis deserunt 
                    enim asperiores dicta natus, obcaecati, eum nam facilis sit 
                    eos aspernatur! Cumque et quibusdam suscipit!
                </p>
            </div>
        </div>
    </section>
}




export default FQ