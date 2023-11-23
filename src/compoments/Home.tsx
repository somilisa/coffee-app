import React from 'react'

interface Props {
  
}

const Home = (props: Props) => {
  return (
    <section className='home'>
    <div className='header-container'>
      <nav>
        <div className='logo'>
          <img className='logo' src='./logo.png' alt='coffetto logo' />
          <p className='brand-name'> Coffetto</p>
        </div>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#steps'>Steps</a>
          </li>
          <li>
            <a href='#testimonial'>Testimonial</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className='hero'>
      <img src='./home-coffee.png' alt='home coffee' />
      <div className='home-data'>
        <h3>Exceptional Quality</h3>
        <div className='home-title'>
          <h1>
            It's time for a good coffee{' '}
            <span>
              <img src='./home_coffee_title.png' alt='' />
            </span>
          </h1>
        </div>
        <p>
          Each select coffee bean reflects our commitment to Peruvian coffee
          growers, who bring the best select coffee to your table.
        </p>
        <button>
          Get Started{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={25}
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M13.172 12.1667L8.22198 7.21669L9.63598 5.80269L16 12.1667L9.63598 18.5307L8.22198 17.1167L13.172 12.1667Z'
              fill='#2E2624'
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Home
