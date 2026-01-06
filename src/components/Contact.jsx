import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Address: ${formData.address}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:md7559263@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      address: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Location',
      value: 'Mymensingh, Bangladesh',
      color: 'text-teal-600',
      iconBg: 'bg-teal-100'
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      value: 'md7559263@gmail.com',
      color: 'text-rose-600',
      iconBg: 'bg-rose-100'
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Phone',
      value: '+880 1956618840',
      color: 'text-emerald-600',
      iconBg: 'bg-emerald-100'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Available',
      value: '24 Hours',
      color: 'text-amber-600',
      iconBg: 'bg-amber-100'
    }
  ];

  const socialLinks = [
    {
      icon: 'fa-brands fa-facebook',
      link: 'https://www.facebook.com/farhan.ahamed.siam.2024',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      icon: 'fa-brands fa-linkedin',
      link: 'https://www.linkedin.com/in/siam-ahamed/',
      color: 'hover:text-blue-700 hover:bg-blue-50'
    },
    {
      icon: 'fa-brands fa-github',
      link: 'https://github.com/ahamedsiammia',
      color: 'hover:text-gray-800 hover:bg-gray-100'
    },
    {
      icon: 'fa-brands fa-discord',
      link: '#',
      color: 'hover:text-indigo-600 hover:bg-indigo-50'
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
    hidden: { y: 30, opacity: 0 },
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
      className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 py-20 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200/30 to-rose-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-200/30 to-amber-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            y: [0, -30, 0],
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
            Have any Questions?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's collaborate! Got an idea or project in mind? I'd love to hear about it. Just fill out the form below and let's connect.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 ${info.iconBg} rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} ${info.color} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-semibold">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 border border-gray-200`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Connect</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name and Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Your Address"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    />
                  </motion.div>
                </div>

                {/* Email and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-200"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Your Subject"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-200"
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 resize-none"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <motion.i 
                      className="fa-solid fa-paper-plane"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;