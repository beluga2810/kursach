import { useEffect, useState } from 'react'
import style from './banner.module.css'


const Banner = () =>{

    let [CurrentRainbowPalette, setCurrentRainbowPalette] = useState(0)

    let [RainbowTextAttributeMassive, setRainbowTextAttributeMassive] = useState(['Брест ', 'Витебск ', 'Гомель ', 'Гродно ', 'Минск ', 'Могилёв ', ])

    let [RainbowTextMassive, setRainbowTextMassive] = useState(`${RainbowTextAttributeMassive[0]}`)


    
    let RainbowText = RainbowTextMassive.split('').map((el, index) => (
        <span key={index} style={{color: CurrentRainbowPalette === 0 ? 
            `rgb(${70 + 10 * index}, 80, 160)` : CurrentRainbowPalette === 1 ? 
            `rgb(70, ${80 + 10 * index}, 160)` : CurrentRainbowPalette === 2 ? 
            `rgb(70, 80, ${160 + 10 * index})` : undefined
        }}>
            {el}
        </span>
    ))


    
    useEffect(() => {
        let index = 0
        let charIndex = 0
        let isDeleting = false
        
        let intervalId = setInterval(() => {
            
            
            if (charIndex < RainbowTextAttributeMassive[index].length && !isDeleting) {
                setRainbowTextMassive(`${RainbowTextAttributeMassive[index].substring(0, charIndex + 1)}`)
                charIndex++
                
            } else {
                isDeleting = true
                setRainbowTextMassive(`${RainbowTextAttributeMassive[index].substring(0, charIndex - 1)}`)
                charIndex--
                if (charIndex === 0) {
                    isDeleting = false
                    index = (index + 1) % RainbowTextAttributeMassive.length
                }
            }
        }, 200)
      
        return () => clearInterval(intervalId)
    }, [ RainbowTextAttributeMassive ])
    


    let [DeleteAnimation, setDeleteAnimation] = useState(false)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setDeleteAnimation(prevState => !prevState)
        }, 500)

        return () => clearInterval(intervalId)
    }, [])







    return <section className={style.section}>
        <div className={style.wrapper}>
            <div className={style.tittle}>
                <h1>
                    Открой для себя Беларусь с новой стороны
                </h1>
                <div className={style.RainbowAnimationContainer}>
                    <span className={style.RainbowText}>{RainbowText}</span>
                    <div className={style.DeleteCursor} style={DeleteAnimation ? {opacity: 0} : {opacity: 1}}></div>
                </div>
                <p>Туристические поездки по всем городам Беларуси вместе с TourAgency.by</p>
                <button>Поиск работы</button>
            </div>
        </div>  

        
    </section>
}
// </>

export default Banner