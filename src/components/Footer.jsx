import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      icon: 'fa-brands fa-facebook',
      url: 'https://www.facebook.com/farhan.ahamed.siam.2024',
      color: 'text-blue-600 hover:text-blue-500'
    },
    {
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/siam-ahamed/',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: 'fa-brands fa-github',
      url: 'https://github.com/ahamedsiammia',
      color: 'text-gray-400 hover:text-gray-200'
    },
    {
      icon: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/siam.farhanahamed/',
      color: 'text-pink-500 hover:text-pink-400'
    },
    {
      icon: 'fa-solid fa-envelope',
      url: 'mailto:md7559263@gmail.com',
      color: 'text-red-500 hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Name / Brand */}
        <h2 className="text-2xl font-bold mb-4">Siam Ahamed</h2>
        <p className="text-gray-400 mb-6">Let's connect and stay in touch!</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-2xl transition`}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">&copy; 2026 Siam Ahamed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;