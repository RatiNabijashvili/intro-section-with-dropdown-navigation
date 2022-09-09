import React from 'react'
import Styles from './Navbar.module.css'
import Logo from './NavBarImgs/logo.svg'
import ArrowIconDown from './NavBarImgs/icon-arrow-down.svg'
import ArrowIconUp from './NavBarImgs/icon-arrow-up.svg'
import TodoIcon from './NavBarImgs/icon-todo.svg'
import CalendarIcon from './NavBarImgs/icon-calendar.svg'
import RemindersIcon from './NavBarImgs/icon-reminders.svg'
import PlanningIcon from './NavBarImgs/icon-planning.svg'

const Features = () => {
  let arrow = document.getElementById('features-arrow')
  let featuresDropDown = document.getElementById('features-dropDown')

  if (arrow.src.match(ArrowIconDown)) {
    arrow.src = ArrowIconUp
    featuresDropDown.style.display = 'block'
  } else {
    arrow.src = ArrowIconDown
    featuresDropDown.style.display = 'none'
  }
}

const Company = () => {
  let arrow = document.getElementById('company-arrow')
  let companyDropDown = document.getElementById('company-dropDown')

  if (arrow.src.match(ArrowIconDown)) {
    arrow.src = ArrowIconUp
    companyDropDown.style.display = 'block'
  } else {
    arrow.src = ArrowIconDown
    companyDropDown.style.display = 'none'
  }
}

const Navbar = () => {
  return (
    <div className={Styles['main-div']}>
      <div className={Styles['leftside-nav']}>
        <img src={Logo} className={Styles.logo} />
        <section>
          <ul>
            <section className={Styles['features-section']}>
              <div>
                <DropDownNav
                  name='Features'
                  event={Features}
                  id='features-arrow'
                />
              </div>
              <div
                className={Styles['features-dropDown']}
                id='features-dropDown'
              >
                <ul className={Styles.ul}>
                  <DropDownElement
                    name='Todo List'
                    img={TodoIcon}
                    style='img'
                  />
                  <DropDownElement
                    name='Calendar'
                    img={CalendarIcon}
                    style='img'
                  />
                  <DropDownElement
                    name='Reminders'
                    img={RemindersIcon}
                    style='img'
                  />
                  <DropDownElement
                    name='Planning'
                    img={PlanningIcon}
                    style='img'
                  />
                </ul>
              </div>
            </section>
            <section className={Styles['company-section']}>
              <div>
                <DropDownNav
                  name='Company'
                  event={Company}
                  id='company-arrow'
                />
              </div>
              <div className={Styles['company-dropDown']} id='company-dropDown'>
                <ul className={Styles.ul}>
                  <DropDownElement name='History' />
                  <DropDownElement name='Our Team' />
                  <DropDownElement name='Blog' />
                </ul>
              </div>
            </section>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </section>
      </div>
      <div className={Styles['rightside-nav']}>
        <h2 className={Styles.h2}>Login</h2>
        <button className={Styles.btn}>Register</button>
      </div>
    </div>
  )
}

const DropDownNav = (props) => {
  return (
    <div className={Styles['component-div']}>
      <li className={Styles['component-li']} onClick={props.event}>
        {props.name}
      </li>
      <img
        src={ArrowIconDown}
        className={Styles['component-img']}
        id={props.id}
      />
    </div>
  )
}

const DropDownElement = (props) => {
  return (
    <div className={Styles['li-div']}>
      <img src={props.img} className={Styles[props.style]} />
      <li className={Styles.li}>{props.name}</li>
    </div>
  )
}

export default Navbar
