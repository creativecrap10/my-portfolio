import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  Home,
  User,
  BookOpen,
  FolderOpen,
} from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  setIsContactModalOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  setIsContactModalOpen,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home", icon: Home },
    { name: "About", href: "about", icon: User },
    { name: "Projects", href: "projects", icon: FolderOpen },
    { name: "Blogs", href: "blogs", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate("home")}
              className="flex-shrink-0 hover:opacity-90 transition-opacity"
            >
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
                CREATIVE CRAP
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.href)}
                  className={`relative flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-inner"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl animate-slideDown">
          <div className="px-3 pt-4 pb-6 space-y-3">
            {/* Mobile Nav */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === item.href
                      ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}

            {/* Mobile Contact */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
