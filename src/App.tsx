import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileSection from './components/ProfileSection';
import SkillsCarousel from './components/SkillsCarousel';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import BlogsPage from './components/BlogsPage';
import BlogDetail from './components/BlogDetail';
import ContactModal from './components/ContactModal'; // 👈 import it
import { mockUser, mockProjects, mockBlogPosts } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // 👈 modal state

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedBlogId]);

  // Listen for custom navigation events
  useEffect(() => {
    const handleNavigateToProjects = () => {
      setCurrentPage('projects');
    };

    window.addEventListener('navigate-to-projects', handleNavigateToProjects);
    return () => {
      window.removeEventListener('navigate-to-projects', handleNavigateToProjects);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedBlogId(null);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsProjectModalOpen(true);
  };

  const handleBlogClick = (blogId: string) => {
    setSelectedBlogId(blogId);
    setCurrentPage('blog-detail');
  };

  const handleCloseProjectModal = () => {
    setSelectedProjectId(null);
    setIsProjectModalOpen(false);
  };

  const handleBackToBlogs = () => {
    setSelectedBlogId(null);
    setCurrentPage('blogs');
  };
  const selectedProject = selectedProjectId 
    ? mockProjects.find(p => p.id === selectedProjectId)
    : null;

  const selectedBlog = selectedBlogId
    ? mockBlogPosts.find(b => b.id === selectedBlogId)
    : null;

  const renderContent = () => {
    if (currentPage === 'blog-detail' && selectedBlog) {
      return (
        <BlogDetail
          blog={selectedBlog}
          onBack={handleBackToBlogs}
          onBlogClick={handleBlogClick}
        />
      );
    }

    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage onProjectClick={handleProjectClick} />;
      case 'blogs':
        return <BlogsPage onBlogClick={handleBlogClick} />;
      case 'home':
      default:
        return (
          <>
            <ProfileSection user={mockUser} />
            <SkillsCarousel />
            <ProjectGrid projects={mockProjects} onProjectClick={handleProjectClick} />
          </>
        );
    }
  };

  const showFooter = !['blog-detail', 'projects'].includes(currentPage);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        setIsContactModalOpen={setIsContactModalOpen} // 👈 pass the handler
      />
      <main>
        {renderContent()}
      </main>
      {showFooter && <Footer />}

      {/* Modals */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
}

export default App;
