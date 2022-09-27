import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Category from './components/Category'
import Footer from './components/Footer'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Slider />
      <Category categoryHeading="Keyboard" />
      <Category categoryHeading="Mouse" />
      <Category categoryHeading="Headphones" />
      <Footer />
    </div>
  )
}

export default Homepage