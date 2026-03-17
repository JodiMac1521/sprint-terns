import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    icon: '⚡',
    title: 'Instant project launch',
    desc: 'Go from brief to active sprint in under 24 hours. No back-and-forth, no procurement.',
  },
  {
    icon: '🤖',
    title: 'Automated research workflows',
    desc: 'AI handles sourcing, synthesis, and formatting so your intern focuses on insight.',
  },
  {
    icon: '💬',
    title: 'AI digital intern support',
    desc: 'Every Sprint-Tern™ is paired with an AI co-pilot for real-time guidance.',
  },
  {
    icon: '🔄',
    title: 'On-demand sprint teams',
    desc: 'Scale up or down instantly. Deploy one or many sprint teams with a click.',
  },
  {
    icon: '✅',
    title: 'Results-focused delivery',
    desc: '98% completion rate. Sprint-Terns™ ship, every time.',
  },
  {
    icon: '🔗',
    title: 'Effortless tool integration',
    desc: 'Works with Notion, Slack, Asana, Google Workspace, and more out of the box.',
  },
]

const metrics = [
  { value: '99.99%', label: 'Platform uptime' },
  { value: '1M+', label: 'Sprints completed' },
  { value: '52K+', label: 'Teams powered' },
  { value: '2M+', label: 'Hours saved' },
]

const logos = ['Upland', 'Bonk', 'THB', 'JERA', 'Welo', 'Bonk', 'THB', 'JERA']

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <div className="tag fade-up fade-up-1">
              <span className="tag-dot" />
              AI-Augmented Workforce
            </div>
            <h1 className="hero-headline fade-up fade-up-2">
              The future of work<br />
              runs on <span className="accent">Sprint-Terns™</span>
            </h1>
            <p className="hero-sub fade-up fade-up-3">
              Connect with AI-powered Sprint-Terns™ — digital interns and sprint teams that handle complex projects for research, testing, and operations at better than human speed.
            </p>
            <div className="hero-ctas fade-up fade-up-4">
              <Link to="/pricing" className="btn-primary">Get started →</Link>
              <Link to="/platform" className="btn-outline">See how it works</Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual fade-up fade-up-3">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hc-dot red" /><div className="hc-dot yellow" /><div className="hc-dot green" />
                <span className="hc-title">Sprint Dashboard</span>
              </div>
              <div className="hero-card-body">
                <div className="sprint-row active">
                  <span className="sprint-status">●</span>
                  <span>Market research sprint</span>
                  <span className="sprint-badge orange">Running</span>
                </div>
                <div className="sprint-row">
                  <span className="sprint-status done">●</span>
                  <span>Competitor analysis</span>
                  <span className="sprint-badge green">Done</span>
                </div>
                <div className="sprint-row">
                  <span className="sprint-status done">●</span>
                  <span>Data pipeline build</span>
                  <span className="sprint-badge green">Done</span>
                </div>
                <div className="sprint-row queued">
                  <span className="sprint-status q">●</span>
                  <span>Content strategy deck</span>
                  <span className="sprint-badge gray">Queued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="logos-section">
        <div className="container">
          <p className="logos-label">Trusted by teams at</p>
          <div className="logos-strip">
            {logos.map((l, i) => (
              <span key={i} className="logo-item">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* POWER WORK */}
      <section className="section power-section">
        <div className="container">
          <div className="power-header">
            <p className="section-label">Why Sprint-Terns™</p>
            <h2 className="section-title">Sprint-Terns™<br />power modern work</h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCELERATE */}
      <section className="section accelerate-section">
        <div className="container">
          <div className="accel-inner">
            <div className="accel-text">
              <p className="section-label">Built for speed</p>
              <h2 className="section-title">Sprint-Terns™<br />accelerate real work</h2>
              <p className="accel-desc">
                Whether you need research, analysis, content, or technical builds — Sprint-Terns™ deploy in hours, not weeks. Every sprint is scoped, managed, and delivered with AI precision.
              </p>
              <Link to="/platform" className="btn-primary" style={{ marginTop: '32px' }}>
                Explore the platform →
              </Link>
            </div>
            <div className="accel-visual">
              <div className="timeline">
                {['Brief submitted', 'Sprint-Tern™ matched', 'Sprint launched', 'Deliverable shipped'].map((step, i) => (
                  <div key={i} className="timeline-item">
                    <div className={`timeline-dot ${i < 3 ? 'done' : ''}`} />
                    <div>
                      <p className="timeline-step">{step}</p>
                      <p className="timeline-time">{['Day 0', 'Day 0', 'Day 1', 'Day 5'][i]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section metrics-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Metrics that drive results
          </p>
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-card">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-glow" />
            <h2>Start your first sprint today</h2>
            <p>Join thousands of teams using Sprint-Terns™ to get more done, faster.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pricing" className="btn-primary">Get started free →</Link>
              <Link to="/team" className="btn-outline">Talk to our team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
