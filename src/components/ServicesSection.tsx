'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🎬',
    title: 'Video Editing',
    description: 'Precision cutting, seamless transitions, and storytelling that keeps viewers hooked from first frame to last.',
    skill: 100,
    color: '#00F5D4',
  },
  {
    icon: '🎨',
    title: 'Color Grading',
    description: 'Cinematic color science — from color correction to bespoke looks that define the visual identity of your content.',
    skill: 95,
    color: '#9B5DE5',
  },
  {
    icon: '✨',
    title: 'Motion Graphics',
    description: 'Dynamic titles, animated overlays, and motion elements that elevate your video to broadcast quality.',
    skill: 90,
    color: '#0EA5E9',
  },
  {
    icon: '🔊',
    title: 'Sound Design',
    description: 'Audio mixing, SFX layering, and music synchronization that completes the immersive experience.',
    skill: 85,
    color: '#F59E0B',
  },
];

const tools = ['CapCut PC', 'Alight Motion', 'Premiere Pro', 'After Effects', 'Photoshop'];

function SkillBar({ skill, color }: { skill: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill]);

  return (
    <div ref={ref}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Proficiency
        </span>
        <span style={{ fontSize: '11px', fontWeight: 700, color }}>
          {skill}%
        </span>
      </div>
      <div className="m-skill-bar-track">
        <div
          className="m-skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, #9B5DE5)`,
          }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#050810', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ textAlign: 'center' }}>
          <span className="m-badge">⚡ Services</span>
        </div>

        {/* Heading */}
        <motion.h2
          className="m-h2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '14px' }}
        >
          <span style={{ color: '#FFFFFF' }}>What I </span>
          <span className="m-gradient-text">Create</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '15px', color: '#94A3B8', marginBottom: '52px' }}
        >
          Specialized in cinematic content across every medium.
        </motion.p>

        {/* Services cards — responsive 1-col mobile, 2-col desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
          gap: '20px', marginBottom: '52px',
        }}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="m-card"
              style={{ padding: '28px' }}
              id={`service-card-${i}`}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                {/* Icon container */}
                <div
                  className="m-icon-container"
                  style={{
                    boxShadow: `0 0 24px rgba(${service.color === '#00F5D4' ? '0,245,212' : service.color === '#9B5DE5' ? '155,93,229' : service.color === '#0EA5E9' ? '14,165,233' : '245,158,11'},0.2)`,
                    border: `1px solid rgba(${service.color === '#00F5D4' ? '0,245,212' : service.color === '#9B5DE5' ? '155,93,229' : service.color === '#0EA5E9' ? '14,165,233' : '245,158,11'},0.35)`,
                  }}
                >
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '18px', fontWeight: 700, color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif', marginBottom: '8px',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </div>
              </div>
              <SkillBar skill={service.skill} color={service.color} />
            </motion.div>
          ))}
        </div>

        {/* Tools badge row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center',
          }}>
            {tools.map((tool) => (
              <span key={tool} className="m-tool-tag">
                🔧 {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
