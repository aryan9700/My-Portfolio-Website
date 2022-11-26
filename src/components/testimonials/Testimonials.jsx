import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper';
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data =[
  {
  avatar:AVTR1,
  name:'Varun Kumar Sao',
  review:"Beauty has differed through time, different cultures and perceptions of the world. It’s not easy to define beauty, you could say that there are “a thousand” definitions of beauty. And there are numerous degrees of each. “Beauty depends on the eye of the beholder”."
},
{
  avatar:AVTR2,
  name:'Hrishabh Shukla',
  review:"Beauty can be used to describe a vast array of things—a baby’s first laugh, a trek through the Grand Canyon, Claude Debussy’s Clair de Lune. At first glance, these so-called “beautiful” items seem disconnected. Yet oddly enough, they are all considered beautiful. So what exactly classifies an object as beautiful? "
},
{
  avatar:AVTR3,
  name:'Rupal Dewangan',
  review:"What is beauty? How do we decide who is attractive and who is not? Society is full of information telling us what is beautiful, but what fact is that information based on? The topic of beauty has been studied, analyzed and controversial for centuries. We all know the feeling you can have when you hear a beautiful song that brings joy to your heart, stand in a field of flowers that excites your eyes, or admire a face that is visually pleasing."
},
{
  avatar:AVTR4,
  name:'Dagesh Dewangan',
  review:"The perception of the ideal beauty is an arbitrary and abstract concept that is constantly being modified as a result of the times. People are influenced by the images they see in the media to determine what the ideal beauty is. The media is manipulative and deceptive in nature, and it continues to carry harmful suggestions about ideal beauty despite the concrete evidence of damaging effects to people of all ages." 
}
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container">
      {
        data.map(({avatar,name,review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial" 
               // install Swiper modules
      modules={[Navigation, Pagination]}
      spacebetween={40}
      slidesperview={1}
      navigation={{scrrowlable:true}}
      pagination={{ clickable: true }}
      >
          <div className='client__avatar'>
            <img src={avatar}/></div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
            </SwiperSlide>
          )})
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonials