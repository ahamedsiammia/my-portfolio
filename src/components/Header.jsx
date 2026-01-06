import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm z-50 transition-all duration-300">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1 
          className="text-xl font-semibold cursor-pointer"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Siam
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${
                activeSection === item.id ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
              } transition-colors duration-200 relative`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                  layoutId="activeIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <motion.div
                className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 z-50 md:hidden"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-indigo-600 bg-indigo-50 font-semibold'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activeSection === item.id ? 'bg-indigo-600' : 'bg-gray-300'
                        }`} />
                        <span>{item.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Social Links in Mobile Menu */}
                <div className="border-t border-gray-200 px-4 py-3">
                  <p className="text-xs text-gray-500 mb-2">Connect with me</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: 'fa-brands fa-github', link: 'https://github.com/ahamedsiammia', color: 'text-gray-600' },
                      { icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/siam-ahamed/', color: 'text-blue-600' },
                      { icon: 'fa-brands fa-facebook', link: 'https://www.facebook.com/farhan.ahamed.siam.2024', color: 'text-blue-500' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-lg transition-colors`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <i className={social.icon}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

