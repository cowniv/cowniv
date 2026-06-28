import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update background based on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine the active section
      const sections = ['hero', 'about', 'projects', 'skills'];
      const scrollPos = window.pageYOffset;
      let current = 'hero';
      
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          // Adjust the threshold if necessary (150 is an arbitrary offset)
          if (scrollPos >= sectionTop - 150 && scrollPos < sectionTop + sectionHeight - 150) {
            current = sectionId;
          }
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function with an offset
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 50; // adjust this value as needed (in pixels)
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'} py-5`}>
      {/* Desktop */}
      <div className={`w-full hidden ${isScrolled ? 'h-[30px]' : ''} lg:flex justify-between items-center px-9 transition-transform`}>
        {/* Left side - Logo */}
        <div className={`text-[32px] ${isScrolled ? 'text-lightGray' : 'text-white'} dm-serif-display-regular-italic`}>
          Minsel
        </div> 
        {/* Right side - Navigation links */}
        <div className="w-1/2 flex justify-end gap-[57px] font-light pr-9 dm-sans-text-regular text-[18px]">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'hero' ? 'text-blue-500' : (isScrolled ? 'text-gray-700' : 'text-lightGray')}`}
          >
            HOME
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'about' ? 'text-blue-500' : (isScrolled ? 'text-gray-700' : 'text-lightGray')}`}
          >
            ABOUT
          </a>
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'projects' ? 'text-blue-500' : (isScrolled ? 'text-gray-700' : 'text-lightGray')}`}
          >
            PROJECTS
          </a>
          <a 
            href="#skills" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'skills' ? 'text-blue-500' : (isScrolled ? 'text-gray-700' : 'text-lightGray')}`}
          >
            SKILLS
          </a>
        </div>
      </div>
      
      {/* Mobile */}
      <div className="w-full flex lg:hidden justify-between items-center px-[16px]">
        {/* Left side - Logo */}
        <div className={`text-[20px] ${isScrolled ? 'text-lightGray' : 'text-white'} dm-serif-display-regular-italic`}>
          Minsel
        </div> 
        {/* Right side - Navigation links */}
        <div className="w-1/2 flex justify-end gap-[14px] font-light dm-sans-text-regular text-[12px]">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'hero' ? 'text-blue-700' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
          >
            HOME
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'about' ? 'text-blue-700' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
          >
            ABOUT
          </a>
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'projects' ? 'text-blue-700' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
          >
            PROJECTS
          </a>
          <a 
            href="#skills" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }} 
            className={`cursor-pointer hover:opacity-80 ${activeSection === 'skills' ? 'text-blue-700' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
          >
            SKILLS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
