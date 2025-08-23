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
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 filter brightness-75"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60 z-10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-40 h-40 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt={user.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left pb-16">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">{user.name}</h1>
                {user.verified && (
                  <div className="bg-blue-600 rounded-full p-1.5">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
              <p className="text-xl text-gray-200 mb-4 drop-shadow-md">UI/UX Designer & Visual Storyteller</p>
            </div>

            <p className="text-gray-100 text-lg mb-6 max-w-2xl leading-relaxed drop-shadow-md">{user.bio}</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-gray-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-400" />
                <a href={`https://${user.website}`} className="text-blue-300 hover:text-blue-100 transition-colors">
                  {user.website}
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-12 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{formatNumber(user.followers)}</div>
                <div className="flex items-center justify-center space-x-1 text-gray-200">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Followers</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{formatNumber(user.following)}</div>
                <div className="flex items-center justify-center space-x-1 text-gray-200">
                  <UserPlus className="h-4 w-4" />
                  <span className="text-sm">Following</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{user.projects}</div>
                <div className="flex items-center justify-center space-x-1 text-gray-200">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Projects</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a href="#" className="p-3 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-white/30">
                <Dribbble className="h-5 w-5 text-pink-500" />
              </a>
              <a href="#" className="p-3 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-white/30">
                <Linkedin className="h-5 w-5 text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-white/30">
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5"
              >
                Visit Now
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:border-blue-400 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 font-medium shadow-lg">
                Download
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