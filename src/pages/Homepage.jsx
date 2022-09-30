import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Category from './components/Category'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Slider />
      <Category categoryHeading="Keyboard" />
      <Category categoryHeading="Mouse" />
      <Category categoryHeading="Headphones" />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default Homepage