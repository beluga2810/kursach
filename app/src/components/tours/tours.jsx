import { NavLink } from 'react-router-dom';
import style from './tours.module.css'
import { Select, Space } from 'antd'
import {
  SendOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { GetRequestAPI } from '../../api/api';


const handleChange = (value) => {
  console.log(`selected ${value}`);
};



const Tours = () =>{
  

  const [TourMassive, setTourMassive] = useState([])
  useEffect(()=>{
    GetRequestAPI.GetAllTours('','').then(data =>{
      setTourMassive(data)
    })
  },[])

  const ToursCard = TourMassive.map(el =><NavLink to={`/tour/${el.id}`}>
  <div className={style.card}>
    <div className={style.abs}>
      <div>
        {el.from} &nbsp;&nbsp;&nbsp;
        <SendOutlined /> &nbsp;&nbsp;&nbsp;
        {el.to}
      </div>
      <div>{el.price} Br</div>
    </div>
    <div className={style.abs_bottom}>
      <div>Подробнее</div>
      <div>Купить</div>
    </div>
    <div className={style.image}>

    </div>
    <div className={style.info}>
      <div className={style.tittle}>
        <h1 className={style.name}>{el.name}</h1>
        <p>
          {el.desckription}
        </p>
      </div>
    </div>
  </div>
</NavLink>)

    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.filter}>
                <div className={style.filter_field}>
                    <p>Откуда?</p>
                    <Select defaultValue="не выбрано" onChange={handleChange}  className={style.filter_select}
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
                    <Select defaultValue="не выбрано" onChange={handleChange}  className={style.filter_select}
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