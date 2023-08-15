// import logo from './logo.svg';
// import logo2 from './Assets/logo.png';

import './App.css';

function App() {
  return (
    <>
      <section className='home'>
        <div className='header-container'>
          <nav>
            <div className='logo'>
              <img className='logo' src='./logo.png' alt='coffetto logo' />
              <p className='brand-name'> Coffetto</p>
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Stelis</li>
              <li>Testimonial</li>
            </ul>
          </nav>
        </div>
        <div className='hero'>
          <img src='./home_coffee.png' alt='home coffee' />
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
      <section className='products'>
        <div className='products-container'>
          <div className='products-description'>
            <button>
              Scroll Down{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.636 9.63598L7.05 8.22198L12 13.172Z'
                  fill='white'
                />
              </svg>
            </button>
            <p>
              We strive to form deep partnerships with farmers from all over the
              world to create perspective together and form healthy working
              relationships built on trust and respect.
            </p>
          </div>
          <div className='products-group'>
            <div className='product'>
              <img src='./product_coffee_1.png' alt='' />
              <p>Classic Coffee</p>
              <p>$17.90</p>
            </div>
            <div className='product'>
              <img src='./product_coffee_2.png' alt='' />
              <p>Black Coffee</p>
              <p>$24.90</p>
            </div>
            <div className='product'>
              <img src='./product_coffee_3.png' alt='' />
              <p>Strong Coffee</p>
              <p>$32.90</p>
            </div>
          </div>
        </div>
      </section>
      <section className='about'>
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
      <section className='products steps'>
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
                <img src='./steps_green_coffee.png' alt='green coffee' />
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
                <img src='./steps_coffee_beans.png' alt='coffee beans' />
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
                <img src='./steps_ground_coffee.png' alt='' />
              </div>
              <p>
                Harvest occurs annually when the coffee beans reach maturity and
                are collected for processing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='about'>
        <div className='about-container'>
          <div className='about-group'>
            <h1>
              Coffee is the best drink in the morning, it keeps you focused.
            </h1>
            <p>John Doe</p>
          </div>
          <div className='about-description'>
            <img src='./testimonial_coffee.png' alt='testimonial coffee' />
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='footer-top'>
          <div>
            <div className='logo'>
              <img className='logo' src='/logo.png' />
              <p className='brand-name'> Coffetto</p>
            </div>
            <h1>Sign up for our newsletter</h1>
          </div>
          <div className='footer-group'>
            <form className='footer-form'>
              <input type='email' defaultValue='Enter e-mail address' />
            </form>
            <button>
              Subscribe{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={25}
                height={24}
                viewBox='0 0 25 24'
                fill='none'
              >
                <path
                  d='M13.672 12L8.72205 7.04999L10.136 5.63599L16.5 12L10.136 18.364L8.72205 16.95L13.672 12Z'
                  fill='black'
                />
              </svg>
            </button>
            <p>
              We care about your data. Read our <a>Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='social'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z'
                fill='white'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z'
                fill='white'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75097 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.3449 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.264 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
                fill='white'
              />
            </svg>
          </div>
          <p className='copyright'>
            © Copyright Bedimcode. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
