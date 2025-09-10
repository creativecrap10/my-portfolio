import React, { useState } from 'react';
import { Eye, Heart, Clock, Star, ArrowRight, Play, Wrench } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (projectId: string) => void;
  onVideoPlay?: (videoUrl: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick, onVideoPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-gray-100 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project.id)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-xl animate-pulse">
          <Star className="h-3 w-3" />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Content */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onProjectClick(project.id);
            }}
            className="bg-white/95 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-bold flex items-center space-x-3 shadow-2xl hover:bg-white transition-all duration-300 transform hover:scale-110 text-lg"
          >
            <span>View Project</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Stats Overlay */}
        <div className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-bold">{formatNumber(project.views)}</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full hover:scale-110 transition-transform"
              >
                <Heart 
                  className={`h-4 w-4 transition-colors ${
                    isLiked ? 'fill-red-500 text-red-500' : 'text-white'
                  }`} 
                />
                <span className="text-sm font-bold">{formatNumber(project.likes + (isLiked ? 1 : 0))}</span>
              </button>
            </div>
            <div className="flex items-center space-x-1 text-xs bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              <Clock className="h-3 w-3" />
              <span className="font-medium">{formatDate(project.date)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Category and Tools */}
      <div className="px-8 pb-8">
        <div className="flex items-center justify-between">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {project.category}
          </span>
          
          {/* Tools Icon with Hover */}
          <div className="relative group/tools">
            <div className="flex items-center justify-center bg-gray-100 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 w-12 h-12 rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-110">
              <div className="text-2xl transform group-hover/tools:rotate-12 transition-transform duration-300">
                🛠️
              </div>
            </div>
            
            {/* Tools Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover/tools:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              <div className="bg-gray-900 text-white p-3 rounded-lg shadow-xl min-w-48">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {/* Arrow */}
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden flex items-center justify-between text-sm text-gray-600 pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
              <Eye className="h-4 w-4" />
              <span className="font-medium">{formatNumber(project.views)}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
              <Heart className="h-4 w-4" />
              <span className="font-medium">{formatNumber(project.likes)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
            <Clock className="h-3 w-3" />
            <span className="font-medium">{formatDate(project.date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;