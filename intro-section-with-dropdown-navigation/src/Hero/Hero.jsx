import React from 'react'
import Styles from './Hero.module.css'
import ClientFirst from './img/client-databiz.svg'
import ClientSecond from './img/client-audiophile.svg'
import ClientThird from './img/client-meet.svg'
import ClientFourth from './img/client-maker.svg'
import HeroImg from './img/image-hero-desktop.png'

const Hero = () => {
  return (
    <div className={Styles['hero-div']}>
      <div className={Styles['leftside-hero']}>
        <section className={Styles['heroText-section']}>
          <h2 className={Styles.h2}>
            Make <br /> remote work
          </h2>
          <p className={Styles.p}>
            {' '}
            Get your team in sync, no matter your location. <br /> Streamline
            processes, create team rituals, and <br /> watch productivity soar.{' '}
          </p>
          <button className={Styles.btn}>Learn more</button>
        </section>
        <section className={Styles['client-section']}>
          <img src={ClientFirst} className={Styles['first-client']} />
          <img src={ClientSecond} className={Styles['second-client']} />
          <img src={ClientThird} className={Styles['third-client']} />
          <img src={ClientFourth} className={Styles['fourth-client']} />
        </section>
      </div>
      <div>
        <img src={HeroImg} className={Styles.heroImg} />
      </div>
    </div>
  )
}

export default Hero
