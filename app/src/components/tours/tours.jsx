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
                <div className={style.filter_search}>
                    Поиск
                </div>
            </div>
            <div className={style.content}>

            </div>
        </div>
    </section>
}



export default Tours