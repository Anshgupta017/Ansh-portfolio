import React from 'react'
import FooterLogo from '../../assets/images/Logo.png'
import { Link } from 'react-router'
// ---------Icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Magnet from '../effects/Magnet';




const Footer = () => {
  return (
    <>
      <footer className='pt-[50px] border-[#21212157] border-t-2 lg:pb-[32px] pb-[32px]'>
        <div className="container">
         <div
  id="Footer_Row"
  className='grid grid-cols-1 justify-items-center items-start sm:grid-cols-2 lg:grid-cols-4 gap-10 py-8 lg:py-[65px]'>


           
            <div id="Row_3">
              <h2 data-aos="fade-up" className='font-soldier md:text-start text-center lg:text-6xl text-5xl text-Primary mb-6'>PAGES</h2>
              <ul id='FooterLinks' className='flex md:items-start items-center flex-col gap-4 text-[#3f3f3f] font-poppins text-sm'>
               
                {/* <li data-aos="fade-up"><Link className='transition-trigger' to={'/projects'}>MY WORK</Link></li>
                <li data-aos="fade-up"> */}
  <a
    href="/Ansh_resume_sw.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-trigger"
  >
    DOWNLOAD CV
  </a>


                <li data-aos="fade-up"><Link className='transition-trigger' to={'/contact'}>CONTACT</Link></li>
              </ul>
            </div>
            <div id="Row_4">
              <h2 data-aos="fade-up" className='font-soldier md:text-start text-center lg:text-6xl text-5xl text-Primary mb-4'>CONTACT</h2>
              <div id='FooterLinks' className='flex md:items-start items-center flex-col gap-3 text-[#3f3f3f] font-poppins font-medium'>
                <div data-aos="fade-up"><Link to={'/'}>KANPUR, INDIA</Link></div>
                <div data-aos="fade-up"><Link to={'/'}>anshgupta01745@gmail.com</Link></div>
                <div data-aos="fade-up"><Link to={'/'}>+91 6307532092</Link></div>

                <div className='mt-3 flex items-center gap-7'>
                 
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a target='_blank' href='https://github.com/Anshgupta017/' aria-label="Visit my Github profile"><FaGithub className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                  <a
  target="_blank"
  href="https://www.linkedin.com/in/ansh-gupta-19342b299/"
  aria-label="Visit my Linkedin profile"
>
<FaLinkedinIn className='text-[18px] hover-brown' /></a>
                  </Magnet>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------Bottom Copyright------------------ */}
        <div className='border-t border-[#21212157] mt-10 pt-8 text-center'>
          <p className='text-sm text-second font-poppins font-light'>©2026 By Ansh | All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer