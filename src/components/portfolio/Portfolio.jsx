import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard and Financial Visualization',
    github:'https://github.com/aryan9700/reactapp.git',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id:2,
    image:IMG2,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/aryan9700/reactapp.git',
    demo:'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:3,
    image:IMG3,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/aryan9700/reactapp.git',
    demo:'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboards-UI-kit-for-data-design-web-apps'
  },
  {
    id:4,
    image:IMG4,
    title:'Maintaining tasks and tracking progress',
    github:'https://github.com/aryan9700/reactapp.git',
    demo:'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id:5,
    image:IMG5,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/aryan9700/reactapp.git',
    demo:'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:6,
    image:IMG6,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/aryan9700/reactapp.git',
    demo:'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },]
  const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h5> My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>)})
                }
            
        </div>
      </section>
    )
  }
  
  export default Portfolio
    // return (
    //   <section id='portfolio'>
    //   <h5> My Recent Work</h5>
    //   <h2>Portfolio</h2>
    //   <div className='portfolio__container'>
//const Portfolio = () => {
  // return (
  //   <section id='portfolio'>
  //   <h5> My Recent Work</h5>
  //   <h2>Portfolio</h2>
  //   <div className='portfolio__container'>
  //   <article className='portfolio__item'>
  //   <div className='portfolio__item-image'>
  //   <img src={IMG1} alt="" />
  //   </div>
  //   <h3>Crypto Currency Dashboard & Financial Visualization</h3>
  //   <div className='portfolio__item-cta'>
  //   <a href="https://github.com/aryan9700/reactapp.git" className='btn'>Github</a>
  //   <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
  //   </div>
  //   </article>
  //   <article className='portfolio__item'>
  //   <div className='portfolio__item-image'>
  //   <img src={IMG2} alt="" />
  //   </div>
  //   <h3></h3>
  //   <div className='portfolio__item-cta'>
  //   <a href="https://github.com/aryan9700/reactapp.git" className='btn'>Github</a>
  //   <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a></div>
  //   </article>
  //   <article className='portfolio__item'>
  //   <div className='portfolio__item-image'>
  //   <img src={IMG3} alt="" />
  //   </div>
  //   <h3>This is a Portfolio item title</h3>
  //   <div className='portfolio__item-cta'>
  //   <a href="https://github.com/aryan9700/reactapp.git" className='btn'>Github</a>
  //   <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
  //   </div>
  //   </article>
  //   <article className='portfolio__item'>
  //   <div className='portfolio__item-image'>
  //   <img src={IMG4} alt="" />
  //   </div>
  //   <h3>This is a Portfolio item title</h3>
  //   <div className='portfolio__item-cta'>
  //   <a href="https://github.com/aryan9700/reactapp.git" className='btn'>Github</a>
  //   <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
  //   </div>
  //   </article>
  //   <article className='portfolio__item'>
  //   <div className='portfolio__item-image'>
  //   <img src={IMG5} alt="" />
  //   </div>
  //   <h3>This is a Portfolio item title</h3>
  //   <div className='portfolio__item-cta'>
  //   <a href="https://github.com/aryan9700/reactapp.git" className='btn'>Github</a>
  //   <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
  //   </div>
  //   </article>
  //   <article className='portfolio__item'>
  //   <div className='portfolio__item-image'>
  //   <img src={IMG6} alt="" />
  //   </div>
  //   <h3>This is a Portfolio item title</h3>
  //   <div className='portfolio__item-cta'>
  //   <a href="https://github.com/aryan9700/reactapp.git" className='btn'>Github</a>
  //   <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
  //   </div>
  //   </article>

  //   </div>
  //  </section>
  //)
//}

