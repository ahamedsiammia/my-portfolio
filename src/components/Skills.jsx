import React from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // SVG icons for skills that don't have Font Awesome icons
  const svgIcons = {
    typescript: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-9 h-9">
        <rect width="128" height="128" rx="6" fill="#3178c6"/>
        <path d="M1.5 63.91v62.5h125V1.41H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.58v46.23H45.07V69.26H29.46v-5a49.19 49.19 0 01.12-5.17C29.68 59 39 59 51 59h21.39z" fill="#fff"/>
      </svg>
    ),
    postgresql: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
              <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.94.827 3.104.422 4.818.551 7.19c.022.43.409 4.435 1.72 6.055.09.11.18.214.266.308.146.16.293.26.44.316A10.72 10.72 0 0 0 3.08 16.5c.019 1.687.082 3.304.58 4.523.498 1.218 1.393 1.977 2.93 1.977 1.086 0 2.169-.283 2.823-1.283.654-1 1.002-2.174 1.046-2.5.044-.325.094-.64.138-.96.02-.142.039-.283.058-.422.017-.115.022-.167.03-.208a2.58 2.58 0 0 0 .023-.077l.027-.083c.14.073.288.138.443.192.553.189 1.36.33 2.28.33.818 0 1.538-.108 2.135-.302.028.087.057.176.087.268.046.14.094.286.14.437.15.484.3 1.066.3 1.555 0 .83.298 1.717.893 2.318.594.6 1.497.887 2.637.887 1.4 0 2.427-.62 3.085-1.627.644-1.017.916-2.337.916-3.59 0-.63-.108-1.243-.303-1.835a10.7 10.7 0 0 0 .706-1.712c.56-1.755.7-3.75.7-5.263 0-3.566-.749-6.05-2.08-7.61C19.9.72 18.557.028 17.128 0zm.95 1.688c.99.02 1.914.561 2.668 1.463 1.14 1.344 1.815 3.598 1.815 6.933 0 1.486-.136 3.35-.646 4.97-.31.97-.775 1.865-1.43 2.49a3.742 3.742 0 0 1-.16-.404c-.144-.41-.307-.93-.46-1.4-.152-.472-.296-.924-.41-1.273-.113-.348-.213-.608-.28-.726a.685.685 0 0 0-.028-.045c.76-.56 1.467-1.367 1.996-2.532.636-1.393.95-3.224.95-5.477 0-1.67-.23-3.056-.658-4.084a5.698 5.698 0 0 0-.39-.77 8.914 8.914 0 0 1 .633-.145zm-3.107.37c.232.01.45.04.657.088.087.02.178.044.263.072a4.96 4.96 0 0 1 .571.492c.374.38.687.947.917 1.684.46 1.476.55 3.495.55 5.57 0 2.135-.29 3.723-.817 4.84-.527 1.116-1.22 1.695-2.133 1.895-.232-.022-.466-.025-.7-.03-.247-.004-.494-.01-.723-.04-.37-.045-.643-.132-.857-.27-.426-.27-.696-.75-.87-1.463-.175-.714-.232-1.636-.232-2.757 0-1.072.1-2.09.358-2.922.257-.832.676-1.445 1.373-1.773.356-.168.58-.516.57-.908-.01-.392-.25-.748-.62-.896-.668-.266-1.364-.3-2.015-.3a5.96 5.96 0 0 0-.694.044c-.116-.22-.237-.496-.35-.828-.257-.748-.42-1.697-.397-2.697a6.08 6.08 0 0 1 .697-.165c.545-.098 1.13-.148 1.688-.148 1.245 0 2.33.247 3.164.487l.047.014a5.97 5.97 0 0 0-.196-.015zm-6.052.195c.246.003.482.025.704.065-.033.05-.065.1-.097.152-.457.752-.765 1.69-.946 2.657a8.09 8.09 0 0 0-.148 1.4c-.468.151-.97.37-1.468.678-.2.125-.396.263-.585.414A5.72 5.72 0 0 0 5.5 5.887c-.14-.3-.31-.56-.507-.773a4.46 4.46 0 0 0-.1-.1c.282-.458.807-.873 1.54-1.1.72-.224 1.54-.287 2.226-.287.254 0 .499.012.73.025h.003zm-4.836.83c.002 0 .01 0 .012.002l.05.01c.12.029.27.086.438.188.337.202.703.557 1.003 1.1.301.545.52 1.266.566 2.156.04.776-.05 1.598-.396 2.328a5.4 5.4 0 0 0-.56-.056c-.95 0-1.808.186-2.508.646-.113-.9-.394-3.87-.518-4.54.006-.024.038-.066.096-.122.275-.263.756-.484 1.257-.638a4.87 4.87 0 0 1 .56-.074zm8.038 5.423c.082 0 .163.001.244.004.39.012.712.04.977.085.01.058.022.143.035.254.034.293.052.71.052 1.31 0 1.074-.056 1.927-.186 2.576-.13.65-.32 1.043-.547 1.275-.227.232-.521.374-1.002.453a7.847 7.847 0 0 1-1.08.07c-.714 0-1.356-.106-1.752-.237a2.132 2.132 0 0 1-.386-.168 8.91 8.91 0 0 0 .07-.5c.05-.452.09-.948.09-1.426 0-.8-.08-1.567-.324-2.218-.078-.21-.17-.404-.28-.58.166-.12.37-.228.6-.317.495-.19 1.106-.3 1.794-.3.27 0 .53.014.775.025.274.012.537.024.756.024l.154-.33zm-2.14 7.65c-.01.07-.02.138-.028.207-.044.322-.1.653-.153 1.01-.054.362-.278 1.381-.827 2.206-.55.826-1.12 1.077-1.79 1.077-.952 0-1.375-.45-1.698-1.23-.323-.78-.42-2.02-.44-3.688a9.914 9.914 0 0 1 .173-.045c.425-.102.87-.15 1.327-.155.665-.007 1.36.08 2.005.27.39.115.762.267 1.09.455a3.99 3.99 0 0 1 .34.213c0 .001 0 .001-.001.002l.002-.322zm5.265.31.01.024c.072.15.16.39.252.68.138.43.275.96.38 1.41.104.45.175.85.175 1.07 0 1.12-.25 2.22-.731 3.006-.48.783-1.12 1.21-2.069 1.21-.8 0-1.235-.216-1.54-.523-.306-.307-.48-.78-.48-1.478 0-.618-.166-1.295-.31-1.77a10.12 10.12 0 0 0-.169-.49c.146-.006.294-.016.443-.03.5-.05 1.012-.143 1.488-.343.474-.2.888-.497 1.177-.937.145-.22.25-.463.327-.714.235.074.476.163.72.265.267.11.524.24.768.38l.082.046-.324-.806z" fill="#336791"/>
            </svg>
    ),
    prisma: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9" fill="#2D3748">
        <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.199.633L2.266 15.546a1.316 1.316 0 0 0 .024 1.393l4.182 6.6a1.31 1.31 0 0 0 1.11.614h.048a1.31 1.31 0 0 0 1.106-.669l2.567-4.594 4.039 5.694a1.32 1.32 0 0 0 1.067.553h.068a1.316 1.316 0 0 0 1.066-.623l4.264-6.786a1.316 1.316 0 0 0 0-1.443zM9.118 18.455a.34.34 0 0 1-.283.168h-.048a.337.337 0 0 1-.286-.157L4.32 12.01l7.428-6.602-2.63 13.047zm7.543 2.474a.337.337 0 0 1-.273.158h-.068a.337.337 0 0 1-.273-.141l-4.18-5.891 2.301-4.12 5.371 7.516-2.878 2.478z"/>
      </svg>
    ),
    neondb: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect width="24" height="24" rx="4" fill="#00E5BF"/>
        <path d="M5 5h9.5a4.5 4.5 0 0 1 0 9H10v5L5 14V5z" fill="#0C0C0C"/>
        <path d="M14.5 14H10v-4h4.5a2 2 0 0 1 0 4z" fill="#00E5BF"/>
      </svg>
    ),
    postman: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.851.851 0 1 0-1.204-1.204l-4.453 4.452-1.551-1.551a.71.71 0 0 1 0-1.004l4.46-4.46a3.56 3.56 0 0 1 5.033 0 3.56 3.56 0 0 1 0 5.033zm-7.764 7.066-.502.503-.503-.503.503-.502.502.502zm-1.304 1.304-.502.502-.503-.502.502-.503.503.503zm1.304 1.304-.502.502-.503-.502.502-.503.503.503zm3.697-3.696-.501.502-.503-.502.502-.502.502.502zm1.304 1.303-.502.502-.502-.502.502-.502.502.502zm1.304 1.304-.502.502-.502-.502.502-.503.502.503zm-2.608-2.607-.502.502-.502-.502.502-.502.502.502zm1.304 1.303-.502.502-.502-.502.502-.502.502.502zm1.304 1.304-.502.502-.502-.502.502-.502.502.502zm-6.522 1.304-.502.502-.502-.502.502-.502.502.502zm1.304 1.303-.502.502-.502-.502.502-.502.502.502zm1.304 1.304-.501.501-.502-.501.501-.502.502.502zm-2.608-2.607-.502.502-.502-.502.502-.502.502.502zm1.304 1.304-.502.502-.502-.502.502-.502.502.502zm1.303 1.304-.501.501-.502-.501.501-.503.502.503zm-2.607 1.303-.502.502-.502-.502.502-.502.502.502zm1.304 1.304-.502.502-.502-.502.502-.503.502.503zm-2.608-2.607-.502.502-.502-.502.502-.502.502.502z" fill="#FF6C37"/>
      </svg>
    ),
    beekeeper: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect width="24" height="24" rx="4" fill="#FCC842"/>
        <path d="M12 3.5c-1.2 0-2.2.5-2.9 1.3C8.4 5.5 8 6.5 8 7.5c0 .8.2 1.5.6 2.1-.4.3-.6.7-.6 1.2 0 .6.3 1.1.8 1.4-.5.4-.8 1-.8 1.6 0 1.2 1.1 2.2 2.5 2.2h4c1.4 0 2.5-1 2.5-2.2 0-.6-.3-1.2-.8-1.6.5-.3.8-.8.8-1.4 0-.5-.2-.9-.6-1.2.4-.6.6-1.3.6-2.1 0-1-.4-2-1.1-2.7C14.2 4 13.2 3.5 12 3.5z" fill="#1a1a1a"/>
        <circle cx="10.5" cy="7.5" r=".8" fill="#FCC842"/>
        <circle cx="13.5" cy="7.5" r=".8" fill="#FCC842"/>
        <path d="M10 17.5h4M9 19.5h6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 9.5c-1.5.5-2.5 1.5-2.5 2.5s1 2 2.5 2.5M17 9.5c1.5.5 2.5 1.5 2.5 2.5s-1 2-2.5 2.5" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  };

  const frontendSkills = [
    { icon: 'fa-brands fa-html5', name: 'HTML', color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { icon: 'fa-brands fa-css3-alt', name: 'CSS', color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { icon: 'fa-brands fa-js', name: 'JavaScript', color: 'text-yellow-400', bgColor: 'bg-yellow-100' },
    { icon: 'fa-brands fa-react', name: 'React', color: 'text-sky-400', bgColor: 'bg-sky-100' },
    { icon: 'fa-solid fa-wind', name: 'Tailwind', color: 'text-teal-500', bgColor: 'bg-teal-100' },
    { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap', color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { svg: 'typescript', name: 'TypeScript', bgColor: 'bg-blue-100' }
  ];

  const backendSkills = [
    { icon: 'fa-brands fa-node-js', name: 'Node.js', color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: 'fa-solid fa-server', name: 'Express', color: 'text-gray-600', bgColor: 'bg-gray-100' },
    { icon: 'fa-solid fa-database', name: 'MongoDB', color: 'text-green-700', bgColor: 'bg-green-100' },
    { svg: 'prisma', name: 'Prisma', bgColor: 'bg-slate-100' },
    { svg: 'postgresql', name: 'PostgreSQL', bgColor: 'bg-blue-100' },
    { svg: 'neondb', name: 'Neon DB', bgColor: 'bg-emerald-100' }
  ];

  const toolsSkills = [
    { icon: 'fa-solid fa-fire', name: 'Firebase', color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { icon: 'fa-solid fa-code', name: 'VS Code', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { icon: 'fa-brands fa-git-alt', name: 'Git', color: 'text-red-600', bgColor: 'bg-red-100' },
    { icon: 'fa-brands fa-github', name: 'GitHub', color: 'text-gray-800', bgColor: 'bg-gray-100' },
    { svg: 'postman', name: 'Postman', bgColor: 'bg-orange-100' },
    { svg: 'beekeeper', name: 'Beekeeper', bgColor: 'bg-yellow-100' }
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
        {skill.svg ? (
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          >
            {svgIcons[skill.svg]}
          </motion.div>
        ) : (
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
        )}
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
          
          <div className="grid grid-cols-3 gap-6 text-center relative z-10">
            {backendSkills.map((skill, index) => (
              <SkillIcon key={skill.name} skill={skill} index={index} delay={1} />
            ))}
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
          
          <div className="grid grid-cols-3 gap-4 text-center relative z-10">
            {toolsSkills.map((skill, index) => (
              <SkillIcon key={skill.name} skill={skill} index={index} delay={1.5} />
            ))}
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