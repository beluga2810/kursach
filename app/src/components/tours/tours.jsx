import { NavLink } from 'react-router-dom';
import style from './tours.module.css'
import { Select, Space } from 'antd'
import {
  SendOutlined
} from '@ant-design/icons';


const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const Tours = () =>{
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
                <NavLink to={'/tour'}>
                  <div className={style.card}>
                    <div className={style.abs}>
                      <div>
                        Могилёв &nbsp;&nbsp;&nbsp;
                        <SendOutlined /> &nbsp;&nbsp;&nbsp;
                        Минск 
                      </div>
                      <div>300 Br</div>
                    </div>
                    <div className={style.abs_bottom}>
                      <div>Подробнее</div>
                      <div>Купить</div>
                    </div>
                    <div className={style.image}>

                    </div>
                    <div className={style.info}>
                      <div className={style.tittle}>
                        <h1 className={style.name}>Экскурсия по минскому вокзалу</h1>
                        <p>
                          Ultimate Guide to Visiting Harry Potter Studio Tour London by Warner Bros in Leavesden. 
                          An absolute must visit for Harry Potter fans in London! #whatshotblog #harrypotter #londontravel #harrypotterfan
                          Ultimate Guide to Visiting Harry Potter Studio Tour London by Warner Bros in Leavesden. 
                          An absolute must visit for Harry Potter fans in London! #whatshotblog #harrypotter #londontravel #harrypotterfan
                          Ultimate Guide to Visiting Harry Potter Studio Tour London by Warner Bros in Leavesden. 
                          An absolute must visit for Harry Potter fans in London! #whatshotblog #harrypotter #londontravel #harrypotterfan
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
            </div>
        </div>
    </section>
}



export default Tours