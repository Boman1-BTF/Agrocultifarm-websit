'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CloudSun,
  Cpu,
  Globe2,
  Menu,
  Network,
  Radio,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Sun,
  Moon,
  WalletCards,
  X,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260918_191223_0000-D4Qyh9QkI5nYTY3NKv6tYf9Z630qN7.png'

const platformCards = [
  { icon: WalletCards, eyebrow: 'FINTECH / 01', title: 'Farm Wallet & FinTech', copy: 'Move value as quickly as your harvest. Integrated banking, wallet balances, instant transfers, and agricultural credit.', accent: 'green' },
  { icon: Radio, eyebrow: 'IOT / 02', title: 'Smart Farming & IoT', copy: 'Turn field signals into confident decisions with crop cycle management, livestock tracking, and live telemetry.', accent: 'blue' },
  { icon: ShoppingCart, eyebrow: 'MARKETPLACE / 03', title: 'Direct Ag-Marketplace', copy: 'Connect verified farmers directly with B2B and D2C buyers through quality grades, region tagging, and escrow.', accent: 'yellow' },
]

const services = [
  { icon: Cpu, title: 'Custom Mobile Apps', copy: 'Farmer-first products built for real field conditions.' },
  { icon: Network, title: 'IoT Device Integration', copy: 'Connect hardware, sensors, and operations in one view.' },
  { icon: BarChart3, title: 'Farm Operations Dashboards', copy: 'Make every critical metric clear and actionable.' },
  { icon: ShieldCheck, title: 'Enterprise AgTech Architecture', copy: 'Secure, scalable systems for modern agriculture.' },
]

