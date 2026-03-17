import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { label: 'Results above all', desc: 'We measure success by outcomes delivered, not hours logged.' },
  { label: 'Powered by AI', desc: 'Every sprint is amplified by AI to deliver 10x the output.' },
  { label: 'Built for builders', desc: 'We partner with teams that move fast and ship real things.' },
]

const mission = {
  title: 'Building the future of work',
  body: `We're redefining project execution with Sprint-Terns™ — an AI-powered approach to talent that deploys digital interns and sprint teams faster than traditional hiring allows.`,
}

export default function About() {
  return (
    <div className="about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="container">
          <p className="section-label fade-up fade-up-1">Our story</p>
          <h1 className="about-headline fade-up fade-up-2">{mission.title}</h1>
          <p className="about-sub fade-up fade-up-3">{mission.body}</p>
          <div className="about-ctas fade-up fade-up-4">
            <Link to="/platform" className="btn-primary">See the platform →</Link>
            <Link to="/team" className="btn-outline">Meet the team</Link>
          </div>
        </div>
      </section>

      {/* INNOVATION CORE */}
      <section className="section innovation-section">
        <div className="container">
          <div className="innovation-inner">
            <div className="innovation-left">
              <div className="inno-card orange-card">
                <p className="inno-card-label">Innovation at our core</p>
                <h3>Results above all</h3>
                <Link to="/pricing" className="btn-primary" style={{ marginTop: 'auto' }}>Get started →</Link>
              </div>
              <div className="inno-card dark-card">
                <p className="inno-card-label">Powered by AI</p>
              </div>
            </div>
            <div className="innovation-right">
              <p className="section-label">What we believe</p>
              <h2 className="section-title">AI-powered teams.<br />Real results.</h2>
              <p className="innovation-desc">
                Sprint-Terns™ deliver outcome-driven work at speed and scale. But we're not just a tool — we're a new category: AI-augmented project execution that replaces slow, expensive, traditional hiring with fast, accountable sprint delivery.
              </p>
              <div className="values-list">
                {values.map((v, i) => (
                  <div key={i} className="value-item">
                    <div className="value-dot" />
                    <div>
                      <p className="value-label">{v.label}</p>
                      <p className="value-desc">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-card">
            <div className="mission-text">
              <p className="section-label">Mission</p>
              <h2 className="section-title" style={{ fontSize: '36px' }}>
                To make project excellence accessible to every team — at any scale.
              </h2>
              <p className="mission-body">
                We started Sprint-Terns™ because we saw the same problem everywhere: talented teams stuck waiting for capacity to deliver important work. Sprint-Terns™ fix that. We give every team the ability to spin up a high-performance sprint team instantly — powered by AI, managed by our platform, and delivered on time.
              </p>
            </div>
            <div className="mission-stats">
              <div className="mstat">
                <span className="mstat-value">5,000+</span>
                <span className="mstat-label">Projects delivered</span>
              </div>
              <div className="mstat">
                <span className="mstat-value">98%</span>
                <span className="mstat-label">Completion rate</span>
              </div>
              <div className="mstat">
                <span className="mstat-value">87%</span>
                <span className="mstat-label">Client retention</span>
              </div>
              <div className="mstat">
                <span className="mstat-value">65%</span>
                <span className="mstat-label">Gross margin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN ACTION */}
      <section className="section inaction-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>Sprint-Terns™ in action</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            A gallery of real project outcomes
          </h2>
          <div className="gallery-grid">
            {[
              'Market research report',
              'Data pipeline build',
              'Content strategy deck',
              'UX audit & recommendations',
              'Competitive landscape analysis',
              'Go-to-market playbook',
            ].map((item, i) => (
              <div key={i} className="gallery-card">
                <div className="gallery-img" style={{ background: `hsl(${20 + i * 15}, 60%, ${10 + i * 3}%)` }} />
                <p className="gallery-label">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
