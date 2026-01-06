import React from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const frontendSkills = [
    { icon: 'fa-brands fa-html5', name: 'HTML', color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { icon: 'fa-brands fa-css3-alt', name: 'CSS', color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { icon: 'fa-brands fa-js', name: 'JavaScript', color: 'text-yellow-400', bgColor: 'bg-yellow-100' },
    { icon: 'fa-brands fa-react', name: 'React', color: 'text-sky-400', bgColor: 'bg-sky-100' },
    { icon: 'fa-solid fa-wind', name: 'Tailwind', color: 'text-teal-500', bgColor: 'bg-teal-100' },
    { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap', color: 'text-purple-600', bgColor: 'bg-purple-100' }
  ];

  const backendSkills = [
    { icon: 'fa-brands fa-node-js', name: 'Node.js', color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: 'fa-solid fa-server', name: 'Express', color: 'text-gray-600', bgColor: 'bg-gray-100' },
    { icon: 'fa-solid fa-database', name: 'MongoDB', color: 'text-green-700', bgColor: 'bg-green-100' }
  ];

  const toolsSkills = [
    { icon: 'fa-solid fa-fire', name: 'Firebase', color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { icon: 'fa-solid fa-code', name: 'VS Code', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { icon: 'fa-brands fa-git-alt', name: 'Git', color: 'text-red-600', bgColor: 'bg-red-100' },
    { icon: 'fa-brands fa-github', name: 'GitHub', color: 'text-gray-800', bgColor: 'bg-gray-100' },
    { icon: 'fa-solid fa-palette', name: 'Canva', color: 'text-purple-600', bgColor: 'bg-purple-100' }
  ];

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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const SkillIcon = ({ skill, index, delay = 0 }) => (
    <motion.div
      className="space-y-2 group cursor-pointer"
      variants={skillVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: delay + index * 0.1 }}
      whileHover={{ 
        scale: 1.08,
        y: -3,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-16 h-16 mx-auto rounded-full ${skill.bgColor} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.8
        }}
      >
        <motion.i 
          className={`${skill.icon} text-4xl ${skill.color}`}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      </motion.div>
      <motion.p 
        className="text-sm font-medium text-center group-hover:text-indigo-600 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + index * 0.1 + 0.3 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );

  return (
    <section 
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
        <motion.h3 
          className="text-indigo-600 font-medium"
          animate={{
            color: ['#4f46e5', '#7c3aed', '#ec4899', '#4f46e5'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Skills
        </motion.h3>
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
          My Technical Skills
        </motion.h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Frontend */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          {/* Card background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          
          <motion.h3 
            className="text-xl font-semibold mb-8 text-center relative z-10"
            animate={{
              color: ['#1f2937', '#4f46e5', '#1f2937'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Frontend
          </motion.h3>
          
          <div className="grid grid-cols-3 gap-6 text-center relative z-10">
            {frontendSkills.map((skill, index) => (
              <SkillIcon key={skill.name} skill={skill} index={index} delay={0.5} />
            ))}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          {/* Card background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          
          <motion.h3 
            className="text-xl font-semibold mb-8 text-center relative z-10"
            animate={{
              color: ['#1f2937', '#059669', '#1f2937'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            Backend
          </motion.h3>
          
          <div className="grid grid-cols-2 gap-6 text-center relative z-10">
            {backendSkills.slice(0, 2).map((skill, index) => (
              <SkillIcon key={skill.name} skill={skill} index={index} delay={1} />
            ))}
            <div className="col-span-2 flex justify-center">
              <SkillIcon skill={backendSkills[2]} index={2} delay={1} />
            </div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          {/* Card background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          
          <motion.h3 
            className="text-xl font-semibold mb-8 text-center relative z-10"
            animate={{
              color: ['#1f2937', '#ea580c', '#1f2937'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            Tools & Services
          </motion.h3>
          
          <div className="grid grid-cols-2 gap-4 text-center relative z-10">
            {toolsSkills.slice(0, 4).map((skill, index) => (
              <SkillIcon key={skill.name} skill={skill} index={index} delay={1.5} />
            ))}
            <div className="col-span-2 flex justify-center">
              <SkillIcon skill={toolsSkills[4]} index={4} delay={1.5} />
            </div>
          </div>

          {/* Additional decorative elements */}
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 bg-orange-200 rounded-full opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating skill indicators */}
      <motion.div
        className="absolute top-1/2 left-4 hidden lg:block"
        animate={{
          y: [-8, 8, -8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <i className="fa-solid fa-code text-lg"></i>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-4 hidden lg:block"
        animate={{
          y: [8, -8, 8],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <i className="fa-solid fa-laptop-code text-sm"></i>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;