import React from 'react'
import AboutText from '../components/About Me/AboutText'


import AboutBan from '../components/About Me/AboutBan'
// import ExploreMyWork from '../components/common/ExploreMyWork'

const About = () => {

  return (
    <>
    <section className='my-[122px]'>
      <AboutBan/>
      <AboutText/>
      <div className='pt-[130px]'>
        {/* <ExploreMyWork/> */}
      </div>
    </section>
    </>
  )
}

export default About
