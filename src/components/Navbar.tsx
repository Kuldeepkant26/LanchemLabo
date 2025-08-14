import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SignInModal from './SignInModal';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  // Pages that should have full-screen content without spacer
  const fullScreenPages = ['/about'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state - use different threshold for full-screen pages
      const scrollThreshold = fullScreenPages.includes(location.pathname) ? 50 : 20;
      setIsScrolled(currentScrollY > scrollThreshold);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setIsVisible(false);
        // Close mobile menu and dropdowns when hiding
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname, fullScreenPages]);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { 
      name: 'About', 
      href: '/about',
      isRoute: true,
      dropdown: [
        { name: 'Our Story', href: '#story', isRoute: false },
        { name: 'Leadership', href: '#leadership', isRoute: false },
        { name: 'Careers', href: '#careers', isRoute: false }
      ]
    },
    { 
      name: 'Products', 
      href: '#products',
      isRoute: false,
      dropdown: [
        { name: 'Drug Discovery', href: '#discovery', isRoute: false },
        { name: 'Clinical Research', href: '#clinical', isRoute: false },
        { name: 'Manufacturing', href: '#manufacturing', isRoute: false },
        { name: 'Quality Control', href: '#quality', isRoute: false }
      ]
    }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-200/20 shadow-lg shadow-sky-500/5' 
            : fullScreenPages.includes(location.pathname)
            ? 'bg-black/10 backdrop-blur-md'
            : 'bg-white/5 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut",
          type: "tween"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/25">
                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold text-lg leading-none transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    Lanchem Labo
                  </span>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-sky-600' : 'text-sky-300'
                  }`}>
                    Pharmaceutical Innovation
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isRoute ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isScrolled 
                            ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/80' 
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        )}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/80' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </motion.a>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-200/20 overflow-hidden"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((dropdownItem, index) => (
                          dropdownItem.isRoute ? (
                            <motion.div
                              key={dropdownItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              <Link
                                to={dropdownItem.href}
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            </motion.div>
                          ) : (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 transition-colors duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              {dropdownItem.name}
                            </motion.a>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Sign In Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Sign In Button */}
              <motion.button
                onClick={() => setIsSignInModalOpen(true)}
                className={`hidden sm:flex items-center px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sign In</span>
                <div className="ml-2 w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-200/20 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.isRoute ? (
                        <Link
                          to={item.href}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 font-medium transition-colors duration-200"
                          onClick={() => {
                            if (item.dropdown) {
                              handleDropdownToggle(item.name);
                            } else {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                        >
                          {item.name}
                          {item.dropdown && (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          )}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 font-medium transition-colors duration-200"
                          onClick={() => {
                            if (item.dropdown) {
                              handleDropdownToggle(item.name);
                            } else {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                        >
                          {item.name}
                          {item.dropdown && (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          )}
                        </a>
                      )}
                    </motion.div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          className="ml-4 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            dropdownItem.isRoute ? (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropdownIndex * 0.05 }}
                              >
                                <Link
                                  to={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50/30 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.div>
                            ) : (
                              <motion.a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50/30 rounded-lg transition-colors duration-200"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropdownIndex * 0.05 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </motion.a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile Sign In */}
                <motion.div
                  className="pt-4 border-t border-gray-200/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsSignInModalOpen(true)}
                  >
                    Sign In
                    <div className="ml-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      {!fullScreenPages.includes(location.pathname) && (
        <div className="h-16 lg:h-20"></div>
      )}

      {/* Sign In Modal */}
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
