import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.PNG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <Header>
      <div className="container.header__container">
        <h5>Hello I'm</h5>
        <h1>Aryan Yadav</h1>
        <h5 classNmae="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </Header>
  )
}

export default Header