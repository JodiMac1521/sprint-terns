import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    tagline: 'Small, focused sprint projects.',
    bestFor: 'Best for research, insights, and validation work.',
    priceLabel: 'Starting at',
    priceAmount: '2,500',
    priceSuffix: '/project',
    tag: null,
    features: [
      'One Sprint-Tern™ team',
      'Single-scope sprint delivery',
      'Research & insights projects',
      'Validation and discovery work',
      '5-day sprint cadence',
      'Standard output templates',
      'Sprint dashboard access',
    ],
    cta: 'Get started',
    ctaClass: 'btn-outline',
    ctaLink: '/platform',
  },
  {
    name: 'Growth',
    tagline: 'Cross-functional Sprint-Terns™ tackling medium-sized initiatives.',
    bestFor: 'Best for product testing, experimentation, and growth projects. Delegating ongoing work.',
    priceLabel: 'Starting at',
    priceAmount: '4,500',
    priceSuffix: '/project',
    tag: 'Most Popular',
    features: [
      'Multiple Sprint-Tern™ profiles',
      'Cross-functional sprint teams',
      'Product testing & experimentation',
      'Growth & GTM projects',
      'Ongoing delegation support',
      '3-day sprint cadence',
      'Advanced analytics & reporting',
      'Dedicated account manager',
    ],
    cta: 'Start a growth sprint',
    ctaClass: 'btn-primary',
    ctaLink: '/platform',
  },
  {
    name: 'Scale',
    tagline: 'Dedicated Sprint-Terns™ driving larger operational initiatives.',
    bestFor: 'Best for automation, operational transformation, and scaling execution. For companies running multiple Sprint-Tern projects.',
    priceLabel: null,
    priceAmount: 'Talk to sales',
    priceSuffix: null,
    tag: null,
    features: [
      'Dedicated Sprint-Tern™ workforce',
      'Multiple concurrent projects',
      'Custom AI workforce deployment',
      'Automation & ops transformation',
      'Enterprise-grade SLAs',
      'White-glove onboarding',
      'Custom integrations',
      'Executive reporting suite',
    ],
    cta: 'Talk to sales',
    ctaClass: 'btn-outline',
    ctaLink: '/team',
  },
]

const pricingFaqs = [
  { q: 'How does billing work?', a: 'Choose per-project or retainer billing. Manage payment details and invoices in your dashboard.' },
  { q: 'Can I cancel my plan?', a: 'Cancel anytime. Access continues until your current sprint cycle ends.' },
  { q: 'Are seats limited per plan?', a: 'Plans include a number of Sprint-Tern™ team members. Scale up or down as your needs change.' },
  { q: 'How do I change my plan?', a: 'Upgrade or downgrade instantly from your dashboard. Our team will help you transition smoothly.' },
]

