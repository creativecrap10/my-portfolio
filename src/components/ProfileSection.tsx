import React from 'react';
import { MapPin, Globe, Check, Users, FolderOpen, UserPlus, Dribbble, Linkedin, Twitter } from 'lucide-react';
import { User } from '../types';
import ContactModal from './ContactModal';

interface ProfileSectionProps {
  user: User;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 filter brightness-50"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-48 h-48 lg:w-[500px] lg:h-auto  transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/projects/profileperson.png"
                  alt={user.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-90 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-90 animate-bounce delay-500"></div>
              <div className="absolute top-4 -left-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -top-2 right-8 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-80 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left pb-16">
            <div className="mb-6">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-pulse">
                  👋 Welcome to my Portfolio
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">{user.name}</h1>
                {user.verified && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-xl animate-pulse">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                )}
              </div>
              <p className="text-2xl lg:text-3xl text-gray-200 mb-6 drop-shadow-lg font-medium">UI/UX Designer & Visual Storyteller</p>
            </div>

            <p className="text-gray-100 text-xl lg:text-2xl mb-8 max-w-3xl leading-relaxed drop-shadow-lg">{user.bio}</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-gray-200">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-lg font-medium">{user.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <a href={`https://${user.website}`} className="text-blue-300 hover:text-blue-100 transition-colors text-lg font-medium">
                  {user.website}
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-16 mb-10">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-2xl">{formatNumber(user.followers)}</div>
                <div className="flex items-center justify-center space-x-2 text-gray-200">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">Followers</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-2xl">{formatNumber(user.following)}</div>
                <div className="flex items-center justify-center space-x-2 text-gray-200">
                  <UserPlus className="h-4 w-4" />
                  <span className="text-sm font-medium">Following</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-2xl">{user.projects}</div>
                <div className="flex items-center justify-center space-x-2 text-gray-200">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">Projects</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-10">
              <a href="#" className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/30 hover:scale-110 group">
                <Dribbble className="h-6 w-6 text-pink-400 group-hover:text-pink-300" />
              </a>
              <a href="#" className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/30 hover:scale-110 group">
                <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a href="#" className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/30 hover:scale-110 group">
                <Twitter className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
              >
                Visit Now
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <button className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl hover:border-blue-400 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 group">
                Download
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default ProfileSection;