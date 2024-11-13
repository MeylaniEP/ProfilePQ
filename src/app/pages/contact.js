import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-200 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-12">Contact Me</h2>
      
      {/* Main Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Phone Card (Clickable WhatsApp link) */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-72 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">📞 Phone</h3>
          <a
            href="tel:+6281217478861"
            className="text-gray-800 text-lg hover:text-blue-600"
          >
            +62812-1747-8861
          </a>
        </div>

        {/* Email Card (Clickable Email link) */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-72 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">📧 Email</h3>
          <a
            href="mailto:meylaniekap1105@gmail.com"
            className="text-gray-800 text-lg hover:text-blue-600"
          >
            meylaniekap1105@gmail.com
          </a>
        </div>
        
        {/* Address Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-72 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">📍 Address</h3>
          <p className="text-gray-800 text-lg">
            <a
              href="https://maps.app.goo.gl/2ZJ25KKB1JzRekkf9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Kutu Asem, Sinduadi, Mlati, Sleman, DI Yogyakarta
            </a>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {/* LinkedIn Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-72 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/meylani-eka-pertiwi-6a494b31a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            View Profile
          </a>
        </div>

        {/* GitHub Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-72 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">GitHub</h3>
          <a
            href="https://github.com/MeylaniEP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}
