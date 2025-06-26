import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Timelines from '../components/Timeline'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Timelines />
      <Newsletter />
      <Footer />
    </>
  )
}

export default About