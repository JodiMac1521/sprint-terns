import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">ST</span>
              <span className="logo-text">Sprint-Terns™</span>
            </div>
            <p className="footer-tagline">
              AI-powered intern sprints for teams that move fast.
            </p>
          </div>

          <div className="footer-links-grid">
            <div>
              <h4>Product</h4>
              <Link to="/platform">Platform</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/team">Team</Link>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sprint-Terns™. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
