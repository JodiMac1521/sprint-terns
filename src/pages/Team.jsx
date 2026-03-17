import { Link } from 'react-router-dom'
import './Team.css'

const leaders = [
  {
    initials: 'JM',
    name: 'Jodi Mac',
    title: 'Founder & CEO',
    bio: '30+ years in EdTech and workforce innovation. Scaled products from $0 to $130M+ at Pearson. Founded Work Simplr on the belief that great work should have no capacity ceiling.',
    color: '#ff5500',
  },
  {
    initials: 'AL',
    name: 'Alex Lee',
    title: 'Head of Product',
    bio: 'Former product lead at two category-defining SaaS companies. Obsessed with how AI changes the way humans delegate and execute work.',
    color: '#2563eb',
  },
  {
    initials: 'RS',
    name: 'Riley Santos',
    title: 'Head of Operations',
    bio: 'Built and scaled operations teams across three high-growth startups. Architect of the SprintWork™ delivery methodology.',
    color: '#7c3aed',
  },
  {
    initials: 'MK',
    name: 'Morgan Kim',
    title: 'Head of AI',
    bio: 'Machine learning researcher turned builder. Designed the AI matching and quality assurance systems that power every Sprint-Tern™ deployment.',
    color: '#059669',
  },
]

const roles = [
  'Senior Sprint Engineer',
  'AI Research Lead',
  'Customer Success Manager',
  'Product Designer',
  'Growth Strategist',
  'Data Scientist',
]

export default function Team() {
  return (
    <div className="team">
      {/* HERO */}
      <section className="team-hero">
        <div className="team-hero-bg" />
        <div className="container">
          <p className="section-label fade-up fade-up-1">The team</p>
          <h1 className="team-headline fade-up fade-up-2">
            Meet the<br />Sprint-Terns™ leaders
          </h1>
          <p className="team-sub fade-up fade-up-3">
            Discover the humans empowering AI-powered digital sprint teams to deliver Sprint-Terns™ on any project — at any scale.
          </p>
          <div className="team-ctas fade-up fade-up-4">
            <Link to="/pricing" className="btn-primary">Get started →</Link>
            <Link to="/platform" className="btn-outline">See the platform</Link>
          </div>
        </div>
      </section>

      {/* AI TALENT BANNER */}
      <section className="ai-talent-section">
        <div className="container">
          <div className="ai-talent-card">
            <div className="ai-talent-text">
              <h2 className="section-title">AI talent.<br />Real results.</h2>
              <p className="ai-talent-desc">
                Our team combines deep EdTech experience, AI research, and operational excellence to build the future of work — one sprint at a time. Every hire is selected for their ability to build and ship with precision.
              </p>
            </div>
            <div className="ai-talent-visual">
              <div className="talent-grid">
                {['Research', 'Analysis', 'Automation', 'Delivery', 'Quality', 'Scale'].map((t, i) => (
                  <div key={i} className="talent-chip">{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERS GRID */}
      <section className="section leaders-section">
        <div className="container">
          <p className="section-label" style={{ marginBottom: '48px' }}>Leadership</p>
          <div className="leaders-grid">
            {leaders.map((l, i) => (
              <div key={i} className="leader-card">
                <div className="leader-avatar" style={{ background: l.color }}>
                  {l.initials}
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{l.name}</h3>
                  <p className="leader-title">{l.title}</p>
                  <p className="leader-bio">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM PREVIEW */}
      <section className="section platform-preview-section">
        <div className="container">
          <div className="platform-preview-inner">
            <div>
              <p className="section-label">Built by builders</p>
              <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '16px' }}>
                Sprint-Terns™<br />in your workflow
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px', marginBottom: '28px' }}>
                Our team built Sprint-Terns™ because we lived the problem. Too many great ideas die waiting for capacity. Sprint-Terns™ exist to kill that bottleneck — permanently.
              </p>
              <Link to="/platform" className="btn-primary">Explore the platform →</Link>
            </div>
            <div className="platform-preview-card">
              <div className="pp-header">
                <div className="pp-dots">
                  <div className="hc-dot red" /><div className="hc-dot yellow" /><div className="hc-dot green" />
                </div>
                <span>Work Simplr Platform</span>
              </div>
              <div className="pp-body">
                <div className="pp-stat-row">
                  <div className="pp-stat"><span className="pp-val">5,000+</span><span className="pp-lbl">Projects</span></div>
                  <div className="pp-stat"><span className="pp-val">98%</span><span className="pp-lbl">Completion</span></div>
                  <div className="pp-stat"><span className="pp-val">87%</span><span className="pp-lbl">Retention</span></div>
                </div>
                <div className="pp-divider" />
                <div className="pp-sprints">
                  {['Market research', 'Competitive analysis', 'Content strategy'].map((s, i) => (
                    <div key={i} className="pp-sprint-row">
                      <span className="pp-sprint-dot" />
                      <span>{s}</span>
                      <span className="sprint-badge green">Done</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pp-footer">© Work Simplr 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="section careers-section">
        <div className="container">
          <div className="careers-card">
            <div>
              <p className="section-label">Join us</p>
              <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '12px' }}>
                Build the future of work with us
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', maxWidth: '520px' }}>
                We're hiring builders, researchers, and operators who believe in a world where great work has no capacity ceiling.
              </p>
            </div>
            <div className="open-roles">
              <h4>Open roles</h4>
              <div className="roles-list">
                {roles.map((r, i) => (
                  <div key={i} className="role-item">
                    <span>{r}</span>
                    <a href="#" className="role-link">Apply →</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
