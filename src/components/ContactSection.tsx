'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: '#050810', padding: '100px 24px 56px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ textAlign: 'center' }}>
          <span className="m-badge">📩 Get in Touch</span>
        </div>

        {/* Heading */}
        <motion.h2
          className="m-h2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '14px' }}
        >
          <span style={{ color: '#FFFFFF' }}>Let&apos;s </span>
          <span className="m-gradient-text">Collaborate</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '15px', color: '#94A3B8', marginBottom: '52px' }}
        >
          Available for freelance projects and long-term collaborations.
        </motion.p>

        {/* Two-column layout on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '32px', alignItems: 'start',
        }}>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {[
              { icon: <Mail size={15} color="#00F5D4" />, text: 'anuj0936295@gmail.com' },
              { icon: <Phone size={15} color="#00F5D4" />, text: '+91 9352222316' },
              { icon: <MapPin size={15} color="#00F5D4" />, text: 'Jaipur, Rajasthan' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '16px 20px', borderRadius: '14px',
                background: 'rgba(17,27,46,0.7)',
                border: '1px solid rgba(0,245,212,0.15)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s ease',
              }}>
                {item.icon}
                <span style={{ fontSize: '14px', color: '#94A3B8' }}>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="m-input"
              id="contact-name"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="m-input"
              id="contact-email"
            />
            <textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="m-input"
              id="contact-message"
              style={{ resize: 'vertical', minHeight: '130px' }}
            />

            {/* Tri-color gradient Send Message button */}
            <button
              type="submit"
              disabled={sending || sent}
              id="contact-send-btn"
              style={{
                width: '100%',
                background: sent
                  ? 'rgba(0,245,212,0.15)'
                  : 'linear-gradient(135deg, #00F5D4 0%, #0EA5E9 50%, #9B5DE5 100%)',
                border: sent ? '1px solid rgba(0,245,212,0.35)' : 'none',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                padding: '16px',
                borderRadius: '14px',
                cursor: sending || sent ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: sent ? 'none' : '0 6px 28px rgba(0,245,212,0.28)',
              }}
              onMouseEnter={(e) => {
                if (!sent && !sending) {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 40px rgba(0,245,212,0.45)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(0,245,212,0.28)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'none';
              }}
            >
              {sent ? (
                <>✅ Message Sent!</>
              ) : sending ? (
                <>Sending...</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>{/* end two-column grid */}

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', justifyContent: 'center', gap: '14px',
            marginTop: '48px', marginBottom: '36px',
          }}
        >
          {[Instagram, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="m-social-btn" aria-label="Social link">
              <Icon size={17} />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid rgba(0,245,212,0.06)',
          paddingTop: '24px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '12px', color: '#4B5563' }}>
            © 2024 Anuj Choudhary · Professional Video Editor · All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