const stats = [
  { value: '+15', label: 'Avg. hours saved/week' },
  { value: '20x', label: 'Faster project delivery' },
  { value: '100%', label: 'Outcome-backed sprints' },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pricing">
      <section className="pricing-hero">
        <div className="pricing-hero-bg" />
        <div className="container">
          <p className="section-label fade-up fade-up-1">Pricing</p>
          <h1 className="pricing-headline fade-up fade-up-2">
            Simple pricing<br />for Sprint-Terns™
          </h1>
          <p className="pricing-sub fade-up fade-up-3">
            Three tiers built for every stage — from focused research sprints to full-scale AI workforce deployment.
          </p>
        </div>
      </section>

      <section className="plans-section">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`plan-card ${plan.tag ? 'featured' : ''}`}>
                {plan.tag && <div className="plan-tag">{plan.tag}</div>}
                <div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <p className="plan-best">{plan.bestFor}</p>
                </div>
                <div className="plan-price-block">
                  {plan.priceLabel && <p className="price-label">{plan.priceLabel}</p>}
                  <div className="plan-price">
                    {plan.priceSuffix ? (
                      <>
                        <span className="price-dollar">$</span>
                        <span className="price-amount">{plan.priceAmount}</span>
                      </>
                    ) : (
                      <span className="price-amount talk">{plan.priceAmount}</span>
                    )}
                  </div>
                  {plan.priceSuffix && <p className="price-note">{plan.priceSuffix}</p>}
                </div>
                <div className="plan-features">
                  {plan.features.map((f, j) => (
                    <div key={j} className="plan-feature">
                      <span className="feat-check">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={plan.ctaLink} className={plan.ctaClass} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section results-section">
        <div className="container">
          <div className="results-inner">
            <div className="results-text">
              <p className="section-label">Why it works</p>
              <h2 className="section-title">Real results.<br />Real impact.</h2>
              <p className="results-desc">
                Work Simplr's Sprint-Terns™ deliver structured outcomes in days, not months. The platform manages everything — efficiently, transparently, and with built-in quality assurance.
              </p>
              <div className="results-testimonials">
                <div className="testimonial">
                  <p className="test-quote">"Sprint-Terns™ gave us transformative insights in under a week. Immediate impact on our roadmap and tools for continued growth."</p>
                  <div className="test-author">
                    <div className="test-avatar" style={{ background: 'var(--orange)' }}>MG</div>
                    <div>
                      <p className="test-name">Maya G.</p>
                      <p className="test-role">VP Product, TechCo</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <p className="test-quote">"The Sprint-Tern™ model transformed how we do research. Fast, accountable, and genuinely better than hiring a full-time analyst."</p>
                  <div className="test-author">
                    <div className="test-avatar" style={{ background: '#5a4fd6' }}>AO</div>
                    <div>
                      <p className="test-name">Andre O.</p>
                      <p className="test-role">Head of Research, DataFirm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="results-stats-col">
              {stats.map((s, i) => (
                <div key={i} className="rstat">
                  <span className="rstat-value">{s.value}</span>
                  <span className="rstat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>Support</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Pricing questions, answered fast</h2>
          <div className="faq-list">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <p className="faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="#" style={{ color: 'var(--orange)', fontSize: '14px' }}>Contact support →</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="accel-cta">
            <div className="accel-cta-text">
              <p className="section-label">Ready to launch?</p>
              <h2 className="section-title" style={{ fontSize: '36px' }}>Accelerate your next project</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '12px', lineHeight: '1.7', fontSize: '15px' }}>
                Deploy AI-powered Sprint-Terns™ for rapid results. Flexible plans, instant access, and outcome-driven execution.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                <Link to="/platform" className="btn-primary">Get started →</Link>
                <Link to="/team" className="btn-outline">Talk to sales</Link>
              </div>
            </div>
            <div className="accel-cta-visual">
              <div className="accel-visual-card">
                <div className="avc-header">Work Simplr</div>
                <div className="avc-body">
                  <div className="avc-row"><span>Sprint active</span><span className="avc-tag orange">Running</span></div>
                  <div className="avc-row"><span>Completion rate</span><span style={{ color: 'var(--orange)' }}>98%</span></div>
                  <div className="avc-row"><span>Sprints this month</span><span>14</span></div>
                  <div className="avc-row"><span>Client retention</span><span>87%</span></div>
                </div>
                <div className="avc-footer">© Work Simplr 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section numbers-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>Track record</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Sprint-Terns™ by the numbers</h2>
          <div className="numbers-grid">
            {[
              { val: '+15', label: 'Avg. hours saved/week', sub: 'Per team, per sprint cycle' },
              { val: '20x', label: 'Faster project delivery', sub: 'vs. traditional hiring' },
              { val: '100%', label: 'Outcome-backed', sub: 'Every sprint ships' },
            ].map((n, i) => (
              <div key={i} className="number-card">
                <span className="number-val">{n.val}</span>
                <span className="number-label">{n.label}</span>
                <span className="number-sub">{n.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
