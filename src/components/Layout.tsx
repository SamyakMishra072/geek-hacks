import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/team', label: 'Our Team' },
    { path: '/join', label: 'Join Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <nav className="fixed w-full z-50 bg-[#151515] border-b border-[#661511]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-[#d00b02]" />
                <span className="text-xl font-bold">geekHacks</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-[#d00b02] transition-colors ${
                    location.pathname === item.path ? 'text-[#d00b02]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#d00b02] transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#151515]"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-[#661511] hover:text-white transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#661511] text-white'
                        : 'text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-[#151515] border-t border-[#661511] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-6 w-6 text-[#d00b02]" />
              <span className="text-lg font-bold">geekHacks</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d00b02] transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © 2025 geekHacks. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;