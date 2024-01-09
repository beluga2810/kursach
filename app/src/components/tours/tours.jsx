import { NavLink } from 'react-router-dom';
import style from './tours.module.css'
import { Select, Space } from 'antd'
import {
  SendOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { GetRequestAPI } from '../../api/api';






const Tours = () =>{
  
  
  const [TourMassive, setTourMassive] = useState([])
  useEffect(()=>{
    GetRequestAPI.GetAllTours('','').then(data =>{
      setTourMassive(data)
    })
  },[])
  let [SearchText, setSearchText] = useState('')
  
  let [from, setFrom] = useState('')
  let [to, setTo] = useState('')
  const handleChangeFrom = (value) => {
    setFrom(value)
  }
  const handleChangeTo = (value) => {
    setTo(value)
  }
  // name, from_location, to_location, price, description, company, from_address, from_date, from_time, to_date, to_time, transport 
  const ToursCard = TourMassive.filter(el => from ? el.from_location === from : el).filter(el => el.name.includes(SearchText)).filter(el => to ? el.to_location === to : el).map(el =><NavLink to={`/tour/${el.id}`}>
  <div className={style.card}>
    <div className={style.abs}>
      <div>
        {el.from_location} &nbsp;&nbsp;&nbsp;
        <SendOutlined /> &nbsp;&nbsp;&nbsp;
        {el.to_location}
      </div>
      <div>{el.price} Br</div>
    </div>
    <div className={style.abs_bottom}>
      <div>Подробнее</div>
      <div>Забронировать</div>
    </div>
    <div className={style.image}>

    </div>
    <div className={style.info}>
      <div className={style.tittle}>
        <h1 className={style.name}>{el.name}</h1>
        <p>
          {el.description}
        </p>
      </div>
    </div>
  </div>
</NavLink>)

    return <section className={style.section}>
        <div className={style.wrapper}>
            <input value={SearchText} className={style.SearchText} type="text" placeholder='Введите название тура' onChange={(e) => setSearchText(e.target.value)} />
            <div className={style.filter}>
                <div className={style.filter_field}>
                    <p>Откуда?</p>
                    <Select defaultValue="не выбрано" onChange={handleChangeFrom}  className={style.filter_select}
                        options={[
                          {
                            value: 'Брест',
                            label: 'Брест',
                          },
                          {
                            value: 'Витебск',
                            label: 'Витебск',
                          },
                          {
                            value: 'Гомель',
                            label: 'Гомель',
                          },
                          {
                            value: 'Гродно',
                            label: 'Гродно',
                          },
                          {
                            value: 'Минск',
                            label: 'Минск',
                          },
                          {
                            value: 'Могилёв',
                            label: 'Могилёв',
                          },
                    ]}
                    />
                </div>
                <div className={style.filter_field}>   
                    <p>Куда?</p>
                    <Select defaultValue="не выбрано" onChange={handleChangeTo}  className={style.filter_select}
                        options={[
                          {
                            value: 'Брест',
                            label: 'Брест',
                          },
                          {
                            value: 'Витебск',
                            label: 'Витебск',
                          },
                          {
                            value: 'Гомель',
                            label: 'Гомель',
                          },
                          {
                            value: 'Гродно',
                            label: 'Гродно',
                          },
                          {
                            value: 'Минск',
                            label: 'Минск',
                          },
                          {
                            value: 'Могилёв',
                            label: 'Могилёв',
                          },
                    ]}/>
                </div>
            </div>
            <div className={style.content}>
              {ToursCard}
            </div>
        </div>
    </section>
}



export default Tours