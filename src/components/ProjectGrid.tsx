import React, { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(9); // Show 9 projects initially
  const LOAD_MORE_COUNT = 6; // Load 6 more projects each time

  // Extract unique categories from projects
  const allCategories = Array.from(new Set(projects.map(project => project.category)));
  
  // Filter to show only "Big Projects" category on home page
  const bigProjects = projects.filter(project => project.category === 'Big Projects');

  // Filter and sort projects
  const filteredProjects = bigProjects
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.likes - a.likes;
        case 'views':
          return b.views - a.views;
        case 'recent':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  // Projects to display (limited by displayCount)
  const homePageProjects = filteredProjects.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
        <div className="mb-6 lg:mb-0">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              🎨 Featured Work
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Projects</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Showcasing my finest work across various categories
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Show All Button */}
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-projects'))}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group"
        >
          Show All Projects
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {homePageProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectClick={onProjectClick}
          />
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-block p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-6 text-lg">Explore my complete portfolio with detailed case studies</p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-projects'))}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;