'use client';
import { motion } from 'framer-motion';
import { Play, Award, Film, Zap, Star, TrendingUp, ArrowDown } from 'lucide-react';

const floatingBadges = [
  { icon: <Film size={13} color="#00F5D4" />, label: 'Cinematic', delay: 0 },
  { icon: <Zap size={13} color="#00F5D4" />, label: 'Color Grading', delay: 0.6 },
  { icon: <Star size={13} color="#00F5D4" />, label: '5★ Rated', delay: 1.1 },
  { icon: <TrendingUp size={13} color="#00F5D4" />, label: '45M+ Views', delay: 1.6 },
];

const stats = [
  { num: '650+', label: 'Projects' },
  { num: '5+', label: 'Years Exp' },
  { num: '45M+', label: 'Views' },
  { num: '100+', label: 'Clients' },
];

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#050810',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '60px',
      }}
    >
      {/* Radial hero glow */}
      <div className="m-hero-glow" />

      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '6%', left: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(155,93,229,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-8%',
        width: '360px', height: '360px',
        background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Subtle noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        pointerEvents: 'none', opacity: 0.4,
      }} />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%',
        maxWidth: '960px', margin: '0 auto',
        padding: '0 24px', textAlign: 'center',
      }}>
        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
        >
          <span className="m-badge">
            <Award size={10} /> Professional Video Editor
          </span>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: 'flex', justifyContent: 'center',
            flexWrap: 'wrap', gap: '10px', marginBottom: '32px',
          }}
        >
          {floatingBadges.map((b, i) => (
            <div
              key={i}
              className="m-float-badge"
              style={{ animationDelay: `${b.delay}s`, animationDuration: `${3.5 + i * 0.4}s` }}
            >
              {b.icon}
              <span>{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* H1 — new headline */}
        <motion.h1
          className="m-h1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ marginBottom: '24px' }}
        >
          <span className="m-gradient-text">
            Transforming Raw Footage into Cinematic Experiences.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontSize: '17px', color: '#94A3B8',
            lineHeight: 1.75, maxWidth: '580px',
            margin: '0 auto 40px',
          }}
        >
          Crafting compelling visual stories through creative editing, motion graphics, and cinematic storytelling.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '14px', justifyContent: 'center', marginBottom: '52px',
          }}
        >
          <button className="m-btn-filled" onClick={() => scrollTo('reels')} id="hero-cta-showreel">
            <Play size={16} fill="white" /> Watch Showreel
          </button>
          <button className="m-btn-outline" onClick={() => scrollTo('contact')} id="hero-cta-contact">
            Let&apos;s Collaborate →
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ textAlign: 'center', padding: '0 10px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#00F5D4', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '3px' }}>
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && <div className="m-dot-sep" />}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          style={{ marginTop: '52px', display: 'flex', justifyContent: 'center' }}
        >
          <button
            onClick={() => scrollTo('stats')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
              animation: 'mBounce 2s ease-in-out infinite',
            }}
            aria-label="Scroll down"
          >
            <span style={{ fontSize: '10px', color: '#64748B', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Scroll
            </span>
            <ArrowDown size={16} color="#00F5D4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
