import React, { useEffect } from 'react'
// ---------Project images 
import nextonProject from '../../assets/images/Project1.jpg'
import sansaProject from '../../assets/images/sansaProject.jpg'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import noteProject from '../../assets/images/NoteAppThumb.png'
import canvixProject from '../../assets/images/CanvixThumb.png'
import python from '../../assets/images/python.svg'
// -------icons 
import { GrTechnology } from "react-icons/gr";
// -------Technologies svg 
import ReactIcon from '../../assets/images/react.svg'
import NextJsIcon from '../../assets/images/NextJsIcon.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import reduxIcon from '../../assets/images/ReduxIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import Bootstrap from '../../assets/images/BootStrapIcon.svg'
import projects2 from '../../assets/images/projects2.png'
import projects3 from '../../assets/images/projects3.png'

// -----other Import 
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { Link } from 'react-router';
// --------Aos 
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsShow = () => {
    // --------Aos Fun 
        useEffect(() => {
        AOS.init({
          duration: 800,
        });
    }, []);
    // --------Project Array 
    const MyProjects = [

        {
            'ProjectImage' : project1,
            'ProjectName' : 'Nivedita.AI',
            'Description' : 'Developed an intelligent response system capable of understanding user queries and generating context-aware replies.',
            'technologies' : [python],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://github.com/Anshgupta017/my_first_repo/blob/main/voice%20command%20project/edva.py'
        },
        {
            'ProjectImage' :'projects2',
            'ProjectName' : 'Personal Portfolio',
            'Description' : 'A modern, responsive developer portfolio built to showcase my work as a software engineer and data analyst. The site highlights selected projects, technical skills, and tools across Java, React, Node.js, and data analysis workflows',
            'technologies' : [React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite, React Router, Git, GitHub, Vercel],
            'Direction': 'lg:flex-row-reverse',
            'AosDir' : 'fade-left',
            'GithubRepo' : 'https://ansh-portfolio-q1kl.vercel.app/'
        },
        {
            'ProjectImage' : projects3,
            'ProjectName' : 'Sorting Algovisualizer',
            'Description' : 'A desktop-based Sorting Algorithm Visualizer built with JavaFX that demonstrates how popular sorting algorithms (like Bubble, Selection, Insertion, etc.) work in real time through animated bars and step-by-step transitions.',
            'technologies' : [Java, JavaFX],
            'Direction': 'lg:flex-row',
            'AosDir' : 'fade-right',
            'GithubRepo' : 'https://github.com/Anshgupta017/sorting_algovisualizers'
        },
        {
            'ProjectImage' : noteProject,
            'ProjectName' : 'Medicine Expiry & Donation Tracker',
            'Description' : 'Users can log medicines they have at home → system tracks expiry dates. Near-expiry medicines can be donated to NGOs/hospitals',
            'technologies' : [Java , Spring Boot, MySQL],
            'Direction': 'lg:flex-row-reverse',
            'AosDir' : 'fade-left',
            'GithubRepo' : 'https://github.com/Anshgupta017/Medicine_expiry_and_donation'
        }
       
    ]
  return (

    <>
        <div>
            {/* -------Project Details  */}
            <div className='flex flex-col gap-20 lg:px-12 px-[24px]'>
                {
                    MyProjects.map((items, i)=>(
                        <div key={i} className={`flex items-center ${items.Direction} flex-col lg:gap-20 gap-5`}>
                            <div className='lg:w-[640px] w-full' data-aos={`${items.AosDir}`} data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                            </div>
                            <div className='lg:w-[650px] w-full'>
                                <h2 className='font-soldier lg:text-[44px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom"/></h2>
                                <h2 className='font-poppins lg:text-[19px] text-[14px] text-Primary font-normal mb-6'><BlurText text={items.Description} delay={100} animateBy="words" direction="bottom"/></h2>
                                
                                <div className='flex items-center gap-4'>
                                    <p className='font-poppins lg:text-[19px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                                    <div className='lg:w-[30px] w-[22px] flex items-center gap-2'>
                                        {
                                            items.technologies.map((img , i)=>(
                                                <img src={img} alt='project Technologies' key={i}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='mt-7 flex items-center lg:gap-4 gap-2'>
                                   
                                    <Magnet padding={10} disabled={false} magnetStrength={5}>
                                        <a href={`${items.GithubRepo}`} target='_blank' className='DownloadCv font-poppins font-medium lg:text-base text-sm text-Primary hover-brown'>
                                            <span>LIVE LINK</span>
                                        </a>
                                    </Magnet>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ProjectsShow
