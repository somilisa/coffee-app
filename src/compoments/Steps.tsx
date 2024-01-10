import React from 'react'

interface Props {
  
}

const Steps = (props: Props) => {
  return (
    <section className='products steps' id='steps'>
    <div className='steps-container'>
      <h1> Steps of manufacturing our products</h1>
      <div className='steps-group'>
        <div className='step'>
          <div className='step-image-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={115}
              height={115}
              viewBox='0 0 115 115'
              fill='none'
            >
              <circle
                cx='57.5'
                cy='57.5'
                r={50}
                fill='#DDB66F'
                stroke='#492D26'
                strokeWidth={15}
              />
            </svg>
            <div>
              <p>01</p>
            </div>
            <img src='./steps-green-coffee.png' alt='green coffee' />
          </div>
          <p>
            Harvest occurs annually when the coffee beans reach maturity and
            are collected for processing.
          </p>
        </div>
        <div className='step'>
          <div className='step-image-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={115}
              height={115}
              viewBox='0 0 115 115'
              fill='none'
            >
              <circle
                cx='57.5'
                cy='57.5'
                r={50}
                fill='#DDB66F'
                stroke='#492D26'
                strokeWidth={15}
              />
            </svg>
            <div>
              <p>02</p>
            </div>
            <img src='./steps-coffee-beans.png' alt='coffee beans' />
          </div>
          <p>
            The beans are dried using a wet or dry technique, depending on
            the taste we want to obtain.
          </p>
        </div>
        <div className='step'>
          <div className='step-image-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={115}
              height={115}
              viewBox='0 0 115 115'
              fill='none'
            >
              <circle
                cx='57.5'
                cy='57.5'
                r={50}
                fill='#DDB66F'
                stroke='#492D26'
                strokeWidth={15}
              />
            </svg>
            <div>
              <p>03</p>
            </div>
            <img src='./steps-ground-coffee.png' alt='' />
          </div>
          <p>
            Harvest occurs annually when the coffee beans reach maturity and
            are collected for processing.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Steps
