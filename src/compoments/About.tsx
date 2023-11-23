import React from 'react'

interface Props {
  
}

const About = (props: Props) => {
  return (
    <section className='about' id='about'>
    <div className='about-container'>
      <div className='about-description'>
        <img src='./about_coffee.png' alt='about coffee' />
      </div>
      <div className='about-group'>
        <h1>Our History</h1>
        <p>
          We make and grow the best coffee in Peru, accompanying families
          since 1930, with professional workers who harvest, collect and
          select the coffee with quality work, thus providing exquisite
          coffee to enjoy together as a family.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About
