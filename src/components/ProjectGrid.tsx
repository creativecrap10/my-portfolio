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
  const filterOptions = ['all', ...allCategories];

  // Filter and sort projects
  const filteredProjects = projects
    .filter(project => {
      const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
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
  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMoreProjects = displayCount < filteredProjects.length;

  const handleShowAll = () => {
    // This will be handled by the parent component to navigate to projects page
  };

  // Reset display count when filters change
  React.useEffect(() => {
    setDisplayCount(6); // Show only 6 projects initially
  }, [filterCategory, searchTerm, sortBy]);

  // Show only 6 projects initially on home page
  const homePageProjects = filteredProjects.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Projects</h2>
          <p className="text-gray-600 text-lg">
            Showcasing my finest work across various categories
          </p>
        </div>

        {/* Show All Button */}
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-projects'))}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Show All Projects
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {homePageProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;