'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: 1,
    title: 'Brief & Discovery',
    description: 'We discuss your vision, target audience, goals, and style preferences to align on creative direction.',
  },
  {
    num: 2,
    title: 'Creative Planning',
    description: 'I build a structured edit plan — shot selection, pacing map, music mood, and transition logic.',
  },
  {
    num: 3,
    title: 'Editing & Refinement',
    description: 'Full edit execution with color grading, motion graphics, and sound design. Multiple revision rounds.',
  },
  {
    num: 4,
    title: 'Delivery & Review',
    description: 'Final export in your required format — 4K, social-optimized, or broadcast-ready. Delivered on time.',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" style={{ background: '#0A0F1E', padding: '100px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ textAlign: 'center' }}>
          <span className="m-badge">🔄 How I Work</span>
        </div>

        {/* Heading */}
        <motion.h2
          className="m-h2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '12px' }}
        >
          <span style={{ color: '#FFFFFF' }}>My </span>
          <span className="m-gradient-text">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '14px', color: '#94A3B8', marginBottom: '48px' }}
        >
          A proven 4-step workflow for every project.
        </motion.p>

        {/* Timeline */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Vertical center line */}
          <div style={{
            position: 'absolute', top: '18px', bottom: '18px', left: '21px', // adjusted left for desktop dot size (44px/2 - 1)
            width: '2px',
            background: 'linear-gradient(180deg, #00F5D4, #9B5DE5)',
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{
                display: 'flex', gap: '24px', alignItems: 'flex-start',
                paddingBottom: i < steps.length - 1 ? '36px' : 0,
                position: 'relative', zIndex: 1,
              }}
              id={`process-step-${i + 1}`}
            >
              {/* Junction dot */}
              <div className="m-timeline-dot" style={{ marginTop: '2px' }}>
                {step.num}
              </div>

              {/* Content */}
              <div className="m-card" style={{ padding: '24px', flex: 1 }}>
                <h3 style={{
                  fontSize: '17px', fontWeight: 700, color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif', marginBottom: '8px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
