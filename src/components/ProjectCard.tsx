import React, { useState } from 'react';
import { Eye, Heart, Clock, Star, ArrowRight, Play } from 'lucide-react';
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
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project.id)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1 shadow-lg">
          <Star className="h-3 w-3" />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Content */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onProjectClick(project.id);
            }}
            className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-medium flex items-center space-x-2 shadow-xl hover:bg-white transition-all duration-200 transform hover:scale-105"
          >
            <span>View Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Stats Overlay */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">{formatNumber(project.views)}</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className="flex items-center space-x-1 hover:scale-110 transition-transform"
              >
                <Heart 
                  className={`h-4 w-4 transition-colors ${
                    isLiked ? 'fill-red-500 text-red-500' : 'text-white'
                  }`} 
                />
                <span className="text-sm font-medium">{formatNumber(project.likes + (isLiked ? 1 : 0))}</span>
              </button>
            </div>
            <div className="flex items-center space-x-1 text-xs">
              <Clock className="h-3 w-3" />
              <span>{formatDate(project.date)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 3).map((tool, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{project.tools.length - 3} more
            </span>
          )}
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{formatNumber(project.views)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>{formatNumber(project.likes)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{formatDate(project.date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;