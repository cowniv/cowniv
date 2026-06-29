import { socials } from '../data/socials'
import Reveal from './Reveal'

const Connect = () => {
  return (
    <div className={`min-h-[200px] md:min-h-[500px] relative md:h-[664px] bg-bluePrimary bg-[url('/gifs/painting-bg.gif')] bg-[center_top] bg-cover flex justify-center items-center`}>
      <div className='absolute left-[37px] bottom-0 md:top-[240px]'>
        <div className='w-[318px]'>
          <Reveal as='h1' variant='left' className='text-[35px] md:text-[56px] w-14 md:w-full dm-serif-display-regular-italic text-white text-shadow-blue'>LET&apos;S CONNECT!</Reveal>
        </div>
        {/* Socials Desktop */}
        <div className='hidden md:flex md:flex-col'>
          {socials.map((social, index) => (
            <Reveal key={index} variant='left' delay={150 + index * 120} className='flex items-center gap-2'>
              <div className='bg-white rounded-full h-[25px] flex justify-center items-center w-[25px]'>
                <img src={social.img} alt="" />
              </div>
              <a href={social.link} target='_blank' className='dm-sans-text-italic text-[18px] text-shadow-blue text-white'>{social.name}</a>
            </Reveal>
          ))}
        </div>
      </div>
      {/* Socials Mobile */}
      <div className='absolute bottom-0 right-0 md:hidden flex flex-col gap-1 mb-2'>
        {socials.map((social, index) => (
          <Reveal key={index} variant='right' delay={index * 100} className='flex items-center gap-2'>
            <div className='bg-white rounded-full h-[25px] flex justify-center items-center w-[25px]'>
              <img src={social.img} alt="" />
            </div>
            <a href={social.link} target='_blank' className='dm-sans-text-italic text-[12px] text-shadow-blue text-white'>{social.name}</a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Connect
