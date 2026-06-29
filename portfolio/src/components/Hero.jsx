import Button from './Button'
import useHeightThreshold from '../hooks/useHeightThreshold'

const Hero = () => {
    const heightThreshold = useHeightThreshold(913)

    const handleScrollToFooter = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }

  return (
    <div className={`bg-primary w-full flex justify-center items-center relative max-w-[2800px] mx-auto`}>
        
        {/* Mobile */}
        <div className='md:hidden h-full flex flex-col w-full'>
            {/* Banner with Minsel overlay */}
            <div className='w-full h-[175px] bg-blue-500 relative'>
            <img 
                src="/images/hero-banner.png" 
                className='h-full w-full object-cover' 
                alt="Water lilies painting"
            />
            </div>

            {/* Content section */}
            <div className='w-full px-6 py-8 bg-[#f7f4f1]'>
            {/* Header */}
            <div className='flex items-center gap-4 mb-6'>
                <div className=''>
                    <img src="images/hero.png" className='w-[50px] h-[50px] rounded-full' alt="Profile" />  
                </div>
                <div className='flex flex-col'>
                    <h1 className='dm-serif-display-regular-italic text-[20px] text-blueSecondary'>Jasmin Ivy C. Fedilo</h1>
                    <p className='font-DM-text text-[12px] text-lightGray'>UI/UX Designer</p>
                </div>
            </div>
            
            {/* Description */}
            <div>
                <p className='text-lightGray dm-sans-text-regular text-[12px] mb-5'>
                Sophomore at <span className='dm-sans-text-500-italic'>Polytechnic University of the Philippines (PUP)</span> pursuing a <span className='dm-sans-text-500-italic'>BS in Computer Engineering</span> with a strong foundation in Python.
                </p>
                <p className='text-lightGray dm-sans-text-regular text-[12px]'>
                As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.
                </p>

                {/* Buttons */}
                <div className='flex gap-2 mt-6'>
                    <Button variant='primary' className={'px-[15px] text-[12px] rounded-full'}>
                    <a 
                        href="/FEDILO%20ResumeCV%20'26.pdf"
                        download="FEDILO ResumeCV '26.pdf"
                        className="block w-full h-full text-center"
                    >
                        Resume
                    </a>
                    </Button>
                    <Button variant='secondary' className={'px-[15px] text-[12px] rounded-full'}>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=jasminfedilo.pup@gmail.com"
                            target="_blank"
                            className="block w-full h-full text-center"
                        >
                            Email
                        </a>
                    </Button>
                </div>
            </div>
            </div>

            {/* Footer mobile */}
            <div className='bg-white h-[75px] w-full py-6 px-4 justify-end flex'>
            <div className='w-[190px] flex items-center gap-3'>
                <div className='w-[170px]  dm-sans-text-italic text-lightGray text-sm '>
                    Want to collaborate or just say hi? Reach out!
                </div>
                <div onClick={handleScrollToFooter}  className='border rounded-full border-lightGray w-[24px] h-[24px] flex justify-center items-center hover:bg-primary hover:scale-125 transition-transform'>
                    <img  src="/images/arrow_forward.png" alt="" className='text-black w-[24px] h-[24px]' />
                </div>
            </div>
            </div>
        </div>

        {/* Tablet */}
        <div className='hidden md:flex lg:hidden flex-col w-full'>
            {/* Banner with Minsel overlay */}
            <div className='w-full h-[200px] bg-blue-500 relative'>
            <img 
                src="/images/hero-banner.png" 
                className='h-full w-full object-cover' 
                alt="Water lilies painting"
            />
            </div>

            {/* Content section */}
            <div className='w-full px-6 py-8 bg-[#f7f4f1]'>
            {/* Header */}
            <div className='flex items-center mb-6 gap-4'>
                <img src="images/hero.png" className='w-[80px] h-[80px] rounded-full' alt="Profile" />  
                <div className='flex flex-col'>
                    <h1 className='dm-serif-display-regular-italic text-2xl text-blueSecondary'>Jasmin Ivy C. Fedilo</h1>
                    <p className='font-DM-text text-base text-lightGray'>UI/UX Designer</p>
                </div>
            </div>
            
            {/* Description */}
            <div>
                <p className='text-lightGray dm-sans-text-regular text-base mb-5'>
                Sophomore at <span className='dm-sans-text-500-italic'>Polytechnic University of the Philippines (PUP)</span> pursuing a <span className='dm-sans-text-500-italic'>BS in Computer Engineering</span> with a strong foundation in Python.
                </p>
                <p className='text-lightGray dm-sans-text-regular text-base'>
                As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.
                </p>

                {/* Buttons */}
                <div className='flex gap-[14px] mt-6'>
                <Button variant='primary' className={'px-[15px] text-[16px] rounded-full'}>
                    <a 
                        href="/FEDILO%20ResumeCV%20'26.pdf"
                        download="FEDILO ResumeCV '26.pdf"
                        className="block w-full h-full text-center"
                    >
                        Resume
                    </a>
                </Button>
                <Button variant='secondary' className={'px-[15px] text-[16px] rounded-full'}>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jasminfedilo.pup@gmail.com"
                        target="_blank"
                        className="block w-full h-full text-center"
                    >
                        Email
                    </a>
                </Button>
                </div>
            </div>
            </div>

            {/* Footer mobile */}
            <div className='bg-white h-[75px] w-full py-6 px-4 justify-end flex'>
                <div className='w-[190px] flex items-center gap-3'>
                    <div className='w-[170px]  dm-sans-text-italic text-lightGray text-sm '>
                        Want to collaborate or just say hi? Reach out!
                    </div>
                    <div onClick={handleScrollToFooter} className='border rounded-full border-lightGray w-[24px] h-[24px] flex justify-center items-center hover:bg-primary hover:scale-125 transition-transform'>
                        <img src="/images/arrow_forward.png" alt="" className='text-black w-[24px] h-[24px]' />
                    </div>
                </div>
            </div>
        </div>

        {/* Desktop */}
        <div className={`hidden ${heightThreshold ? 'h-page' : 'h-[764px]'} w-full lg:flex mx-auto`}>
            {/* Banner */}
            <div className='bg-red-200 w-[35%] relative'>
                <img src="/images/hero-banner.png" className='h-full w-full contain' />
            </div>

            {/* Hero */}
            <div className='relative w-[65%] flex flex-col hero'>
                <div className='flex px-[57px] flex-col justify-center h-full'>
                    {/* Header */}
                    <div className='flex gap-5 items-center mb-8'>
                        <div>
                            <img src="images/hero.png" className='w-[88px] h-[88px] object-cover' alt="" />  
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='dm-serif-display-regular-italic text-[32px] text-blueSecondary'>Jasmin Ivy Fedilo</h1>
                            <p className='font-DM-text text-[18px] text-lightGray'>UI/UX Designer</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className='text-lightGray dm-sans-text-regular text-lg line-height-28 mb-6'>Sophomore at <span className='dm-sans-text-500-italic'>Polytechnic University of the Philippines (PUP)</span> pursuing a <span className='dm-sans-text-500-italic'>BS in Computer Engineering </span> with a strong foundation in Python.</p>
                        <p className='text-lightGray dm-sans-text-regular text-lg line-height-28'>As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.</p>

                        {/* Buttons */}
                        <div className='flex gap-[14px] mt-[33px]'>
                            <Button variant='primary' className={'text-lg'}>
                            <a 
                                href="/FEDILO%20ResumeCV%20'26.pdf"
                                download="FEDILO ResumeCV '26.pdf" 
                                className="block w-full h-full text-center"
                            >
                                Resume
                            </a>
                            </Button>
                            <Button variant='secondary' className='text-lg'>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jasminfedilo.pup@gmail.com"
                                    target="_blank"
                                    className="block w-full h-full text-center"
                                >
                                    Email
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                
                <div className={`min-h-max ${heightThreshold ? 'h-[175px]' : 'h-[100px]'} bg-white w-full py-[10px]`}>
                    <div className='h-full justify-center items-center w-full'>
                        <div className='w-full flex items-center justify-end pr-[40px] h-full'>
                            <div className='dm-sans-text-italic text-lightGray text-base w-[226px]'>Want to collaborate or just say hi? Reach out!</div>
                            <div className={`border border-lightGray ${heightThreshold ? 'h-[125px]' : 'h-[60px]'} w-[1px] mr-[40px] ml-[10px]`}/>
                            <div  onClick={handleScrollToFooter} className='border rounded-full border-lightGray w-[39px] h-[39px] cursor-pointer justify-center flex items-center hover:bg-primary hover:scale-125 transition-transform'>
                                <img src="/images/arrow_forward.png" alt="" className='text-black' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
