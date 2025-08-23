import React, { useState } from 'react';
import { Clock, ArrowRight, Calendar, User, Filter, Search, Grid, List } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogsPageProps {
  onBlogClick: (blogId: string) => void;
}

const BlogsPage: React.FC<BlogsPageProps> = ({ onBlogClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(mockBlogPosts.map(post => post.category)))];

  // Filter posts based on category and search
  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Design': 'bg-blue-100 text-blue-800',
      'Gaming': 'bg-purple-100 text-purple-800',
      'Cinema': 'bg-red-100 text-red-800',
      'Technology': 'bg-green-100 text-green-800',
      'News': 'bg-orange-100 text-orange-800',
      'Lifestyle': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12 relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thoughts on design, technology, gaming, cinema, and life. A collection of insights, 
              reviews, and personal reflections from my creative journey.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{featuredPost.summary}</p>
                  <button
                    onClick={() => onBlogClick(featuredPost.id)}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              <div className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onBlogClick(post.id)}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </div>
                    </div>
                  </div>
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                      viewMode === 'list' ? 'text-2xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 leading-relaxed ${
                      viewMode === 'list' ? 'text-lg' : ''
                    }`}>
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
              <Filter className="h-full w-full" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest articles on design, technology, gaming, and more delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;