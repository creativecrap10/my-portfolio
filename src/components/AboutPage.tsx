import React from 'react';
import { MapPin, Mail, Download, Palette, Search, Zap, PenTool, Image, Play, Box } from 'lucide-react';
import { mockUser, mockSkills, mockExperience } from '../data/mockData';

const AboutPage = () => {
  const iconMap: { [key: string]: any } = {
    Palette,
    Search,
    Zap,
    Figma: Box,
    PenTool,
    Image,
    Play,
    Box
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  👋 Hello There!
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm Jones Jebaraj —{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  UI/UX & Graphic Designer
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 5 years of experience in UI/UX and graphic design, I craft seamless 
                digital experiences and engaging visuals that connect brands with their audiences. 
                I also bring expertise in digital marketing design, content creation, and frontend 
                collaboration with developers to ensure design feasibility and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/resume-jones.jebaraj.pdf" 
                  download="Jones_Jebaraj_Resume.pdf"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                  <div className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all duration-300"></div>
                </a>
                <a 
                  href={`mailto:${mockUser.email}`}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium flex items-center justify-center space-x-2 group transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5" />
                  <span>Get In Touch</span>
                  <div className="w-0 group-hover:w-2 h-2 bg-blue-600 rounded-full transition-all duration-300"></div>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600  blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="relative w-full max-w-sm lg:max-w-md mx-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-16 mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                  📖 My Story
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">My Journey</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-l-4 border-blue-500">
                    <p>
                      I started my creative journey with a degree in <b>Visual Communication</b> at 
                      The American College, Madurai. During my early years, I discovered my passion 
                      for crafting designs that communicate stories and enhance user experiences.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-500">
                    <p>
                      My first professional step was at <b>Max Expert, Madurai</b>, where I worked on 
                      branding and UI design projects. This experience helped me understand the 
                      fundamentals of client communication, creative execution, and impactful visuals.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border-l-4 border-green-500">
                    <p>
                      Since 2020, I’ve been the <b>sole designer at AIIMTech Pvt. Ltd.</b>, where I 
                      handled the entire design process for <b>Mediquince</b> (desktop & mobile apps). 
                      From UI/UX to promotional assets, I independently managed design execution 
                      while collaborating with developers and stakeholders for smooth implementation.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border-l-4 border-yellow-500">
                    <p>
                      Today, I specialize in <b>UI/UX design, graphic design, digital marketing 
                      content, and branding</b>. My goal is simple: create designs that look great, 
                      work seamlessly, and leave a lasting impression on users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Sivakasi, India</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <a href="mailto:selfdesigner8@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                        selfdesigner8@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Quick Stats
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5+</div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">60+</div>
                      <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">30+</div>
                      <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      {/* keep mockSkills mapping, just ensure your mockData matches updated skills from resume */}

      {/* Experience Section */}
      {/* keep mockExperience mapping, just ensure your mockData matches resume work experience */}

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🤝 Ready to Collaborate?
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Let's Work Together</h2>
            <p className="text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Have an idea or project in mind? Let's create seamless designs and experiences 
              that delight users and drive business growth.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group">
              <a href="mailto:selfdesigner8@gmail.com?subject=Project Inquiry" className="flex items-center">
                Start a Project
              </a>
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
