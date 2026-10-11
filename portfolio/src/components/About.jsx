import { useState } from 'react'
import Button from './Button'
import Drawer from '@mui/material/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Reveal from './Reveal'
import { featuredCerts, certs, educs, exps } from '../data/about'

// Badge-led cards for headline certifications, followed by the plain list of older ones
const sizes = {
  lg: { badge: 'w-[72px] h-[72px]', name: 'text-[18px]', meta: 'text-[14px]', list: 'text-[18px]' },
  md: { badge: 'w-16 h-16', name: 'text-base', meta: 'text-[13px]', list: 'text-base' },
  sm: { badge: 'w-14 h-14', name: 'text-sm', meta: 'text-xs', list: 'text-xs' },
}

const CertList = ({ size }) => {
  const s = sizes[size]
  return (
    <>
      <div className='flex flex-col gap-3 mb-[16px]'>
        {featuredCerts.map((cert) => (
          <a
            key={cert.code}
            href={cert.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-4 p-3 rounded-xl border border-bluePrimary bg-primary/40 transition-colors duration-200 hover:border-blueSecondary hover:bg-bluePrimary/30'
          >
            <img src={cert.image} alt={`${cert.name} badge`} className={`${s.badge} shrink-0 object-contain transition-transform duration-300 group-hover:scale-105`} />
            <div className='flex flex-col min-w-0'>
              <span className={`dm-sans-text-bold text-blueSecondary leading-snug ${s.name}`}>{cert.name}</span>
              <span className={`font-DM-text text-lightGray ${s.meta}`}>{cert.code} · {cert.issuer} · {cert.date}</span>
              <span className={`font-DM-text text-blueSecondary underline-offset-2 group-hover:underline ${s.meta}`}>Verify on Credly ↗</span>
            </div>
          </a>
        ))}
      </div>
      <ul className='mb-[16px] list-inside list-disc'>
        {certs.map((cert, index) => (
          <li key={index} className={`font-DM-text text-lightGray ${s.list}`}>
            {cert}
          </li>
        ))}
      </ul>
    </>
  )
}


const About = () => {
  const [drawer, setDrawer] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(true)

  const toggleDrawer = () => {
    if (!drawer) setShowScrollHint(true)
    setDrawer(!drawer)
  }

  // Hide the "scroll for more" hint once the drawer list is scrolled near the bottom
  const handleDrawerScroll = (e) => {
    const el = e.currentTarget
    setShowScrollHint(el.scrollHeight - el.scrollTop - el.clientHeight > 40)
  }

  return (
    <div className='h-max flex relative justify-center items-center bg-primary max-w-[2800px] mx-auto w-full'>
      {/* Desktop */}
      <div className='hidden lg:flex w-full bg-primary justify-center relative'>
        {/* Certifications and Education */}
        <div className='self-stretch bg-white w-[35%] px-[39px] pt-[51px] pb-[58px]'>
          {/* Certifications */}
          <Reveal variant='left' className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[32px] mb-[9px]'>Certifications</h1>
            <CertList size='lg' />
          </Reveal>

          {/* Education */}
          <Reveal variant='left' delay={150} className='flex flex-col mt-[51px]'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[32px] mb-[9px]'>Education</h1>
            <div className='mb-[16px] list-inside list-disc'>
              {educs.map((educ, index) => (
                <div key={index} className='flex flex-col'>
                  <div className='dm-sans-text-xl text-[18px] text-lightGray'>
                    {educ.level}
                  </div>
                  <div className='dm-sans-text-regular text-[18px] text-lightGray'>
                    {educ.schoolName}
                  </div>
                  <ul className='font-DM-text text-lightGray list-inside list-disc mb-[20px] text-[18px]'>
                  {educ.courses.map((course, index) => (
                    <li key={index} className='pl-4'>
                      {course}
                    </li>
                  ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Experience */}
        <div className='w-[65%] relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
          <div className='flex flex-col'>
            <Reveal as='h1' variant='right' className='dm-serif-display-regular-italic text-blueSecondary text-[32px] mb-[16px]'>Experience</Reveal>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <Reveal key={index} delay={index * 140}>
                <div className='border border-lightGray'/>
                <div className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-[18px] text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-[18px] dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[18px] text-lightGray mt-2 line-height-28'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='line-height-28 text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <div className='border border-lightGray'/>
            </div>
          </div>
            {/* View more button */}
            <Reveal className='flex justify-center mt-10 mb-[51px]'>
              <Button onClick={toggleDrawer} variant={'primary'} className={'w-[200px] flex justify-center text-lg text-nowrap'}>
                View More
              </Button>
            </Reveal>
        </div>
      </div>

      {/* Tablet */}
      <div className='hidden w-full sm:flex lg:hidden bg-primary min-h-[1200px] flex-col justify-center  relative'>
        {/* Experience */}
        <div className='relative h-full pt-4 flex flex-1 flex-col p-5'>
          <div>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-2xl mb-[16px]'>Experience</h1>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <div key={index}>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-base text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-base dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[12px] text-lightGray mt-2'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className='border border-lightGray'/>
            </div>
          </div>
          {/* View more button */}
          <div className='absolute left-1/2 bottom-10 transform -translate-x-1/2'>
            <Button onClick={toggleDrawer} variant={'primary'} className={'px-[15px] text-[13px] rounded-full'}>
              View More
            </Button>
          </div>
        </div>

        {/* Certifications and Education */}
        <div className='h-full w-full bg-white pt-4 pb-[58px] p-5'>
          {/* Certifications */}
          <div className='flex flex-col w-full'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-2xl mb-[9px]'>Certifications</h1>
            <CertList size='md' />
          </div>

          {/* Education */}
          <div className='flex flex-col mt-7'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[9px]'>Education</h1>
            <div className='mb-[16px] list-inside list-disc'>
              {educs.map((educ, index) => (
                <div key={index} className='flex flex-col'>
                  <div className='dm-sans-text-xl text-base text-lightGray mb-3'>
                    {educ.level}
                  </div>
                  <div className='dm-sans-text-regular text-base text-lightGray'>
                    {educ.schoolName}
                  </div>
                  <ul className='font-DM-text text-lightGray list-inside list-disc mb-[20px] text-base'>
                  {educ.courses.map((course, index) => (
                    <li key={index} className='pl-4'>
                      {course}
                    </li>
                  ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex sm:hidden bg-primary h-full flex-col justify-center items-center relative'>
        {/* Experience */}
        <div className='relative h-full pt-4 flex flex-1 flex-col p-5'>
          <div>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[16px]'>Experience</h1>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <div key={index}>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-[12px] text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-[12px] dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[12px] text-lightGray mt-2'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className='border border-lightGray'/>
            </div>
          </div>
          <div className='mt-5'>
            <Button onClick={toggleDrawer} variant={'primary'} className={'w-[100px] flex justify-center text-nowrap text-sm'}>
              View More
            </Button>
          </div>
        </div>

        {/* Certifications and Education */}
        <div className='h-full w-full bg-white pt-4 pb-[58px] p-5'>
          {/* Certifications */}
          <div className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[9px]'>Certifications</h1>
            <CertList size='sm' />
          </div>

          {/* Education */}
          <div className='flex flex-col mt-7'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[9px]'>Education</h1>
            <div className='mb-[16px] list-inside list-disc'>
              {educs.map((educ, index) => (
                <div key={index} className='flex flex-col'>
                  <div className='dm-sans-text-xl text-sm text-lightGray mb-3'>
                    {educ.level}
                  </div>
                  <div className='dm-sans-text-regular text-sm text-lightGray'>
                    {educ.schoolName}
                  </div>
                  <ul className='font-DM-text text-lightGray list-inside list-disc mb-[20px] text-sm'>
                  {educ.courses.map((course, index) => (
                    <li key={index} className='pl-4'>
                      {course}
                    </li>
                  ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


        <Drawer
          anchor='right'
          open={drawer}
          onClose={toggleDrawer}
        >
          <>
          {/* Drawer Desktop */}
          <div className='hidden lg:block w-max bg-[#C7D9E5] relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
            <div className='flex flex-col '>
              <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[32px] mb-[16px]'>Experience</h1>
              <div className='relative'>
              <div onScroll={handleDrawerScroll} className='overflow-y-scroll h-[80vh] scroll-container'>
              {exps.slice(2).map((exp, index) => (
                <div key={index} className='max-w-[1040px]'>
                  <div className='border border-lightGray'/>
                  <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                    <div className='dm-sans-text-bold text-[18px] text-blueSecondary'>
                      {exp.title}
                    </div>
                    <div className='text-blueSecondary text-[18px] dm-sans-text-regular'>
                      <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                    </div>
                    <ul className='dm-sans-text-regular list-inside list-disc text-[18px] text-lightGray mt-2 line-height-28'>
                      {exp.description.map((desc, index) => (
                        <li key={index} className='line-height-28 text-[#7C7C7C]'>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className='border border-lightGray'/>
              </div>
              <div className={`pointer-events-none absolute inset-x-0 bottom-0 flex justify-center items-end h-24 bg-gradient-to-t from-[#C7D9E5] to-transparent transition-opacity duration-300 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
                <div className='animate-bounce mb-2 border border-blueSecondary rounded-full w-9 h-9 flex items-center justify-center bg-[#C7D9E5] text-blueSecondary'>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              </div>
            </div>
              {/* View more button */}
              <div className='absolute top-3 left-5 transform'>
                <ArrowBackIcon onClick={toggleDrawer} className='text-[#7C7C7C] text-[24px] cursor-pointer'/>
            </div>
          </div>

          {/* Drawer Tablet */}
          <div className='bg-[#C7D9E5] lg:hidden relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
            <div className='flex flex-col '>
              <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[16px]'>Experience</h1>
              <div className='relative'>
              <div onScroll={handleDrawerScroll} className='overflow-y-scroll h-[80vh] scroll-container'>
              {exps.slice(2).map((exp, index) => (
              <div key={index}>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-base text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-base dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[12px] text-lightGray mt-2'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
              <div className='border border-lightGray'/>
              </div>
              <div className={`pointer-events-none absolute inset-x-0 bottom-0 flex justify-center items-end h-24 bg-gradient-to-t from-[#C7D9E5] to-transparent transition-opacity duration-300 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
                <div className='animate-bounce mb-2 border border-blueSecondary rounded-full w-9 h-9 flex items-center justify-center bg-[#C7D9E5] text-blueSecondary'>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              </div>
            </div>
            {/* View more button */}
            <div className='absolute top-3 left-5 transform'>
              <ArrowBackIcon onClick={toggleDrawer}  className='text-[#7C7C7C] cursor-pointer'/>
            </div>
          </div>
          
          </>
      </Drawer>
    </div>
  )
}

export default About
