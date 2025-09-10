import React from 'react';
import { MapPin, Mail, Download, Palette, Search, Zap, PenTool, Image, Play, Box, Code, Camera, Megaphone, FileText, Users } from 'lucide-react';

const AboutPage = () => {
  const mockUser = {
    name: "Jones Jebaraj",
    email: "selfdesigner8@gmail.com",
    avatar: "/images/profileperson.png"
  };

  const timelineData = [
    {
      year: "2020",
      title: "Graphic Designer",
      description: "My professional journey began as a Graphic Designer, where I had the opportunity to collaborate on diverse international projects. I specialized in developing creative and impactful logos, which helped me understand the importance of strong visual identity in shaping a brand's presence.",
      skills: ["logos", "visual identity"],
      color: "blue",
      icon: Palette,
      patch: "🎨 LOGO"
    },
    {
      year: "2021", 
      title: "UI/UX Design",
      description: "I transitioned into the field of UI/UX Design, taking on a key role in designing user interfaces for the Mediquince software. I created intuitive and user-friendly screens for both patients and doctors, focusing on improving usability, accessibility, and the overall user journey.",
      skills: ["UI/UX Design", "patients", "doctors", "usability", "accessibility"],
      color: "purple",
      icon: PenTool,
      patch: "🖌️ UI/UX"
    },
    {
      year: "2022",
      title: "Motion Design & Video Editing", 
      description: "I expanded my expertise into motion design and video editing, producing engaging animations and promotional videos for Mediquince. Using tools such as Adobe After Effects and Premiere Pro, I created dynamic marketing content that strengthened the product's brand presence and customer engagement.",
      skills: ["motion design", "video editing", "Adobe After Effects", "Premiere Pro", "animations"],
      color: "green",
      icon: Play,
      patch: "🎬 MOTION"
    },
    {
      year: "2023",
      title: "Frontend Development",
      description: "I began exploring frontend development, learning technologies like HTML, CSS, and JavaScript. This knowledge allowed me to collaborate more effectively with developers, bridge the gap between design and implementation, and ensure that my designs translated seamlessly into functional products.",
      skills: ["frontend development", "HTML", "CSS", "JavaScript"],
      color: "yellow",
      icon: Code,
      patch: "💻 CODE"
    },
    {
      year: "2024",
      title: "Digital Marketing & Social Media",
      description: "My role expanded into digital marketing and social media management, where I created visually appealing digital advertisements and managed company social media accounts. I developed innovative Instagram campaigns for the Mediquince product, driving brand visibility and building stronger engagement with audiences.",
      skills: ["digital marketing", "social media management", "company social media accounts", "Instagram campaigns"],
      color: "pink",
      icon: Megaphone,
      patch: "📱 SOCIAL"
    },
    {
      year: "2025",
      title: "Content Strategy & Flow Design",
      description: "I further enhanced my career by contributing to content strategy and flow design for AIIMTech projects. This included writing effective content for landing pages and designing user flows for major initiatives, such as the Tomlinson School software. These projects challenged me to combine design thinking with storytelling to deliver impactful digital solutions.",
      skills: ["content strategy", "flow design", "landing pages", "Tomlinson School software"],
      color: "indigo",
      icon: FileText,
      patch: "📝 STRATEGY"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-500",
      patch: "bg-blue-500",
      icon: "bg-blue-100 text-blue-600"
    },
    purple: {
      bg: "from-purple-50 to-purple-100", 
      border: "border-purple-500",
      patch: "bg-purple-500",
      icon: "bg-purple-100 text-purple-600"
    },
    green: {
      bg: "from-green-50 to-green-100",
      border: "border-green-500", 
      patch: "bg-green-500",
      icon: "bg-green-100 text-green-600"
    },
    yellow: {
      bg: "from-yellow-50 to-orange-100",
      border: "border-yellow-500",
      patch: "bg-yellow-500", 
      icon: "bg-yellow-100 text-yellow-600"
    },
    pink: {
      bg: "from-pink-50 to-red-100",
      border: "border-pink-500",
      patch: "bg-pink-500",
      icon: "bg-pink-100 text-pink-600"
    },
    indigo: {
      bg: "from-indigo-50 to-blue-100",
      border: "border-indigo-500", 
      patch: "bg-indigo-500",
      icon: "bg-indigo-100 text-indigo-600"
    }
  };

  const highlightSkills = (text, skills) => {
    let highlightedText = text;
    skills.forEach(skill => {
      const regex = new RegExp(`\\b${skill}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<strong class="font-bold text-gray-900 bg-yellow-100 px-1 rounded">$&</strong>`);
    });
    return highlightedText;
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 blur-3xl opacity-30 animate-pulse"></div>
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
              {/* Enhanced Timeline */}
              <div className="lg:col-span-2">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-yellow-500 via-pink-500 to-indigo-500 rounded-full"></div>
                  
                  <div className="space-y-12">
                    {timelineData.map((item, index) => {
                      const IconComponent = item.icon;
                      const colors = colorClasses[item.color];
                      
                      return (
                        <div key={index} className="relative flex items-start">
                          {/* Timeline Dot with Icon */}
                          <div className="relative z-10 flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full ${colors.icon} border-4 border-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300`}>
                              <IconComponent className="h-6 w-6" />
                            </div>
                            {/* Skill Patch */}
                            <div className={`absolute -top-3 -right-8 ${colors.patch} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300`}>
                              {item.patch}
                            </div>
                          </div>
                          
                          {/* Content Card */}
                          <div className="ml-8 flex-1">
                            <div className={`bg-gradient-to-r ${colors.bg} p-8 rounded-2xl ${colors.border} border-l-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                              <div className="flex items-center mb-4">
                                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                                  <span className="text-2xl font-bold text-gray-800">{item.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 ml-4">{item.title}</h3>
                              </div>
                              <div 
                                className="text-lg text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                  __html: highlightSkills(item.description, item.skills) 
                                }}
                              />
                              
                              {/* Skills Tags */}
                              <div className="mt-6 flex flex-wrap gap-2">
                                {item.skills.map((skill, skillIndex) => (
                                  <span 
                                    key={skillIndex}
                                    className="bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                                  >
                                    #{skill.replace(/\s+/g, '')}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
                      <span className="text-gray-700 font-medium">Coimbatore, India</span>
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