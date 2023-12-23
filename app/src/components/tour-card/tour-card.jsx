import style from './tour-card.module.css'



const TourCard = () =>{
    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.content}>
                <h1 className={style.tittle}>Минский вокзал</h1>
                <p className={style.description}>
                    Ultimate Guide to Visiting Harry Potter Studio Tour London by Warner Bros in Leavesden. 
                    An absolute must visit for Harry Potter fans in London! #whatshotblog #harrypotter #londontravel #harrypotterfan
                    Ultimate Guide to Visiting Harry Potter Studio Tour London by Warner Bros in Leavesden. 
                    An absolute must visit for Harry Potter fans in London! #whatshotblog #harrypotter #londontravel #harrypotterfan
                    Ultimate Guide to Visiting Harry Potter Studio Tour London by Warner Bros in Leavesden. 
                    An absolute must visit for Harry Potter fans in London! #whatshotblog #harrypotter #londontravel #harrypotterfan
                </p>
                <div className={style.benefits}>
                    <h2>Преимущества</h2>
                    <ul>
                        <li>Доступ к интернету во время дороги</li>
                        <li>Бесплатные шоколадные батончики</li>
                        <li>Оплаченный номер в отеле hilton</li>
                        <li>Проффесиональный гид, стрессоустойчивый</li>
                    </ul>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.data_data}>
                    <h1>ООО "ТУРМИНСК КЕПОВО"</h1>
                    <p><span>Стоимость</span> : 300 Br</p>
                    <p><span>Точка отправления</span> : Могилёв, Крыница</p>
                    <p><span>Направление</span> : Минск, вокзал</p>
                    <p><span>Дата отправления</span> : 17.01.2023</p>
                    <p><span>Время отправления</span> : 09:00</p>
                    <p><span>Дата обратного отправления</span> : 18.01.2023</p>
                    <p><span>Время обратного отправления</span> : 18:00</p>
                </div>
                <div className={style.button}>
                    Купить
                </div>
            </div>
        </div>
    </section>
}




export default TourCard