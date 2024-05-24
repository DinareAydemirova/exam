import React from 'react'
import style from './hero.module.scss'

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.container}>
      <div className={style.texts}>
      <div>
       <p>FRESG FLOWER & GIFT SITE</p>
        <span>Making beatiful flowers is a part of your life</span>
       </div>
      <button>SHOP NOW</button>
       
      </div>
      </div>
    </div>
  )
}

export default Hero