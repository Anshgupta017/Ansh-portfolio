import React from 'react'
import DecayCard from '../effects/DecayCard'
import ScrollFloat from '../effects/ScrollFloat'

export const Skills = () => {
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

            {[
              { title: 'Java', desc: 'Core Java, OOP' },
              { title: 'Spring Boot', desc: 'REST APIs, Backend' },
              { title: 'JavaFX', desc: 'Desktop Applications' },
              { title: 'Python', desc: 'Scripting & Analysis' },
              { title: 'Pandas', desc: 'Data Cleaning & Handling' },
              { title: 'Matplotlib', desc: 'Data Visualization' },
              { title: 'Power BI', desc: 'Dashboards & Reports' },
              { title: 'Excel', desc: 'Pivot, VLOOKUP, Analysis' },
              { title: 'HTML', desc: 'Structure of Web Pages' },
              { title: 'CSS', desc: 'Styling & Layouts' },
              { title: 'JavaScript', desc: 'Logic & Interactivity' },
              { title: 'React', desc: 'SPA Development' },
              { title: 'Tailwind CSS', desc: 'Responsive UI Design' },
              { title: 'GitHub', desc: 'Version Control' },
              { title: 'VS Code', desc: 'Development Tool' },
            ].map((skill, index) => (
              <DecayCard key={index} width={180} height={120}>
                <div className='flex flex-col items-center gap-2 text-center'>
                  <p className='text-[20px] font-poppins font-medium text-Primary'>
                    {skill.title}
                  </p>
                  <p className='text-sm text-borderCol'>
                    {skill.desc}
                  </p>
                </div>
              </DecayCard>
            ))}

          </div>

          {/* -------- Mobile Skills -------- */}
          <div className='mt-16 lg:hidden grid grid-cols-2 gap-6 text-center'>
            {[
              'Java',
              'Spring Boot',
              'JavaFX',
              'Python',
              'Pandas',
              'Matplotlib',
              'Power BI',
              'Excel',
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Tailwind CSS',
              'GitHub',
              'VS Code',
            ].map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className='border border-borderCol rounded-lg py-4 font-poppins text-Primary font-medium'
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Skills
