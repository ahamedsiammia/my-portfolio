import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  
  const roles = ['Full Stack Developer', 'Web Designer'];
  const nameText = "Hi, I'm Siam Ahamed";

  // Different animation types that will loop
  const animationTypes = [
    'typewriter', 'wave', 'bounce', 'glow', 'slide'
  ];

  // Typewriter effect
  useEffect(() => {
    if (currentAnimation === 0) { // Only for typewriter animation
      let index = 0;
      setDisplayedText('');
      setIsTyping(true);
      
      const timer = setInterval(() => {
        if (index <= nameText.length) {
          setDisplayedText(nameText.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    } else {
      setDisplayedText(nameText);
      setIsTyping(false);
    }
  }, [currentAnimation]);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Animation loop - changes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animationTypes.length);
      setAnimationKey(prev => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Render different animations based on current type
  const renderNameAnimation = () => {
    const currentType = animationTypes[currentAnimation];

    switch (currentType) {
      case 'typewriter':
        return (
          <span className="inline-block">
            {displayedText.split('').map((char, index) => (
              <motion.span
                key={`${animationKey}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.05,
                  delay: index * 0.05
                }}
                className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-12 bg-indigo-600 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </span>
        );

      case 'wave':
        return (
          <span className="inline-block">
            {nameText.split('').map((char, index) => (
              <motion.span
                key={`${animationKey}-${index}`}
                className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
                animate={{
                  y: [0, -20, 0],
                  color: ['#1f2937', '#4f46e5', '#7c3aed', '#ec4899', '#1f2937']
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        );

      case 'bounce':
        return (
          <motion.span
            key={animationKey}
            className="inline-block"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {nameText.split('').map((char, index) => (
              <motion.span
                key={index}
                className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.05,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        );

      case 'glow':
        return (
          <motion.span
            key={animationKey}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              textShadow: [
                '0 0 0px rgba(79, 70, 229, 0)',
                '0 0 20px rgba(79, 70, 229, 0.8)',
                '0 0 0px rgba(79, 70, 229, 0)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            {nameText}
          </motion.span>
        );

      case 'slide':
        return (
          <div className="overflow-hidden">
            <motion.span
              key={animationKey}
              className="inline-block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: [0, 20, 0],
                opacity: 1,
                rotateY: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {nameText}
            </motion.span>
          </div>
        );

      default:
        return <span>{nameText}</span>;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariantse = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-5 grid grid-cols-1 md:grid-cols-2 items-center gap-12  relative overflow-hidden">

      {/* Background Bubble Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-14 h-14 bg-blue-200 rounded-full opacity-15"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-8 h-8 bg-teal-200 rounded-full opacity-25"
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Left Content */}
      <motion.div 
        className="space-y-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
     
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold min-h-[4rem] flex items-center"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            {renderNameAnimation()}
          </AnimatePresence>
          
          {/* Animation indicator */}
          <motion.div
            className="ml-4 text-xs text-gray-400 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="flex items-center space-x-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="capitalize">{animationTypes[currentAnimation]}</span>
            </motion.div>
          </motion.div>
        </motion.h2>
        
        <motion.div 
          className="h-8"
          variants={itemVariants}
        >
          <motion.h3 
            key={currentRole}
            className="text-lg font-semibold text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.h3>
        </motion.div>
        
        <motion.p 
          className="text-gray-500 max-w-md"
          variants={itemVariants}
        >
         As a Full-Stack Developer, I bridge the gap between stunning frontend user interfaces and robust backend logic to build scalable web applications.
        </motion.p>
        
        <motion.button 
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Contact Me
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </motion.button>

        {/* Social Links with Animation */}
        <motion.div 
          className="flex gap-4 pt-4"
          variants={itemVariants}
        >
          {[
            { icon: 'fa-brands fa-github', link: 'https://github.com/ahamedsiammia', color: 'hover:text-gray-800' },
            { icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/siam-ahamed/', color: 'hover:text-blue-600' },
            { icon: 'fa-brands fa-facebook', link: 'https://www.facebook.com/farhan.ahamed.siam.2024', color: 'hover:text-blue-500' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 ${social.color} text-xl transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div 
          className="relative w-72 h-72 md:w-80 md:h-80"
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Subtle Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 opacity-30 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main Image Container */}
          <motion.div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 p-2 shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner Border */}
            <div className="w-full h-full rounded-full bg-white p-1 shadow-inner">
              <motion.img 
                src="https://i.ibb.co.com/F4BNzQ7s/Gemini-Generated-Image-mp7wnwmp7wnwmp7w.png" 
                alt="Siam" 
                className="w-full h-full object-cover rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </div>
          </motion.div>

          {/* Floating Skills Icons - React */}
          <motion.div
            className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg border-2 border-blue-100"
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-react text-3xl text-blue-500"></i>
          </motion.div>

          {/* Floating Skills Icons - JavaScript */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg border-2 border-yellow-100"
            animate={{
              y: [8, -8, 8],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-js text-3xl text-yellow-500"></i>
          </motion.div>

          {/* Floating Skills Icons - HTML5 */}
          <motion.div
            className="absolute top-1/2 -left-8 bg-white rounded-full p-4 shadow-lg border-2 border-orange-100"
            animate={{
              x: [-5, 5, -5],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-html5 text-3xl text-orange-500"></i>
          </motion.div>

          {/* CSS3 Icon */}
          <motion.div
            className="absolute top-1/2 -right-8 bg-white rounded-full p-4 shadow-lg border-2 border-blue-100"
            animate={{
              x: [5, -5, 5],
              rotate: [0, -8, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-css3-alt text-3xl text-blue-600"></i>
          </motion.div>

          {/* Node.js Icon */}
          <motion.div
            className="absolute top-1 right-1/4 transform translate-x-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-green-100"
            animate={{
              y: [-6, 6, -6],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-brands fa-node-js text-2xl text-green-600"></i>
          </motion.div>

          {/* Tailwind CSS Icon */}
          {/* <motion.div
            className="absolute -bottom-8 left-1/4 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-teal-100"
            animate={{
              y: [6, -6, 6],
              rotate: [0, -6, 6, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fa-solid fa-wind text-2xl text-teal-500"></i>
          </motion.div> */}

          {/* TypeScript Icon */}
          <motion.div
            className="absolute  right-20 bg-white rounded-full p-3 shadow-lg border-2 border-blue-200"
            animate={{
              y: [6, -8, 6],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-7 h-7">
              <rect width="128" height="128" rx="6" fill="#3178c6"/>
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" opacity="0"/>
              <path d="M1.5 63.91v62.5h125V1.41H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.58v46.23H45.07V69.26H29.46v-5a49.19 49.19 0 01.12-5.17C29.68 59 39 59 51 59h21.39z" fill="#fff"/>
            </svg>
          </motion.div>

          {/* PostgreSQL Icon */}
          <motion.div
            className="absolute top-0  transform -translate-x-1/2 -translate-y-4 bg-white rounded-full p-3 shadow-lg border-2 border-indigo-100"
            animate={{
              y: [-6, 6, -6],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
              <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.94.827 3.104.422 4.818.551 7.19c.022.43.409 4.435 1.72 6.055.09.11.18.214.266.308.146.16.293.26.44.316A10.72 10.72 0 0 0 3.08 16.5c.019 1.687.082 3.304.58 4.523.498 1.218 1.393 1.977 2.93 1.977 1.086 0 2.169-.283 2.823-1.283.654-1 1.002-2.174 1.046-2.5.044-.325.094-.64.138-.96.02-.142.039-.283.058-.422.017-.115.022-.167.03-.208a2.58 2.58 0 0 0 .023-.077l.027-.083c.14.073.288.138.443.192.553.189 1.36.33 2.28.33.818 0 1.538-.108 2.135-.302.028.087.057.176.087.268.046.14.094.286.14.437.15.484.3 1.066.3 1.555 0 .83.298 1.717.893 2.318.594.6 1.497.887 2.637.887 1.4 0 2.427-.62 3.085-1.627.644-1.017.916-2.337.916-3.59 0-.63-.108-1.243-.303-1.835a10.7 10.7 0 0 0 .706-1.712c.56-1.755.7-3.75.7-5.263 0-3.566-.749-6.05-2.08-7.61C19.9.72 18.557.028 17.128 0zm.95 1.688c.99.02 1.914.561 2.668 1.463 1.14 1.344 1.815 3.598 1.815 6.933 0 1.486-.136 3.35-.646 4.97-.31.97-.775 1.865-1.43 2.49a3.742 3.742 0 0 1-.16-.404c-.144-.41-.307-.93-.46-1.4-.152-.472-.296-.924-.41-1.273-.113-.348-.213-.608-.28-.726a.685.685 0 0 0-.028-.045c.76-.56 1.467-1.367 1.996-2.532.636-1.393.95-3.224.95-5.477 0-1.67-.23-3.056-.658-4.084a5.698 5.698 0 0 0-.39-.77 8.914 8.914 0 0 1 .633-.145zm-3.107.37c.232.01.45.04.657.088.087.02.178.044.263.072a4.96 4.96 0 0 1 .571.492c.374.38.687.947.917 1.684.46 1.476.55 3.495.55 5.57 0 2.135-.29 3.723-.817 4.84-.527 1.116-1.22 1.695-2.133 1.895-.232-.022-.466-.025-.7-.03-.247-.004-.494-.01-.723-.04-.37-.045-.643-.132-.857-.27-.426-.27-.696-.75-.87-1.463-.175-.714-.232-1.636-.232-2.757 0-1.072.1-2.09.358-2.922.257-.832.676-1.445 1.373-1.773.356-.168.58-.516.57-.908-.01-.392-.25-.748-.62-.896-.668-.266-1.364-.3-2.015-.3a5.96 5.96 0 0 0-.694.044c-.116-.22-.237-.496-.35-.828-.257-.748-.42-1.697-.397-2.697a6.08 6.08 0 0 1 .697-.165c.545-.098 1.13-.148 1.688-.148 1.245 0 2.33.247 3.164.487l.047.014a5.97 5.97 0 0 0-.196-.015zm-6.052.195c.246.003.482.025.704.065-.033.05-.065.1-.097.152-.457.752-.765 1.69-.946 2.657a8.09 8.09 0 0 0-.148 1.4c-.468.151-.97.37-1.468.678-.2.125-.396.263-.585.414A5.72 5.72 0 0 0 5.5 5.887c-.14-.3-.31-.56-.507-.773a4.46 4.46 0 0 0-.1-.1c.282-.458.807-.873 1.54-1.1.72-.224 1.54-.287 2.226-.287.254 0 .499.012.73.025h.003zm-4.836.83c.002 0 .01 0 .012.002l.05.01c.12.029.27.086.438.188.337.202.703.557 1.003 1.1.301.545.52 1.266.566 2.156.04.776-.05 1.598-.396 2.328a5.4 5.4 0 0 0-.56-.056c-.95 0-1.808.186-2.508.646-.113-.9-.394-3.87-.518-4.54.006-.024.038-.066.096-.122.275-.263.756-.484 1.257-.638a4.87 4.87 0 0 1 .56-.074zm8.038 5.423c.082 0 .163.001.244.004.39.012.712.04.977.085.01.058.022.143.035.254.034.293.052.71.052 1.31 0 1.074-.056 1.927-.186 2.576-.13.65-.32 1.043-.547 1.275-.227.232-.521.374-1.002.453a7.847 7.847 0 0 1-1.08.07c-.714 0-1.356-.106-1.752-.237a2.132 2.132 0 0 1-.386-.168 8.91 8.91 0 0 0 .07-.5c.05-.452.09-.948.09-1.426 0-.8-.08-1.567-.324-2.218-.078-.21-.17-.404-.28-.58.166-.12.37-.228.6-.317.495-.19 1.106-.3 1.794-.3.27 0 .53.014.775.025.274.012.537.024.756.024l.154-.33zm-2.14 7.65c-.01.07-.02.138-.028.207-.044.322-.1.653-.153 1.01-.054.362-.278 1.381-.827 2.206-.55.826-1.12 1.077-1.79 1.077-.952 0-1.375-.45-1.698-1.23-.323-.78-.42-2.02-.44-3.688a9.914 9.914 0 0 1 .173-.045c.425-.102.87-.15 1.327-.155.665-.007 1.36.08 2.005.27.39.115.762.267 1.09.455a3.99 3.99 0 0 1 .34.213c0 .001 0 .001-.001.002l.002-.322zm5.265.31.01.024c.072.15.16.39.252.68.138.43.275.96.38 1.41.104.45.175.85.175 1.07 0 1.12-.25 2.22-.731 3.006-.48.783-1.12 1.21-2.069 1.21-.8 0-1.235-.216-1.54-.523-.306-.307-.48-.78-.48-1.478 0-.618-.166-1.295-.31-1.77a10.12 10.12 0 0 0-.169-.49c.146-.006.294-.016.443-.03.5-.05 1.012-.143 1.488-.343.474-.2.888-.497 1.177-.937.145-.22.25-.463.327-.714.235.074.476.163.72.265.267.11.524.24.768.38l.082.046-.324-.806z" fill="#336791"/>
            </svg>
          </motion.div>

          {/* Decorative Dots */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>
    </section>
   
  );
};

export default Hero;