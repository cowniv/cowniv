import useHeightThreshold from '../hooks/useHeightThreshold'
import { skills } from '../data/skills'

const Skills = () => {
  const heightThreshold = useHeightThreshold(913)

  return (
    <div className='h-max w-full bg-primary max-w-[2700px] mx-auto'>

      {/* Desktop */}
      <div className='hidden lg:flex h-page flex-col'>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px] flex flex-col justify-between'>
            
          </div>
          {/* 1st Row - 1st Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center'>
            <img src="/images/wave-blue.png" alt="" />
          </div>
          {/* 1st Row - 2nd Column */}
          <div className='w-1/2 bg-white py-[104px] px-[64px] relative'>
            <img src="/images/“.png" alt="" className='absolute top-[61px] left-[64px]' />
            <img src="/images/”.png" alt="" className='absolute bottom-[61px] right-[64px]'/>
            <p className='text-[18px] text-lightGray dm-sans-text-regular line-height-28'>
            I love turning ideas into interactive experiences. Whether it's crafting intuitive UI designs in Figma or building smooth, responsive interfaces with React.js, I always aim to make things both functional and visually engaging. I’m also a firm believer in continuous learning—there’s always a new tool, framework, or concept to explore, and that’s what keeps me excited about tech!
            </p>
          </div>
        </div>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px]'>
          </div>
          {/* 2nd Row - 1st Column */}
          <div className='relative w-1/2 bg-white flex justify-around px-[51px] gap-[31px]'>
            <div className='z-50 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>
            {skills.map((skill, idx) => (
              <div key={idx} className="mt-10">
                <div className={`${heightThreshold ? 'h-20' : 'h-30'}`}>
                  <h1 className='text-[32px] text-blueSecondary dm-serif-display-regular-italic mb-5'>{skill.title}</h1>
                </div>
                <div className='flex flex-col justify-between w-[70%]'>
                  {skill.items.map((item, index) => (
                    <div key={index} className='flex gap-[13px] items-center'>
                      <div className='flex-[0.1] bg-bluePrimary rounded-full w-4 h-4'>
                        <img src="/images/check_small.png" alt="Check" className='object-contain w-full h-full' />
                      </div>
                      <p className='flex-[0.9] text-[18px] dm-sans-text-regular text-lightGray'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* 2nd Row - 2nd Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center relative'>
            <div className='z-40 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>

            <img src="/images/cloud-blue.png" alt="" />
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className='hidden md:flex lg:hidden h-page flex-col'>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px] flex flex-col justify-between'>
            
          </div>
          {/* 1st Row - 1st Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center'>
            <img src="/images/wave-blue.png" alt="" />
          </div>
          {/* 1st Row - 2nd Column */}
          <div className='w-1/2 bg-white py-[104px] px-[64px] relative'>
            <img src="/images/“.png" alt="" className='absolute top-[61px] left-[64px]' />
            <img src="/images/”.png" alt="" className='absolute bottom-[61px] right-[64px]'/>
            <p className='text-[20px] text-lightGray dm-sans-text-regular'>
            I love turning ideas into interactive experiences. Whether it's crafting intuitive UI designs in Figma or building smooth, responsive interfaces with React.js, I always aim to make things both functional and visually engaging. I’m also a firm believer in continuous learning—there’s always a new tool, framework, or concept to explore, and that’s what keeps me excited about tech!
            </p>
          </div>
        </div>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px]'>
          </div>
          {/* 2nd Row - 1st Column */}
          <div className='relative h-full w-1/2 bg-white flex justify-center px-[51px] gap-[31px]'>
            <div className='z-40 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>
            {skills.map((skill, idx) => (
              <div key={idx} className="mt-5">
                <div className='h-20'>
                  <h1 className='text-[24px] text-blueSecondary dm-serif-display-regular-italic mb-5'>{skill.title}</h1>
                </div>
                <div className='flex flex-col justify-between w-[70%]'>
                  {skill.items.map((item, index) => (
                    <div key={index} className='flex justify-between items-center w-[100px]'>
                      <div className='flex-[0.2] bg-bluePrimary rounded-full w-4 h-4'>
                        <img src="/images/check_small.png" alt="Check" className='object-contain w-full h-full' />
                      </div>
                      <p className='pl-3 py-2 flex-[0.8] text-[12px] dm-sans-text-regular text-lightGray'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* 2nd Row - 2nd Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center relative'>
            <div className='z-40 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>

            <img src="/images/cloud-blue.png" alt="" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex md:hidden flex-col'>
        <div className='flex flex-col justify-center items-center'>
          {/* row 1 */}
          <div className='h-[304px] bg-primary flex justify-center items-center py-5'>
            <img src="/images/wave-blue.png" alt="" className='h-full' />
          </div>

          {/* row 2 */}
          <div className='bg-white h-[304px] py-[64px] px-5 relative'>
            <img src="/images/“.png" alt="" className='absolute top-10 left-5' />
            <img src="/images/”.png" alt="" className='absolute bottom-2 right-5'/>
            <p className='text-sm text-lightGray dm-sans-text-regular line-height-28'>
              I love turning ideas into interactive experiences. Whether it's crafting intuitive UI designs in Figma or building smooth, responsive interfaces with React.js, I always aim to make things both functional and visually engaging. I’m also a firm believer in continuous learning—there’s always a new tool, framework, or concept to explore, and that’s what keeps me excited about tech!
            </p>
          </div>

          {/* row 3 */}
          <div className='h-[304px] bg-primary flex justify-center items-center relative py-5'>
            <img src="/images/cloud-blue.png" alt="" className='h-full' />
          </div>

          {/* row 4 */}
          <div className='relative w-full bg-white flex justify-center px-5 pt-8 pb-12'>
          {skills.map((skill, idx) => (
              <div key={idx} className="mt-5">
                <div className='h-20'>
                  <h1 className='text-[24px] text-blueSecondary dm-serif-display-regular-italic mb-5'>{skill.title}</h1>
                </div>
                <div className='flex flex-col justify-between w-[70%]'>
                  {skill.items.map((item, index) => (
                    <div key={index} className='flex justify-between items-center w-[120px]'>
                      <div className='flex-[0.2] bg-bluePrimary rounded-full w-3 h-3'>
                        <img src="/images/check_small.png" alt="Check" className='object-cover w-full h-full' />
                      </div>
                      <p className='pl-3 py-2 flex-[0.8] text-[12px] dm-sans-text-regular text-lightGray'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills
