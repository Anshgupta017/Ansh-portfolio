import React from 'react'
import DecayCard from '../effects/DecayCard'
import ScrollFloat from '../effects/ScrollFloat'

// ---- icons import ----
import GitHub from '../../assets/images/github.png'
import SpringBoot from '../../assets/images/springIcon.svg'
import Java from '../../assets/images/javaIcon.png'
import MySQL from '../../assets/images/mysql.svg'
import PandasIcon from '../../assets/images/pandas.svg'
import MatplotlibIcon from '../../assets/images/MatplotlibIcon.svg'
import PowerBIIcon from '../../assets/images/PowerBIIcon.svg'
import ExcelIcon from '../../assets/images/ExcelIcon.svg'
import VscodeIcon from '../../assets/images/VscodeIcon.svg'
import ReactIcon from '../../assets/images/react.svg'
import NextJsIcon from '../../assets/images/NextJsIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import PythonIcon from '../../assets/images/python.svg'

export const Skills = () => {

  const skills = [
    { icon: Java, name: 'Java' },
    { icon: SpringBoot, name: 'Spring Boot' },
    { icon: PythonIcon, name: 'Python' },
    { icon: PandasIcon, name: 'Pandas' },
    { icon: MatplotlibIcon, name: 'Matplotlib' },
    { icon: PowerBIIcon, name: 'Power BI' },
    { icon: ExcelIcon, name: 'Excel' },
    { icon: HtmlIcon, name: 'HTML' },
    { icon: CssIcon, name: 'CSS' },
    { icon: JsIcon, name: 'JavaScript' },
    { icon: ReactIcon, name: 'React' },
    { icon: TailwindCss, name: 'Tailwind CSS' },
    { icon: GitHub, name: 'GitHub' },
    { icon: VscodeIcon, name: 'VS Code' },
    { icon: MySQL, name: 'My SQL'},
    {icon: NextJsIcon, name: 'Next Js'}
  ]
  return (
    <>
      <section className='md:pt-20 pt-25'>
        <div className="container">

          {/* -------- Header -------- */}
          <div className="header">

            <div className='flex items-center justify-center font-poppins text-Primary font-medium lg:text-2xl text-lg'>
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=80%'
                scrollEnd='bottom bottom-=80%'
                stagger={0.03}
              >
                MY SKILLS
              </ScrollFloat>
            </div>

            <div className='flex items-center justify-center font-soldier text-Primary font-medium lg:text-4xl text-[22px] tracking-[5px] lg:mt-5 mt-3'>
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=30%'
                scrollEnd='bottom bottom-=60%'
                stagger={0.03}
              >
                SKILLS & TECHNICAL EXPERTISE
              </ScrollFloat>
            </div>

          </div>

          {/* -------- Desktop Skills -------- */}
          <div id='SkillItems' className='mt-20 hidden lg:grid grid-cols-4 gap-10'>

            {skills.map((skill, index) => (
              <DecayCard key={index} width={180} height={120}>
                <div className='flex flex-col items-center justify-center h-full'>

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className='w-12 h-12 object-contain'
                  />

                  {/* optional: name below icon */}
                  <p className='text-sm mt-2 text-borderCol'>
                    {skill.name}
                  </p>

                </div>
              </DecayCard>
            ))}

          </div>

          {/* -------- Mobile Skills -------- */}
          <div className='mt-16 lg:hidden grid grid-cols-3 gap-6 text-center'>

            {skills.map((skill, index) => (
              <div
                key={index}
                className='border border-borderCol rounded-lg py-6 flex flex-col items-center justify-center'
              >

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='w-10 h-10 object-contain'
                />

                <p className='text-xs mt-2'>
                  {skill.name}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  )
}

export default Skills
