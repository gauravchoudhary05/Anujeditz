'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Reel {
  id: number;
  title: string;
  category: string;
  vimeoId: string;
  color: string;
}

const reels: Reel[] = [
  { id: 1, title: 'D Garage Hilux Sidhu', category: 'Automobile', vimeoId: '1176495038', color: '#00F5D4' },
  { id: 2, title: 'D Garage Hilux',       category: 'Automobile', vimeoId: '1176494977', color: '#00F5D4' },
  { id: 3, title: 'D Garage',             category: 'Automobile', vimeoId: '1176494914', color: '#00F5D4' },
  { id: 4, title: 'Shalom Scorpio N',     category: 'Automobile', vimeoId: '1176494863', color: '#9B5DE5' },
  { id: 5, title: 'Shalom Tata Sierra',   category: 'Automobile', vimeoId: '1176494801', color: '#0EA5E9' },
  { id: 6, title: 'The Detailing Studio', category: 'Detailing',  vimeoId: '1176494732', color: '#F59E0B' },
];

function colorToRGB(hex: string): string {
  const map: Record<string, string> = {
    '#00F5D4': '0,245,212',
    '#9B5DE5': '155,93,229',
    '#0EA5E9': '14,165,233',
    '#F59E0B': '245,158,11',
  };
  return map[hex] || '0,245,212';
}

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const [hovered, setHovered] = useState(false);
  const rgb = colorToRGB(reel.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="m-reel-card"
      id={`reel-card-${reel.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? `0 0 36px 6px rgba(${rgb},0.45), 0 12px 40px rgba(0,0,0,0.5)`
          : '0 4px 32px rgba(0,0,0,0.4)',
        transition: 'box-shadow 0.35s ease',
      }}
    >
      {/* 3px gradient top bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${reel.color}, #9B5DE5)` }} />

      {/* 9:16 aspect ratio container */}
      <div style={{ position: 'relative', aspectRatio: '9/16', overflow: 'hidden', background: '#050810' }}>

        {/* Vimeo embed — autoplay, loop, muted by default, controls visible for unmute */}
        <iframe
          src={`https://player.vimeo.com/video/${reel.vimeoId}?autoplay=1&loop=1&muted=1&controls=1&title=0&byline=0&portrait=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title={reel.title}
        />

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px', zIndex: 10,
          background: `rgba(${rgb},0.18)`,
          border: `1px solid rgba(${rgb},0.55)`,
          borderRadius: '999px', padding: '4px 10px',
          fontSize: '10px', fontWeight: 700, color: reel.color,
          backdropFilter: 'blur(8px)', letterSpacing: '0.08em',
        }}>
          {reel.category}
        </div>

        {/* Bottom title overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(5,8,16,0.92) 0%, transparent 100%)',
          padding: '40px 16px 16px',
          zIndex: 10,
        }}>
          <div style={{
            fontSize: '13px', fontWeight: 700, color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em',
          }}>
            {reel.title}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReelsSection() {
  return (
    <section id="reels" style={{ background: '#0A0F1E', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ textAlign: 'center' }}>
          <span className="m-badge">🎬 Featured Masterpieces</span>
        </div>

        {/* Heading */}
        <motion.h2
          className="m-h2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '14px' }}
        >
          <span style={{ color: '#FFFFFF' }}>Featured </span>
          <span className="m-gradient-text">Masterpieces</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ textAlign: 'center', fontSize: '15px', color: '#94A3B8', marginBottom: '52px' }}
        >
          6 curated reels · Cinematic editing, color grading &amp; motion · Auto-playing
        </motion.p>

        {/* Responsive grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="reels-grid">
          {reels.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn-outline"
            id="view-all-work-btn"
            style={{ textDecoration: 'none' }}
          >
            View All Work ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
