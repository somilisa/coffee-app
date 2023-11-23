import React from 'react'

interface Props {
  
}

const Testimonial = (props: Props) => {
  return (
    <section className='about' id='testimonial'>
        <div className='about-container'>
          <div className='about-group'>
            <h1>
              Coffee is the best drink in the morning, it keeps you focused.
            </h1>
            <p>John Doe</p>
          </div>
          <div className='about-description'>
            <img src='./testimonial-coffee.png' alt='testimonial coffee' />
          </div>
        </div>
      </section>
  )
}

export default Testimonial
