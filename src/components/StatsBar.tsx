'use client';
import { motion } from 'framer-motion';

const stats = [
  { num: '650+', label: 'Projects Completed', icon: '🎬' },
  { num: '45M+', label: 'Views Generated',    icon: '👁️' },
  { num: '5+',   label: 'Years Experience',   icon: '⏱️' },
  { num: '100+', label: 'Happy Clients',      icon: '🤝' },
];

export default function StatsBar() {
  return (
    <section
      id="stats"
      style={{
        background: '#0A0F1E',
        padding: '64px 24px',
        borderTop: '1px solid rgba(0,245,212,0.08)',
        borderBottom: '1px solid rgba(0,245,212,0.08)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="m-card"
              style={{ padding: '28px 20px', textAlign: 'center', position: 'relative' }}
            >
              {/* Decorative cyan dot */}
              <div style={{
                position: 'absolute', top: '14px', left: '14px',
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#00F5D4', opacity: 0.5,
                boxShadow: '0 0 6px rgba(0,245,212,0.6)',
              }} />
              <div style={{ fontSize: '26px', marginBottom: '10px' }}>{s.icon}</div>
              <div style={{
                fontSize: '32px', fontWeight: 800, color: '#00F5D4',
                fontFamily: 'Inter, sans-serif', lineHeight: 1,
                textShadow: '0 0 20px rgba(0,245,212,0.35)',
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: '11px', color: '#64748B', marginTop: '8px',
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
