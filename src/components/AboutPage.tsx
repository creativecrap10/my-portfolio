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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      
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
                Hi, I'm Tom —{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  UI/UX Designer & Visual Storyteller
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 3 years of experience in designing intuitive digital experiences, 
                I specialize in mobile apps, dashboards, and web UI. I combine aesthetics 
                with functionality to deliver solutions that are both elegant and user-friendly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2 group">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                  <div className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all duration-300"></div>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium flex items-center justify-center space-x-2 group transform hover:-translate-y-1">
                  <Mail className="h-5 w-5" />
                  <span>Get In Touch</span>
                  <div className="w-0 group-hover:w-2 h-2 bg-blue-600 rounded-full transition-all duration-300"></div>
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600  blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="relative w-full max-w-md mx-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-40 blur-2xl animate-bounce"></div>
              <div className="absolute bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 blur-2xl animate-bounce delay-1000"></div>
              <div className="absolute -top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 -left-4 w-4 h-4 bg-green-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  My design journey began during my college years when I discovered the power of 
                  visual communication. What started as a hobby quickly became a passion, and I 
                  found myself spending countless hours learning design principles, studying user 
                  behavior, and experimenting with different tools.
                </p>
                <p>
                  After graduating with a degree in Computer Science, I decided to pursue design 
                  full-time. I started as a junior designer at a creative agency, where I learned 
                  the fundamentals of branding, print design, and client communication. This 
                  experience taught me the importance of understanding business goals and 
                  translating them into effective visual solutions.
                </p>
                <p>
                  As digital products became more prevalent, I naturally gravitated towards UI/UX 
                  design. I was fascinated by the challenge of creating interfaces that were not 
                  only beautiful but also intuitive and functional. This led me to specialize in 
                  mobile app design and web interfaces, where I could combine my technical 
                  background with my design skills.
                </p>
                <p>
                  Today, I work with startups and established companies to create digital 
                  experiences that users love. I believe that great design is invisible – it 
                  should feel natural and effortless to the user while solving real problems 
                  and achieving business objectives.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{mockUser.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href={`mailto:${mockUser.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {mockUser.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
          
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                🚀 My Arsenal
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tools and technologies I use to bring ideas to life</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Box;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 shadow-lg animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-3 flex justify-between items-center">
                    <span>{skill.level}%</span>
                    <span className="text-xs text-gray-500">Expert</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                💼 Career Journey
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My professional journey and key milestones</p>
          </div>
          
          <div className="space-y-8">
            {mockExperience.map((exp, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 group overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold">{exp.company}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0">{exp.period}</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🤝 Ready to Collaborate?
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Let's Work Together</h2>
            <p className="text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project.
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group">
            Start a Project
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;