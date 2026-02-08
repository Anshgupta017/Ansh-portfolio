import React from 'react'
import { Link, useNavigate } from 'react-router'
import { LuDot } from "react-icons/lu"
import Magnet from '../effects/Magnet'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleProjectsClick = () => {
    // Step 1: go to home page
    navigate('/')

    // Step 2: wait for DOM, then scroll
    setTimeout(() => {
      const section = document.getElementById('projects')
      section?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 300)
  }

  return (
    <>
      <nav className='py-5 hidden lg:block'>
        <div className="container">
          <div id='NavRow' className='flex items-center justify-between'>

            {/* ----NavLinks---- */}
            <div>
              <ul className='font-soldier flex items-center gap-6 text-2xl text-Primary'>

                <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1400">
                  <Link to='/' className='flex items-center NavLinks hover-brown transition-trigger'>
                    HOME<LuDot />
                  </Link>
                </li>

                <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1600">
                  <Link to='/about' className='flex items-center NavLinks hover-brown transition-trigger'>
                    ABOUT<LuDot />
                  </Link>
                </li>

                {/* ✅ PROJECTS – smooth scroll */}
                <li
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-delay="1800"
                  onClick={handleProjectsClick}
                  className='flex items-center NavLinks hover-brown transition-trigger cursor-pointer'
                >
                  PROJECTS<LuDot />
                </li>

                <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="2000">
                  <Link to='/contact' className='flex items-center NavLinks hover-brown transition-trigger'>
                    CONTACT<LuDot />
                  </Link>
                </li>

              </ul>
            </div>

            {/* ----Button---- */}
            <Magnet magnetStrength={2} padding={20}>
              <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="2200">
                <Link
                  to='/contact'
                  className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this transition-trigger'
                >
                  CONTACT
                </Link>
              </div>
            </Magnet>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
