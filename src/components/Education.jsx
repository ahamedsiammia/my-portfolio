import React from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const educationData = [
    {
      id: 1,
      level: "Higher Education",
      institution: "Mymensingh Polytechnic Institute",
      degree: "Computer Science & Technology",
      status: "4th Semester (Ongoing)",
      year: "2023 - Present",
      description: "Pursuing diploma in Computer Science & Technology with focus on programming, web development, and software engineering principles.",
      icon: "fa-solid fa-graduation-cap",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      achievements: ["Web Development Projects", "Programming Fundamentals", "Database Management", "Software Engineering"]
    },
    {
      id: 2,
      level: "Secondary Education",
      institution: "Raindiya High School",
      degree: "Secondary School Certificate (SSC)",
      status: "Completed - GPA: A+",
      year: "2020 - 2022",
      description: "Completed secondary education with strong foundation in mathematics, science, and computer studies. Achieved excellent academic performance with A+ grade.",
      icon: "fa-solid fa-school",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      achievements: ["Mathematics Excellence", "Science Foundation", "Computer Studies", "Academic Achievement A+"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
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
    hidden: { x: -100, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating academic icons */}
        <motion.div
          className="absolute top-1/4 left-2 md:left-10 hidden sm:block"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
            <i className="fa-solid fa-book text-sm md:text-lg"></i>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-2 md:right-10 hidden sm:block"
          animate={{
            y: [10, -10, 10],
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
            <i className="fa-solid fa-certificate text-xs md:text-sm"></i>
          </div>
        </motion.div>
      </div>

      {/* Title */}
      <motion.div 
        className="text-center mb-12 md:mb-16 px-4"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3 
          className="text-indigo-600 font-medium text-base md:text-lg mb-2"
          animate={{
            color: ['#4f46e5', '#059669', '#7c3aed', '#4f46e5'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Education
        </motion.h3>
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          My Educational Journey
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          Building a strong foundation in computer science and technology through continuous learning and academic excellence.
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line - Hidden on mobile, visible on tablet+ */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-green-500 rounded-full origin-top hidden md:block"
          style={{ height: '100%' }}
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Mobile Timeline Line - Left aligned */}
        <motion.div
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-green-500 rounded-full origin-top md:hidden"
          style={{ height: '100%' }}
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Education Cards */}
        <motion.div 
          className="space-y-8 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`flex items-start relative
                ${/* Mobile: Always left-aligned */ ''}
                md:items-center 
                ${/* Tablet+: Alternating layout */ index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
              variants={cardVariants}
              custom={index}
            >
              {/* Timeline Dot - Mobile (left) and Desktop (center) */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 -translate-y-2 md:translate-y-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                  <motion.i 
                    className={`${edu.icon} text-white text-lg md:text-xl`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                className={`
                  w-full pl-20 md:pl-0
                  ${/* Mobile: Full width with left padding */ ''}
                  md:w-5/12 
                  ${/* Tablet+: Half width with conditional margins */ index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                `}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`bg-gradient-to-br ${edu.bgColor} p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden group`}
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Card background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Year Badge */}
                  <motion.div
                    className={`absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r ${edu.color} text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1 + index * 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.year}
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-gray-800 mb-2"
                      animate={{
                        color: ['#1f2937', '#4f46e5', '#1f2937'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1
                      }}
                    >
                      {edu.level}
                    </motion.h3>
                    
                    <motion.h4 
                      className="text-lg md:text-xl font-semibold text-indigo-600 mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.2 + index * 0.3 }}
                    >
                      {edu.institution}
                    </motion.h4>
                    
                    <motion.p 
                      className="text-base md:text-lg text-gray-700 font-medium mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.4 + index * 0.3 }}
                    >
                      {edu.degree}
                    </motion.p>
                    
                    <motion.p 
                      className="text-sm text-gray-600 mb-3 md:mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.6 + index * 0.3 }}
                    >
                      {edu.status}
                    </motion.p>
                    
                    <motion.p 
                      className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1.8 + index * 0.3 }}
                    >
                      {edu.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 2 + index * 0.3 }}
                    >
                      <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Key Areas:</h5>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            className="bg-white/70 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 2.2 + index * 0.3 + achIndex * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Empty space for opposite side - Only on tablet+ */}
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          animate={{
            boxShadow: [
              "0 10px 20px -5px rgba(79, 70, 229, 0.3)",
              "0 15px 30px -5px rgba(79, 70, 229, 0.4)",
              "0 10px 20px -5px rgba(79, 70, 229, 0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity },
            hover: { duration: 0.2 }
          }}
        >
          <i className="fa-solid fa-rocket"></i>
          <span className="font-semibold">Continuing the Journey</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;