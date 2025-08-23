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

  const categories = [
    'all',
    'Big Projects',
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

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Big Projects': '🚀',
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
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              All <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my complete portfolio of design work across various categories and industries.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Filter Projects</h3>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setFilterCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center space-x-2 ${
                        filterCategory === category
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-base">
                        {category === 'all' ? '📁' : getCategoryIcon(category)}
                      </span>
                      <span>
                        {category === 'all' ? 'All Projects' : category}
                      </span>
                      <span className="ml-auto text-xs text-gray-500">
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
                <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="views">Most Viewed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {filterCategory === 'all' ? 'All Projects' : filterCategory}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-4 sm:mt-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
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
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
                  <Filter className="h-full w-full" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;