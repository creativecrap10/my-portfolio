import React from 'react';
import { Mail, MapPin, Dribbble, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:hello@tomanderson.design" className="hover:text-blue-400 transition-colors">
                  hello@tomanderson.design
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">Projects</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">Blog</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Dribbble className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Tom Anderson. All rights reserved. Designed with ❤️ in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;