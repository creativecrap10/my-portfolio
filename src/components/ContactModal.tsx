import React from 'react';
import { X, Mail, ExternalLink, Linkedin, MapPin } from 'lucide-react';
import { mockUser } from '../data/mockData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEmailClick = () => {
    window.open(`mailto:${mockUser.email}`, '_blank');
  };

  const handlePortfolioClick = () => {
    window.open(`https://${mockUser.website}`, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(`https://linkedin.com/in/${mockUser.social.linkedin}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 pb-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Profile Section */}
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <img
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">{mockUser.name}</h2>
              <p className="text-blue-600 font-medium mb-3">UI/UX Designer & Visual Storyteller</p>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {mockUser.bio}
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-600">{mockUser.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <ExternalLink className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Portfolio</p>
                  <p className="text-sm text-gray-600">{mockUser.website}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-600">@{mockUser.social.linkedin}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="p-2 bg-green-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-600">{mockUser.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 pt-4 space-y-3">
            <button
              onClick={handleEmailClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handlePortfolioClick}
                className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Portfolio</span>
              </button>

              <button
                onClick={handleLinkedInClick}
                className="bg-blue-50 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <div className="text-center text-xs text-gray-500">
              Available for freelance projects and collaborations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
