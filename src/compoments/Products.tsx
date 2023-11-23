import React from 'react'

interface Props {
  
}

const Products = (props: Props) => {
  return (
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
              <img src='./product-coffee-1.png' alt='' />
              <p>Classic Coffee</p>
              <p>$17.90</p>
            </div>
            <div className='product'>
              <img src='./product-coffee-2.png' alt='' />
              <p>Black Coffee</p>
              <p>$24.90</p>
            </div>
            <div className='product'>
              <img src='./product-coffee-3.png' alt='' />
              <p>Strong Coffee</p>
              <p>$32.90</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Products
