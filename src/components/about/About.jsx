import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
          <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am a highly competent software developer with 2 years' experience
           developing a wide range of website and tools Apps for a range of clients. I have 
           proven expertise in E-Commerce, personal , Professional, website and Apps. I understand the 
           project lifecycle in depth and am very capable at all aspects of development from project 
           planning to requirements gathering through to writing and testing code, creating documentation
           and support. I am currently seeking long-term contract positions which will allow me to further
           improve my project management skills.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About