import React, { useEffect, useRef } from 'react';
import { X, Eye, Heart, Share2, ExternalLink, Calendar, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { mockUser, mockProjects } from '../data/mockData';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onProjectClick: (projectId: string) => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  isOpen, 
  onClose, 
  onProjectClick 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle video autoplay
  useEffect(() => {
    if (isOpen && project?.category === 'Animation Videos' && videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to start
      videoRef.current.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedProjects = mockProjects
    .filter(p => p.id !== project.id)
    .slice(0, 6);

  const currentIndex = mockProjects.findIndex(p => p.id === project.id);
  const nextProject = mockProjects[currentIndex + 1];
  const prevProject = mockProjects[currentIndex - 1];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Fixed Action Icons - Right Side */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-60 flex flex-col gap-3">
        {/* Profile/Share */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white rounded-full cursor-pointer hover:scale-110 transition-transform">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-white font-medium">Share</span>
        </div>

        {/* Message */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <svg viewBox="0 0 18 18" className="w-5 h-5 text-gray-800">
              <path d="M9,10.094l9-6.7615v-.75A.5735.5735,0,0,0,17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835V3.318Z"></path>
              <polygon points="12.389 8.981 18 13.184 18 6.667 18 4.771"></polygon>
              <path d="M11.433,9.7,9.645,11.047a1.086,1.086,0,0,1-1.29,0L6.541,9.6875,0,14.534v.883A.573.573,0,0,0,.5625,16h16.875A.573.573,0,0,0,18,15.417v-.795Z"></path>
              <polygon points="5.582 8.969 0 4.756 0 6.667 0 13.097"></polygon>
            </svg>
          </div>
          <span className="text-xs text-white font-medium">Message</span>
        </div>

        {/* Save */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
              <path d="M5.69,3.395,7.97,5.487h6.217V7.579H2.858V3.743a.351.351,0,0,1,.354-.349ZM5.69,2H3.212a1.757,1.757,0,0,0-1.77,1.743V7.579h-1a.356.356,0,0,0-.27.123A.345.345,0,0,0,.1,7.985L1.336,14.68a.705.705,0,0,0,.7.572H15.012a.705.705,0,0,0,.7-.572L16.95,7.985a.345.345,0,0,0-.079-.283.356.356,0,0,0-.27-.123h-1V4.789a.7.7,0,0,0-.708-.7H8.523L6.859,2.514A1.657,1.657,0,0,0,5.69,2Z" transform="translate(-0.023 -0.5)"></path>
            </svg>
          </div>
          <span className="text-xs text-white font-medium">Save</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Share2 className="w-5 h-5 text-gray-800" />
          </div>
          <span className="text-xs text-white font-medium">Share</span>
        </div>

        {/* Like */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs text-white font-medium">Like</span>
        </div>
      </div>

      {/* Close Button - Top Right */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-60 w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
      >
        <X size={20} className="text-white" />
      </button>

      {/* Main Content */}
      <div className="w-full h-full overflow-y-auto modal-scrollbar">
        <div className="mx-auto px-4 py-4 sm:pl-4 sm:pr-16 sm:max-w-sm md:pl-4 md:pr-10 md:max-w-4xl xl:max-w-7xl xl:py-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-white text-lg">{project.title}</div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="font-semibold">{mockUser.name}</span>
                <span>•</span>
                <span className="text-blue-400 cursor-pointer hover:text-blue-300">Follow</span>
              </div>
            </div>
          </div>

{/* Project Media */}
<div className="space-y-6 mb-8">
  {project.category === 'Animation Videos' && project.videoUrl ? (
    // Fixed height video player
    <div className="relative w-full h-[500px] flex justify-center items-center bg-black rounded-lg shadow-lg overflow-hidden">
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        className=" h-[500px] object-cover rounded-lg"
        poster={project.thumbnail}
      >
        <source src={project.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    // Images with fixed height and cover (no contain)
    <>
      {project.images && project.images.length > 0 ? (
        project.images.map((image, index) => (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden shadow-lg bg-black"
          >
            <img
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))
      ) : (
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg bg-black">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  )}
</div>



          {/* Project Details */}
          <div className="space-y-6 mb-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(project.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{formatNumber(project.views)} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{formatNumber(project.likes)} likes</span>
              </div>
              {project.featured && (
                <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              )}
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {project.category}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-200 leading-relaxed">
              {project.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Sections */}
          <div className="space-y-8 mb-12">
            {project.problem && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{project.solution}</p>
              </section>
            )}

            {project.process && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Design Process</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{project.process}</p>
              </section>
            )}

            {project.results && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Results & Impact</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{project.results}</p>
              </section>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Role</h4>
                <p className="text-white font-medium">UI/UX Designer</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Year</h4>
                <p className="text-white font-medium">{new Date(project.date).getFullYear()}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Duration</h4>
                <p className="text-white font-medium">2-3 weeks</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Category</h4>
                <p className="text-white font-medium">{project.category}</p>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-gray-700 pt-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">More Projects</h2>
                <button
                  onClick={onClose}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  View All Projects
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    onClick={() => onProjectClick(relatedProject.id)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                      <img
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <h3 className="font-medium text-white text-sm group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{formatNumber(relatedProject.views)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{formatNumber(relatedProject.likes)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Arrows */}
          {(prevProject || nextProject) && (
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
              {prevProject ? (
                <button
                  onClick={() => onProjectClick(prevProject.id)}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Previous</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </button>
              ) : (
                <div></div>
              )}
              
              {nextProject && (
                <button
                  onClick={() => onProjectClick(nextProject.id)}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Next</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
