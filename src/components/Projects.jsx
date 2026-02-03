
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    {
      id: 1,
      title: 'Blood Donation Application',
      image: 'https://i.ibb.co.com/G3VNGhSG/Screenshot-2025-12-31-185458.png',
      description: 'A comprehensive blood donation platform that connects donors with recipients. Features include donor registration, blood request management, and location-based matching.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['User Authentication', 'Rolebase Authentication', 'Blood Request System', 'Donor Management', 'Location Services'],
      liveLink: 'https://animated-druid-2f5fd8.netlify.app',
      codeLink: 'https://github.com/ahamedsiammia/blood-donation-application.git'
    },
    {
      id: 2,
      title: 'Car Sport',
      image: 'https://i.ibb.co.com/1YqsjJNV/Screenshot-2025-12-31-190637.png',
      description: 'A modern car showcase website featuring sports cars with detailed specifications, image galleries, and comparison tools.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      features: ['Car Gallery', 'Specification Display', 'Responsive Design', 'Interactive UI'],
      liveLink: 'https://silver-piroshki-d97485.netlify.app',
      codeLink: 'https://github.com/ahamedsiammia/my-assignment10-client.git'
    },
    {
      id: 3,
      title: 'Hero Apps',
      image: 'https://i.ibb.co.com/b5W6Q6mP/Screenshot-2026-01-05-191106.png',
      description: 'A collection of utility applications designed to help users with daily tasks. Clean interface with multiple integrated tools.',
      technologies: ['React', 'CSS3', 'JavaScript', 'API Integration'],
      features: ['Multi-tool Interface', 'User Dashboard', 'Data Management', 'API Integration'],
      liveLink: 'https://sunny-monstera-cbee7e.netlify.app',
      codeLink: 'https://github.com/ahamedsiammia/my-hero-apps'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Title */}
      <motion.div 
        className="text-center mb-16"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >

        <motion.h2 
          className="text-3xl md:text-4xl font-bold mt-2"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          My Best Projects
        </motion.h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Card background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                animate={{
                  filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
              
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
            
            <div className="p-6 relative z-10">
              <motion.h3 
                className="text-xl font-semibold mb-4 group-hover:text-indigo-600 transition-colors duration-300"
                animate={{
                  color: ['#1f2937', '#4f46e5', '#1f2937'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8
                }}
              >
                {project.title}
              </motion.h3>
              
              <motion.button 
                onClick={() => openModal(project)}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px -8px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.i 
                  className="fa-solid fa-eye text-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                View More
              </motion.button>
            </div>

            {/* Floating project number */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {project.id}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <motion.div 
                  className="flex justify-between items-center mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <motion.button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </motion.div>
                
                <motion.img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
                
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.description}
                </motion.p>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button 
                    onClick={() => window.open(selectedProject.liveLink, '_blank')}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px -8px rgba(79, 70, 229, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.i 
                      className="fa-solid fa-external-link-alt text-sm"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Live Demo
                  </motion.button>
                  <motion.button 
                    onClick={() => window.open(selectedProject.codeLink, '_blank')}
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-2 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px -8px rgba(75, 85, 99, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.i 
                      className="fa-brands fa-github text-sm"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    View Code
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;