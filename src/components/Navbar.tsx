'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',     id: 'hero' },
  { label: 'Reels',    id: 'reels' },
  { label: 'Services', id: 'services' },
  { label: 'Process',  id: 'process' },
  { label: 'Contact',  id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 1024);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onResize();
    onScroll();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // ── Desktop Navbar ─────────────────────────────────────────
  if (!isMobile) {
    return (
      <nav
        className="m-navbar"
        style={{
          boxShadow: scrolled
            ? '0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,245,212,0.06)'
            : 'none',
        }}
      >
        {/* Logo */}
        <button
          className="m-logo"
          onClick={() => scrollTo('hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Go to top"
        >
          <span style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00F5D4 55%, #9B5DE5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ANUJEDITZ
          </span>
        </button>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              id={`nav-link-${link.id}`}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '14px', fontWeight: 500, color: '#94A3B8',
                fontFamily: 'Inter, sans-serif', padding: '8px 16px',
                borderRadius: '8px', transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.background = 'rgba(0,245,212,0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94A3B8';
                e.currentTarget.style.background = 'none';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className="m-btn-filled"
          onClick={() => scrollTo('contact')}
          id="nav-cta-btn"
          style={{ padding: '10px 22px', fontSize: '14px' }}
        >
          Hire Me ✦
        </button>
      </nav>
    );
  }

  // ── Mobile/Tablet Navbar ───────────────────────────────────
  return (
    <>
      <nav
        className="m-navbar"
        style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none' }}
      >
        <button
          className="m-logo"
          onClick={() => scrollTo('hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Go to top"
        >
          <span style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00F5D4 55%, #9B5DE5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ANUJEDITZ
          </span>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#00F5D4', padding: '4px' }}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
              background: 'rgba(5,8,16,0.97)',
              backdropFilter: 'blur(20px)',
              zIndex: 99, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '32px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '28px', fontWeight: 700, color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00F5D4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
