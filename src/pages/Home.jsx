import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import Overview from '../components/Overview'
import Project from '../components/Project'
import DesignComponent from '../components/DesignComponent'
import DiscoverPhaseComponent from '../components/DiscoverPhaseComponent'
import Analysis from '../components/Analysis'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full'>
          <Nav />
        <div>
          <HeroSection/>
          <Overview/>
          <Project />
          <DesignComponent/>
          <DiscoverPhaseComponent/>
          <Analysis />
          <Footer/>
        </div>
    </div>
  )
}

export default Home