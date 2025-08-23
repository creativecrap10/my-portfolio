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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm Tom —{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UI/UX Designer & Visual Storyteller
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 3 years of experience in designing intuitive digital experiences, 
                I specialize in mobile apps, dashboards, and web UI. I combine aesthetics 
                with functionality to deliver solutions that are both elegant and user-friendly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute bottom-8 -right-8 w-40 h-40 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">Tools and technologies I use to bring ideas to life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Box;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{skill.level}%</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600">My professional journey and key milestones</p>
          </div>
          
          <div className="space-y-8">
            {mockExperience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 font-medium">{exp.period}</div>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to bring your ideas to life? I'd love to hear about your project.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;