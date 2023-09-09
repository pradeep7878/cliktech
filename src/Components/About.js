import React from 'react';
import webdev from '../Images/web-development.jpg';
import Same from './Same';


const About = () => {
  return (
    <>
      <Same
          title='About Us'
          text='We are a premium web development company in Chennai with extensive experience in delivering a wide range of projects for clients across the world. From one-page to 1000+ page websites, WooCommerce, and content sites, our highly-experienced development team provides solutions compatible with diverse business requirements.Our job doesn’t end with building websites – as one of the best SEO companies in Chennai, we believe websites are your brand’s window to the world. A dynamic website helps you adapt to market conditions and builds trust in the business.'
          button ='Read More'
          img = {webdev}
      />
    </>
  )
}

export default About;