const stats = [
  ['100%', 'Digital Supply Chain'],
  ['24/7', 'Real-time IoT Telemetry'],
  ['100%', 'Escrow-Protected Trade'],
  ['360°', 'End-to-End Traceability'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('agrocultifarm-theme') as 'dark' | 'light' | null
    const preferredTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferredTheme)
    document.documentElement.classList.toggle('light', preferredTheme === 'light')
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
    window.localStorage.setItem('agrocultifarm-theme', nextTheme)
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Agrocultifarm Technologies home">
            <span className="logo-frame"><img src={logoUrl} alt="Agrocultifarm Technologies logo" /></span>
            <span className="brand-name">Agrocultifarm <strong>Technologies</strong></span>
          </a>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#ecosystem" onClick={() => setMenuOpen(false)}>Ecosystem</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a className="button button-primary nav-cta" href="#contact">Launch Platform <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="kicker"><span className="kicker-line" /> THE OPERATING SYSTEM FOR MODERN AGRICULTURE</div>
          <h1>Digitizing agriculture through <em>FinTech, IoT</em> & smart marketplaces.</h1>
          <p className="hero-lead">A multi-sided AgTech ecosystem and custom software agency helping farmers, buyers, and enterprises move from fragmented systems to one connected future.</p>
          <div className="hero-actions"><a href="#platform" className="button button-primary">Explore Platform <ChevronRight size={17} /></a><a href="#contact" className="button button-ghost">Book Agency Consultation <ArrowUpRight size={16} /></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>F</span><span>B</span><span>A</span></div><span>Built with the people who feed the world.</span></div>
        </div>
        <div className="hero-visual" aria-label="Agrocultifarm platform preview">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="dashboard-card main-dashboard">
            <div className="dashboard-top"><div><span className="tiny-label">FARM WALLET</span><p className="balance">₦ 2,840,500 <span>NGN</span></p></div><div className="status-dot"><span /> Live</div></div>
            <div className="chart-area"><div className="chart-label"><span>Available balance</span><strong>+18.4%</strong></div><div className="bars"><i style={{ height: '42%' }} /><i style={{ height: '64%' }} /><i style={{ height: '50%' }} /><i style={{ height: '78%' }} /><i style={{ height: '61%' }} /><i style={{ height: '88%' }} /><i style={{ height: '72%' }} /><i style={{ height: '100%' }} /><i style={{ height: '84%' }} /></div></div>
            <div className="dashboard-footer"><span><CloudSun size={14} /> Ibadan, NG</span><span>Updated just now</span></div>
          </div>
          <div className="market-card market-one"><div className="produce-image produce-tomato" /><div><span className="produce-tag">GRADE A · OYO</span><strong>Fresh Tomatoes</strong><small>₦ 48,000 / crate</small></div><ArrowUpRight size={15} /></div>
          <div className="market-card market-two"><div className="produce-image produce-cocoa" /><div><span className="produce-tag">PREMIUM · ONDO</span><strong>Cocoa Beans</strong><small>₦ 2.4m / tonne</small></div><Check size={15} /></div>
          <div className="floating-chip"><span className="pulse" /> IoT telemetry synced</div>
        </div>
      </section>

      <section id="ecosystem" className="section container platform-section"><div className="section-heading"><div><div className="kicker"><span className="kicker-line" /> ONE ECOSYSTEM. EVERY ADVANTAGE.</div><h2>Everything your farm <em>needs to grow.</em></h2></div><p>Purpose-built infrastructure for the full agriculture value chain. From first planting to final payment.</p></div><div className="platform-grid" id="platform">{platformCards.map(({ icon: Icon, eyebrow, title, copy, accent }) => <article className={`platform-card ${accent}`} key={title}><div className="card-icon"><Icon size={22} /></div><span className="card-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><a href="#contact">Discover module <ArrowUpRight size={15} /></a></article>)}</div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-heading services-heading"><div><div className="kicker"><span className="kicker-line" /> ENGINEERING FOR IMPACT</div><h2>Your vision, <em>field-tested.</em></h2></div><p>Beyond our platform, our agency turns complex agricultural challenges into reliable digital products that work in the real world.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, copy }, index) => <article className="service-item" key={title}><span className="service-number">0{index + 1}</span><div className="service-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight className="service-arrow" size={18} /></article>)}</div></div></section>

      <section id="about" className="impact-section"><div className="container"><div className="impact-intro"><div className="kicker"><span className="kicker-line" /> THE IMPACT</div><h2>Infrastructure that makes<br /><em>progress measurable.</em></h2></div><div className="stats-grid">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

      <section id="contact" className="section container contact-section"><div className="contact-copy"><div className="kicker"><span className="kicker-line" /> LET&apos;S BUILD WHAT&apos;S NEXT</div><h2>Bring your boldest<br /><em>agriculture idea.</em></h2><p>Whether you are scaling a farm, sourcing better produce, or architecting the next category-defining AgTech product, we would love to hear from you.</p><div className="contact-detail"><Send size={16} /><span>agrocultifarm@gmail.com</span></div></div><form className="inquiry-form" action="https://formspree.io/f/xwlpbelp" method="POST"><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>Inquiry type<select name="inquiry_type"><option>Agency Services</option><option>Platform Access</option><option>Investor Relations</option></select></label><label>Message<textarea required name="message" rows={4} placeholder="Tell us a little about your project..." /></label><button className="button button-primary form-submit" type="submit">Send inquiry <Send size={16} /></button></form></section>

      <footer className="site-footer"><div className="container footer-top"><div><a href="#top" className="brand"><span className="logo-frame"><img src={logoUrl} alt="Agrocultifarm Technologies logo" /></span><span className="brand-name">Agrocultifarm <strong>Technologies</strong></span></a><p className="footer-tagline">The operating system for modern agriculture.</p></div><div className="footer-links"><div><span>Explore</span><a href="#platform">Platform</a><a href="#services">Services</a><a href="#ecosystem">Ecosystem</a></div><div><span>Company</span><a href="#about">About Us</a><a href="#contact">Contact</a><a href="#contact">Careers</a></div><div><span>Connect</span><div className="socials"><a href="#contact" aria-label="LinkedIn"><Globe2 size={17} /></a><a href="#contact" aria-label="Website"><Globe2 size={17} /></a></div></div></div></div><div className="container footer-bottom"><span>© 2026 Agrocultifarm Technologies Ltd. All rights reserved.</span><a href="#top">Privacy policy</a><span className="footer-location">Made for the global food system <Sprout size={14} /></span></div></footer>
    </main>
  )
}
