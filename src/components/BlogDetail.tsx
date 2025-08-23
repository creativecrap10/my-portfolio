import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, Bookmark } from 'lucide-react';
import { BlogPost } from '../types';
import { mockUser, mockBlogPosts } from '../data/mockData';

interface BlogDetailProps {
  blog: BlogPost;
  onBack: () => void;
  onBlogClick: (blogId: string) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack, onBlogClick }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedBlogs = mockBlogPosts
    .filter(b => b.id !== blog.id)
    .slice(0, 3);

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
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-6">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blog.category)}`}>
                {blog.category}
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {blog.summary}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg prose-blue max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {blog.content}
            </div>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{mockUser.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{mockUser.bio}</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog.id}
                  onClick={() => onBlogClick(relatedBlog.id)}
                  className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
                >
                  <img
                    src={relatedBlog.thumbnail}
                    alt={relatedBlog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(relatedBlog.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{relatedBlog.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedBlog.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;