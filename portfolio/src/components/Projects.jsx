import { useState, useRef } from 'react'
import Button from './Button'
import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../data/projects'

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: '',
    description: '',
    image: ''
  });
  const trackRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedProject({
      title: '',
      description: '',
      image: ''
    });
  }

  const handleProject = (project) => {
    handleOpen()
    setSelectedProject(project)
  }

  // Update the active dot as the carousel scrolls (2 dots: start / end)
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setActiveDot(max > 0 && track.scrollLeft > max / 2 ? 1 : 0);
  }

  // Jump to the start (page 0) or the end (page 1) of the carousel
  const scrollToPage = (page) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: page === 0 ? 0 : max, behavior: 'smooth' });
  }

  return (
    <div className='relative flex justify-center items-center bg-bluePrimary'>
      <div className='w-full flex flex-col justify-center px-[16px] sm:px-[32px] lg:px-[60px] pt-5 lg:pt-[56px] pb-[40px] lg:pb-[56px]'>
        <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl sm:text-2xl lg:text-[32px] text-center'>PROJECTS</h1>

        {/* Carousel */}
        <div className='mt-6 lg:mt-10'>
          {/* Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className='grid grid-rows-2 grid-flow-col auto-cols-max gap-x-[24px] lg:gap-x-[40px] gap-y-6 lg:gap-y-[40px] overflow-x-auto hide-scrollbar scroll-smooth pt-4 pb-10 px-2'
          >
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProject(project)}
                className='relative flex justify-center hover:scale-105 transition-transform cursor-pointer'
              >
                <div className='absolute h-full w-full project-gradient rounded-2xl z-10 overflow-hidden' />
                <div className='w-[240px] h-[163px] sm:w-[260px] sm:h-[176px] lg:w-[340px] lg:h-[230px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden'>
                  <img src={project.image} alt='' className='object-cover w-full h-full' />
                  <p className='z-20 absolute bottom-3 left-6 text-sm sm:text-base lg:text-[18px] text-white dm-serif-display-regular-italic'>{project.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className='flex justify-center items-center gap-2 mt-2'>
            {[0, 1].map((page) => (
              <button
                key={page}
                type='button'
                onClick={() => scrollToPage(page)}
                aria-label={`Scroll to ${page === 0 ? 'start' : 'end'} of projects`}
                className={`h-2 rounded-full transition-all duration-300 ${activeDot === page ? 'w-6 bg-blueSecondary' : 'w-2 bg-blueSecondary/40 hover:bg-blueSecondary/70'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div className='h-full w-full flex justify-center items-center' onClick={handleClose}>
          {/* Modal Desktop */}
          <div className='hidden lg:flex relative flex-col bg-[#F4EFEB] p-11 rounded-2xl w-[740px] h-[90%] overflow-y-auto scroll-container'>
            <img src={selectedProject.image} alt="" className='rounded-2xl w-[655px] h-[370px] object-fit-cover flex-shrink-0' />
            <h3 className='mt-6 text-[#57808E] text-[32px] dm-serif-display-regular-italic'>
              {selectedProject.title}
            </h3>
            <div className='flex flex-col'>
              {selectedProject.links && selectedProject.links.map((link, index) => (
                <a href={link.url} key={index} target='_blank' className='text-[#7C7C7C] text-[18px] dm-sans-text-500-italic '>{link.title}</a>
              ))}
            </div>
            <div className='h-full prose prose-lg'>
              <div className=' mt-4 text-[#7C7C7C] text-[18px] dm-sans-text-regular' dangerouslySetInnerHTML={{__html: selectedProject.description}}/>
              <div className='flex justify-center items-center'>
                <Button variant={'primary'} className={'mb-5'} onClick={handleClose}>
                  <ArrowBackIcon /> Back
                </Button>
              </div>
            </div>
          </div>

          {/* Modal Tablet */}
          <div className='hidden md:flex lg:hidden relative justify-center items-center flex-col bg-[#F4EFEB] p-11 rounded-2xl w-[640px] h-[90%] overflow-y-auto scroll-container'>
            <div className='mt-24 flex justify-center items-center w-[500px] h-[200px]'>
            <img src={selectedProject.image} alt="" className='rounded-lg w-full h-full object-cover' />
            </div>
            <h3 className='mt-6 text-[#57808E] text-2xl dm-serif-display-regular-italic'>
              {selectedProject.title}
            </h3>
            <div className='flex flex-col justify-center items-center'>
              {selectedProject.links && selectedProject.links.map((link, index) => (
                <a href={link.url} key={index} target='_blank' className='text-[#7C7C7C] text-[15px] dm-sans-text-500-italic '>{link.title}</a>
              ))}
            </div>
            <div className='h-[70%] prose prose-lg'>
              <div className='pb-6 mt-4 text-[#7C7C7C] text-lg dm-sans-text-regular' dangerouslySetInnerHTML={{__html: selectedProject.description}}/>
              <div className='flex justify-center items-center'>
                <Button variant={'primary'} className={'mb-5'} onClick={handleClose}>
                  <ArrowBackIcon /> Back
                </Button>
              </div>
            </div>
          </div>

          {/* Modal Mobile */}
          <div className='flex md:hidden lg:hidden relative justify-center items-center flex-col bg-[#F4EFEB] p-3 w-full h-full overflow-y-auto scroll-container'>
            <div className='mt-20 flex justify-center items-center w-[90%] h-[200px]'>
            <img src={selectedProject.image} alt="" className='rounded-lg w-full h-full object-cover' />
            </div>
            <h3 className='mt-6 text-[#57808E] text-2xl dm-serif-display-regular-italic'>
              {selectedProject.title}
            </h3>
            <div className='flex flex-col justify-center items-center'>
              {selectedProject.links && selectedProject.links.map((link, index) => (
                <a href={link.url} key={index} target='_blank' className='text-[#7C7C7C] text-[15px] dm-sans-text-500-italic '>{link.title}</a>
              ))}
            </div>
            <div className='h-[70%] prose prose-lg'>
              <div className='pb-6 mt-4 text-[#7C7C7C] text-lg dm-sans-text-regular' dangerouslySetInnerHTML={{__html: selectedProject.description}}/>
              <div className='flex justify-center items-center'>
                <Button variant={'primary'} className={'mb-5'} onClick={handleClose}>
                  <ArrowBackIcon /> Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>


    </div>
  )
}

export default Projects
