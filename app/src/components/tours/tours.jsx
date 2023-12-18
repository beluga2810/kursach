import style from './tours.module.css'
import { Select, Space } from 'antd'


const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const Tours = () =>{
    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.filter}>
                <div className={style.filter_field}>
                    <p>Откуда?</p>
                    <Select defaultValue="lucy" onChange={handleChange}  className={style.filter_select}
                        options={[
                          {
                            value: 'jack',
                            label: 'Jack',
                          },
                          {
                            value: 'lucy',
                            label: 'Lucy',
                          },
                          {
                            value: 'Yiminghe',
                            label: 'yiminghe',
                          },
                          {
                            value: 'disabled',
                            label: 'Disabled',
                            disabled: true,
                          },
                    ]}
                    />
                </div>
                <div className={style.filter_field}>   
                    <p>Куда?</p>
                    <Select defaultValue="lucy" onChange={handleChange}  className={style.filter_select}
                        options={[
                          {
                            value: 'jack',
                            label: 'Jack',
                          },
                          {
                            value: 'lucy',
                            label: 'Lucy',
                          },
                          {
                            value: 'Yiminghe',
                            label: 'yiminghe',
                          },
                          {
                            value: 'disabled',
                            label: 'Disabled',
                            disabled: true,
                          },
                    ]}/>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.card}>
                  <div className={style.abs}>
                    <div>Откуда?: Могилёв</div>
                    <div>Куда?: Могилёв</div>
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
                        </p>
                      </div>
                    </div>
                </div>
                <div className={style.card}>
                  <div className={style.abs}>
                    <div>Откуда?: Могилёв</div>
                    <div>Куда?: Могилёв</div>
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
                        </p>
                      </div>
                    </div>
                </div>
                <div className={style.card}>
                  <div className={style.abs}>
                    <div>Откуда?: Могилёв</div>
                    <div>Куда?: Могилёв</div>
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
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}



export default Tours