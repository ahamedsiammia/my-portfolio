import React from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: 'fa-solid fa-code',
      title: 'Web Application Development',
      description: 'Build full-stack web apps using MERN stack that are scalable, dynamic, and responsive.',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'fa-solid fa-palette',
      title: 'Frontend Development',
      description: 'Create interactive UIs with React.js, Tailwind CSS, and Bootstrap; convert Figma/Adobe XD designs into functional applications.',
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Backend & API Integration',
      description: 'Develop RESTful APIs with Node.js & Express.js, and manage MongoDB databases.',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Performance Optimization',
      description: 'Optimize code for faster loading, mobile-first responsiveness, and cross-browser compatibility.',
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: 'fa-solid fa-tools',
      title: 'Maintenance & Support',
      description: 'Debug and fix live applications, add new features, and provide ongoing support.',
      color: 'from-teal-500 to-cyan-500',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Project Consultation',
      description: 'Advise on project planning, tech stack, and architecture for successful deployment.',
      color: 'from-yellow-500 to-amber-500',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I provide comprehensive web development services to help bring your digital ideas to life with modern technologies and best practices.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" 
              }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <i className={`${service.icon} ${service.iconColor} text-2xl`}></i>
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>

              {/* Gradient Border Animation */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={false}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Ready to start your next project? Let's work together!
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <motion.i 
              className="fa-solid fa-arrow-right"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;