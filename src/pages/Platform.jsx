import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Platform.css'

const faqs = [
  { q: 'What is a Sprint-Tern™?', a: 'A Sprint-Tern™ is an AI-powered digital intern that executes structured sprints — scoped projects delivered in 3–5 business days with guaranteed output.' },
  { q: 'How do Sprint-Terns™ operate?', a: 'You submit a brief, our platform matches the right Sprint-Tern™ profile, and work begins within 24 hours. AI handles workflow management, research synthesis, and quality assurance throughout.' },
  { q: 'Which projects fit Sprint-Terns™?', a: 'Best suited for research, analysis, content creation, data work, market intelligence, go-to-market support, and technical documentation.' },
  { q: 'How soon can I start?', a: 'Launch a Sprint-Tern™ project in minutes. Sign up, submit your brief, and a sprint kicks off within one business day.' },
]

const galleryItems = [
  'Market Research', 'Competitive Analysis', 'Content Strategy',
  'Data Pipelines', 'UX Audits', 'GTM Playbooks',
  'Technical Docs', 'Sales Enablement', 'Financial Models',
]

export default function Platform() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="platform">
      {/* HERO */}
      <section className="platform-hero">
        <div className="platform-hero-bg" />
        <div className="container">
          <p className="section-label fade-up fade-up-1">The platform</p>
          <h1 className="platform-headline fade-up fade-up-2">
            The future of work<br />runs on <span className="accent">Sprint-Terns™</span>
          </h1>
          <p className="platform-sub fade-up fade-up-3">
            Our AI-powered platform matches your project brief with the right Sprint-Tern™ profile, manages execution, and delivers structured outputs — faster than any traditional approach.
          </p>
          <div className="platform-ctas fade-up fade-up-4">
            <Link to="/pricing" className="btn-primary">Start your first sprint →</Link>
            <Link to="/about" className="btn-outline">Learn more</Link>
          </div>
        </div>
      </section>

      {/* AI INTERNS */}
      <section className="section ai-section">
        <div className="container">
          <div className="ai-inner">
            <div className="ai-visual">
              <div className="ai-screen">
                <div className="ai-screen-header">
                  <div className="ai-dot" /><div className="ai-dot" /><div className="ai-dot" />
                  <span>Sprint-Tern™ AI Interface</span>
                </div>
                <div className="ai-screen-body">
                  <div className="ai-chat ai-bot">
                    <span>📋</span>
                    <p>Sprint brief received. Analyzing scope and matching optimal Sprint-Tern™ profile...</p>
                  </div>
                  <div className="ai-chat ai-user">
                    <p>Market research on AI adoption in mid-market HR tech companies, 15-page deliverable.</p>
                  </div>
                  <div className="ai-chat ai-bot">
                    <span>✅</span>
                    <p>Match found. Sprint-Tern™ Research-03 assigned. Estimated delivery: Day 4.</p>
                  </div>
                  <div className="ai-progress">
                    <div className="ai-prog-bar">
                      <div className="ai-prog-fill" style={{ width: '68%' }} />
                    </div>
                    <span>68% complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ai-text">
              <p className="section-label">AI-powered execution</p>
              <h2 className="section-title">AI interns for<br />rapid results</h2>
              <p className="ai-desc">
                Sprint-Terns™ combine AI intelligence with structured sprint methodology to deliver projects that would take weeks in days. Every sprint is scoped, managed, and quality-checked — automatically.
              </p>
              <div className="ai-bullets">
                {[
                  'Instant brief analysis & matching',
                  'Real-time progress tracking',
                  'AI quality assurance at every stage',
                  'Structured output templates built-in',
                ].map((b, i) => (
                  <div key={i} className="ai-bullet">
                    <span className="ai-bullet-dot">→</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>Project types</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Sprint-Terns™ project gallery
          </h2>
          <div className="platform-gallery">
            {galleryItems.map((item, i) => (
              <div key={i} className="pg-card">
                <div
                  className="pg-img"
                  style={{ background: `linear-gradient(135deg, hsl(${i * 20}, 40%, 12%) 0%, hsl(${20 + i * 15}, 50%, 8%) 100%)` }}
                >
                  <div className="pg-overlay">
                    <span className="pg-icon">
                      {['🔬','📊','✍️','⚙️','🎨','🚀','📝','💼','📈'][i]}
                    </span>
                  </div>
                </div>
                <p className="pg-label">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPRINT DETAILS */}
      <section className="section sprint-detail-section">
        <div className="container">
          <div className="sprint-detail-inner">
            <div>
              <p className="section-label">How it works</p>
              <h2 className="section-title" style={{ fontSize: '36px' }}>Sprint-Terns™ accelerate real work</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '16px', lineHeight: '1.7', fontSize: '15px' }}>
                Sprint-Terns™ enhanced research sprint in days, not weeks. The platform manages all coordination, quality control, and deliverable formatting so your team stays focused on decisions — not execution.
              </p>
            </div>
            <div className="sprint-badges">
              <div className="sbadge">
                <span className="sbadge-icon">⚡</span>
                <div>
                  <p className="sbadge-title">3–5 day sprints</p>
                  <p className="sbadge-sub">Scoped, managed, delivered</p>
                </div>
              </div>
              <div className="sbadge">
                <span className="sbadge-icon">🎯</span>
                <div>
                  <p className="sbadge-title">98% completion rate</p>
                  <p className="sbadge-sub">Outcomes guaranteed</p>
                </div>
              </div>
              <div className="sbadge">
                <span className="sbadge-icon">🔁</span>
                <div>
                  <p className="sbadge-title">Unlimited revisions</p>
                  <p className="sbadge-sub">Until you're satisfied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>Got questions?</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Sprint-Terns™ FAQ
          </h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <p className="faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="platform-cta-block">
            <div className="pcta-glow" />
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Start your first sprint today</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '16px' }}>
              Deploy AI Sprint-Terns™ for rapid results. Flexible plans, instant access, and outcome-driven execution.
            </p>
            <Link to="/pricing" className="btn-primary">Get started →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
