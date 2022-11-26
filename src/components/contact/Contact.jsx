import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandMeta} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tx3nwtj', 'template_fic3bsj', form.current, '6IiwI8QvmEHneRRSQ')
    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
      <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>aryankanha22202@gmail.com</h5>
        <a href="mailto:aryankanha22202@gmail.com">Send a message</a>
</article>
<article className='contact__option'>
      <TbBrandMeta className='contact__option-icon'/>
        <h4>Facebook</h4>
        <h5>aryanyadav/fb</h5>
        <a href="http://m.me/home.php">Send a message</a>
</article>
<article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+916260714397</h5>
        <a href="https://api.whatsapp.com/send?phone=+916260714397">Send a message</a>
</article>
      </div>
    
    {/* END OF CONTACT OPTION */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button type="submit" className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact