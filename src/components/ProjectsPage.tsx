import React, { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { mockProjects } from '../data/mockData';
import { Project } from '../types';

interface ProjectsPageProps {
  onProjectClick: (projectId: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onProjectClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top when filters change
  const scrollToTop = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = [
    'all',
    'Mobile Applications',
    'Website Designs',
    'Logo Designs',
    'Print Designs',
    'Animation Videos',
    'Self Designs'
  ];

  // Filter and sort projects
  const filteredProjects = mockProjects
    .filter(project => {
      const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => parseInt(a.id) - parseInt(b.id))
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.likes - a.likes;
        case 'views':
          return b.views - a.views;
        case 'recent':
        default:
          return parseInt(a.id) - parseInt(b.id);
      }
    });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Mobile Applications': '📱',
      'Website Designs': '🌐',
      'Logo Designs': '🎨',
      'Print Designs': '📄',
      'Animation Videos': '🎬',
      'Self Designs': '✨'
    };
    return icons[category] || '📁';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/25 to-blue-400/25 rounded-full blur-xl animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-lg animate-pulse delay-2000"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/3 w-4 h-4 bg-blue-500 rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-20 w-3 h-3 bg-pink-500 rotate-45 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12 relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                🎨 Portfolio Showcase
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              All <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore my complete portfolio of design work across various categories and industries.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">3+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="xl:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">Filter Projects</h3>
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200 hover:border-blue-300"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setFilterCategory(category);
                        scrollToTop();
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center space-x-3 group ${
                        filterCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                      }`}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                        {category === 'all' ? '📁' : getCategoryIcon(category)}
                      </span>
                      <span>
                        {category === 'all' ? 'All Projects' : category}
                      </span>
                      <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        filterCategory === category 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category === 'all' 
                          ? mockProjects.length 
                          : mockProjects.filter(p => p.category === category).length
                        }
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200 hover:border-blue-300 bg-white"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="views">Most Viewed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1" id="projects-section">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {filterCategory === 'all' ? 'All Projects' : filterCategory}
                </h2>
                <p className="text-lg text-gray-600">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-xl overflow-hidden mt-4 lg:mt-0 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-4 transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-4 transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onProjectClick={onProjectClick}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="mx-auto h-20 w-20 text-gray-400 mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Filter className="h-full w-full" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No projects found</h3>
                <p className="text-lg text-gray-500 mb-6">Try adjusting your search or filter criteria.</p>
                <button 
                  onClick={() => {
                    setFilterCategory('all');
                    setSearchTerm('');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;