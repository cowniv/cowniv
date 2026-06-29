import { useState } from 'react'
import Button from './Button'
import Drawer from '@mui/material/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { certs, educs, exps } from '../data/about'


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
          <div className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[32px] mb-[9px]'>Certifications</h1>
            <ul className='mb-[16px] list-inside list-disc'>
              {certs.map((cert, index) => (
                <li key={index} className='text-[18px] font-DM-text text-lightGray'>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className='flex flex-col mt-[51px]'>
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
          </div>
        </div>

        {/* Experience */}
        <div className='w-[65%] relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
          <div className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[32px] mb-[16px]'>Experience</h1>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <div key={index}>
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
          </div>
            {/* View more button */}
            <div className='flex justify-center mt-10 mb-[51px]'>
              <Button onClick={toggleDrawer} variant={'primary'} className={'w-[200px] flex justify-center text-lg text-nowrap'}>
                View More
              </Button>
            </div>
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
            <ul className='mb-[16px] list-inside list-disc'>
              {certs.map((cert, index) => (
                <li key={index} className='text-base font-DM-text text-lightGray'>
                  {cert}
                </li>
              ))}
            </ul>
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
            <ul className='mb-[16px] list-inside list-disc'>
              {certs.map((cert, index) => (
                <li key={index} className='text-xs font-DM-text text-lightGray'>
                  {cert}
                </li>
              ))}
            </ul>
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
