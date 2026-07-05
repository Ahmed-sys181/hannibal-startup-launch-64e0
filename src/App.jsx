import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", minHeight: '100vh', background: '#020617', color: '#f8fafc' }}>
      
    <section style={{ background: '#020617', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '48rem',  textAlign: 'left' }}>
        
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: 1.8 }}>AI-generated content: create navbar 
</p>
      </div>
    </section>
  


    <section style={{ background: '#020617', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(59,130,246,0.05), rgba(15,23,42,0.5))', border: '1px solid rgba(20,184,166,0.2)', borderRadius: '1.5rem', padding: '3rem' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1rem' }}>Ready to get started?</h2>
        <p style={{ fontSize: '1.125rem', color: '#94a3b8', margin: '0 0 2rem' }}>Join thousands of creators building with Hannibal.ai today.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ padding: '0.875rem 2rem', background: 'linear-gradient(to right, #14b8a6, #3b82f6)', borderRadius: '0.75rem', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>Start Building Free</a>
          <a href="#" style={{ padding: '0.875rem 2rem', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #475569', color: '#cbd5e1' }}>See a Demo</a>
        </div>
      </div>
    </section>
  
    </div>
  );
}
