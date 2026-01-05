import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      value: 'md7559263@gmail.com',
      link: 'mailto:md7559263@gmail.com',
      linkText: 'Send Email',
      color: 'text-indigo-600'
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Phone',
      value: '01956618840',
      link: 'tel:01956618840',
      linkText: 'Call Now',
      color: 'text-green-500'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      title: 'WhatsApp',
      value: '01862754769',
      link: 'https://wa.me/01862754769',
      linkText: 'Message Now',
      color: 'text-teal-500'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-16">
        <h3 className="text-indigo-600 font-medium">Contact</h3>
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <i className={`${method.icon} text-4xl ${method.color} mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
            <p className="text-sm text-gray-600">{method.value}</p>
            <a 
              href={method.link} 
              target={method.title === 'WhatsApp' ? '_blank' : undefined}
              rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className={`mt-4 ${method.color.replace('text-', 'text-')} font-medium hover:underline`}
            >
              {method.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;