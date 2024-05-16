import React from 'react'
import Carousel from './Carousel'
import Book from './Book'
import About from './About'
import Rooms from './Rooms'
import Service from './Service'
import Sliders from './Sliders'
import Team from './Team'


const Home = () => {
  return (
    <div>
    <Carousel/>
    <Book/>
    <About/>
    <Rooms/>
    <Service/>
    <Sliders/>
    <Team/>
    </div>
  )
}

export default Home