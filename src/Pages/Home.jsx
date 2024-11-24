import React from 'react'
import CustomCarousel from '../Components/HomePage/CustomCarousel'
import Categories from '../Components/HomePage/Categories'

const Home = () => {
  return (
    <div>
      <CustomCarousel />
      <div className="my-5">
        <div className=' flex justify-center' >

          <a
            href='http://www.google.com'
            className={`mt-4 text-blue-500 font-semibold site-color text-white md:p-3 px-10 rounded-full`}
          >
            Shop Now
          </a>
        </div>
      </div>
      <Categories />
    </div>
  )
}

export default Home