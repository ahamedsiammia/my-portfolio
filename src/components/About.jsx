import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const [counters, setCounters] = useState({ years: 0, projects: 10, companies: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Counter animation
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      // Animate years counter
      let yearsCount = 0;
      const yearsTimer = setInterval(() => {
        if (yearsCount <= 2) {
          setCounters(prev => ({ ...prev, years: yearsCount }));
          yearsCount++;
        } else {
          clearInterval(yearsTimer);
        }
      }, 200);

      // Animate projects counter
      let projectsCount = 0;
      const projectsTimer = setInterval(() => {
        if (projectsCount <= 15) {
          setCounters(prev => ({ ...prev, projects: projectsCount }));
          projectsCount++;
        } else {
          clearInterval(projectsTimer);
        }
      }, 100);

      // Animate companies counter
      let companiesCount = 0;
      const companiesTimer = setInterval(() => {
        if (companiesCount <= 5) {
          setCounters(prev => ({ ...prev, companies: companiesCount }));
          companiesCount++;
        } else {
          clearInterval(companiesTimer);
        }
      }, 150);

      return () => {
        clearInterval(yearsTimer);
        clearInterval(projectsTimer);
        clearInterval(companiesTimer);
      };
    }
  }, [isInView, hasAnimated]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Image */}
      <motion.div 
        className="flex justify-center md:justify-start"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="https://i.ibb.co.com/Ps7nk51V/Whats-App-Image-2025-06-29-at-11-36-10-41267729.jpg"
            alt="About Siam"
            className="w-72 md:w-80 rounded-2xl shadow-2xl"
            animate={{
              boxShadow: [
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 25px 50px -12px rgba(79, 70, 229, 0.3)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating badge */}
          <motion.div
            className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            Frontend Dev
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3 
          className="text-indigo-600 font-medium"
          variants={itemVariants}
        >
          About Me
        </motion.h3>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Frontend Developer
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-500 leading-relaxed max-w-lg"
          variants={itemVariants}
        >
          Web developer with extensive knowledge and years of experience, working
          in web technologies and UI / UX design, delivering quality work.
        </motion.p>

        {/* Animated Stats */}
        <motion.div 
          className="flex gap-8"
          variants={itemVariants}
        >
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="text-center"
          >
            <motion.h4 
              className="text-2xl font-bold text-indigo-600"
              animate={{ 
                scale: hasAnimated ? [1, 1.2, 1] : 1,
              }}
              transition={{ 
                duration: 0.5,
                delay: 1
              }}
            >
              {counters.years.toString().padStart(2, '0')}+
            </motion.h4>
            <p className="text-sm text-gray-500">Years experience</p>
          </motion.div>
          
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="text-center"
          >
            <motion.h4 
              className="text-2xl font-bold text-purple-600"
              animate={{ 
                scale: hasAnimated ? [1, 1.2, 1] : 1,
              }}
              transition={{ 
                duration: 0.5,
                delay: 1.5
              }}
            >
              {counters.projects}+
            </motion.h4>
            <p className="text-sm text-gray-500">Completed projects</p>
          </motion.div>
          
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="text-center"
          >
            <motion.h4 
              className="text-2xl font-bold text-pink-600"
              animate={{ 
                scale: hasAnimated ? [1, 1.2, 1] : 1,
              }}
              transition={{ 
                duration: 0.5,
                delay: 2
              }}
            >
              {counters.companies.toString().padStart(2, '0')}+
            </motion.h4>
            <p className="text-sm text-gray-500">Companies worked</p>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={() => {
            // Create a downloadable CV file
            const cvContent = `
SIAM AHAMED - Frontend Developer

Contact Information:
- Email: md7559263@gmail.com
- Phone: 01956618840
- WhatsApp: 01862754769
- LinkedIn: https://www.linkedin.com/in/siam-ahamed/
- GitHub: https://github.com/ahamedsiammia

Experience: 2+ Years
Completed Projects: 15+
Companies Worked: 5+

Skills:
Frontend: HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap
Backend: Node.js, Express, MongoDB
Tools: Firebase

Education:
- High School: Raindiya High School (SSC)
- Higher Education: Mymensingh Polytechnic Institute (Computer Science & Technology, 4th Semester - Ongoing)

Projects:
1. Blood Donation Application
2. Car Sport
3. Hero Apps
            `;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Siam_Ahamed_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </ motion.svg>
        </motion.button>

        {/* Skills Preview */}
        <motion.div
          className="flex flex-wrap gap-2 pt-4"
          variants={itemVariants}
        >
          {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'].map((skill, index) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;