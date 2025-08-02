import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PolecatNavbar.css';

const PolecatNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'AI SERVICES',
      href: '#featured-products',
      hoverColor: '#ff561e',
      fontColor: '#000000'
    },
    {
      name: 'AI MEME',
      href: '#ai-meme-showcase',
      hoverColor: '#ffb30f',
      fontColor: '#000000'
    },
    {
      name: 'INFINITE MARQUEE',
      href: '#infinite-marquee',
      hoverColor: '#ffead7',
      fontColor: '#000000'
    },
    {
      name: 'OUR TEAM',
      href: '#our-team',
      hoverColor: '#b91c3b',
      fontColor: '#000000'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`polecat-navbar ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="polecat-navbar-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="polecat-logo"
          >
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            >
              WEBATHON
            </a>
          </motion.div>

          <motion.div 
            className="polecat-menu-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button onClick={toggleMenu}>
              <span>MENU</span>
              <svg className="menu-icon" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="polecat-menu polecat-menu--open"
          >
            <div className="polecat-menu-header">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="polecat-agency-tag"
              >
                <span>Team Duo Dare ⚔️💻</span>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={toggleMenu}
                className="polecat-close-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>CLOSE ✕</span>
              </motion.button>
            </div>

            <div className="polecat-menu-top">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="polecat-menu-description-desktop"
              >
                We make digital products for complex<br />challenges: from mobile apps<br />to enterprise systems.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="polecat-menu-description-mobile"
              >
                We make digital products<br />for complex challenges:<br />from mobile apps<br />to enterprise systems.
              </motion.span>
            </div>
            <div className="polecat-menu-links">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="polecat-link-container"
                >
                  <a href={item.href} onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}>
                    <div 
                      className="polecat-menu-link"
                      style={{
                        '--hover-link-background-color': item.hoverColor,
                        '--hover-link-font-color': item.fontColor
                      }}
                    >
                      <span className="polecat-link-text">
                        {item.name}
                      </span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PolecatNavbar;
