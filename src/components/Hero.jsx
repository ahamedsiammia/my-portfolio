import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  
  const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Web Designer'];
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
    <section className="max-w-7xl mx-auto px-6 py-16 mt-5 grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-screen relative overflow-hidden">
      
      {/* Background Animation Elements */}
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
          High level experience in web design and development knowledge, producing quality work.
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
                src="https://i.ibb.co.com/Cpt9sm7N/IMG-0463.jpg" 
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
            className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-green-100"
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
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg border-2 border-teal-100"
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