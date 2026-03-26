import heroImage from './assets/hero-lake.jpg'
import aboutImage from './assets/about-meeting.jpg'
import approachImage from './assets/forest-path.jpg'
import pathwaysImage from './assets/research-lab.jpg'
import communityImage from './assets/community-group.jpg'
import researchImage from './assets/research-plant.jpg'
import labImage from './assets/research-lab.jpg'

const menuLeft = ['About', 'About', 'Approach', 'Pathways', 'Research']
const menuRight = ['Community', 'Support']

function TopCard({ image, title, text, button, buttonClass = 'btn-gold', overlay = true }) {
  return (
    <article className="card">
      <img src={image} alt={title} className={overlay ? 'image-tall' : 'image-short'} />
      {overlay ? (
        <div className="overlay-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <button className={`btn ${buttonClass}`}>{button}</button>
        </div>
      ) : (
        <div className="bottom-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <button className={`btn ${buttonClass}`}>{button}</button>
        </div>
      )}
    </article>
  )
}

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <nav className="nav nav-left">
          {menuLeft.map((item, i) => <a href="#" key={i}>{item}</a>)}
        </nav>

        <div className="brand">
          <div className="brand-mark">✿</div>
          <div className="brand-text">
            <div className="brand-title">Liuli Society</div>
            <div className="brand-sub">OF AMERICA</div>
          </div>
        </div>

        <nav className="nav nav-right">
          {menuRight.map((item, i) => <a href="#" key={i}>{item}</a>)}
        </nav>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-shade">
          <h1>Cultivating Holistic Wellness &amp; Harmony with Nature</h1>
          <p>
            Empowering minds, bodies, and our planet through integrative education,
            sustainable practices, and environmental stewardship.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold">Learn More</button>
            <button className="btn btn-green">Get Involved</button>
          </div>
        </div>
      </section>

      <main className="content">
        <section className="grid-two">
          <TopCard
            image={aboutImage}
            title="About Us"
            text="A mission for mindful living, ecological respect, and healthier relationships between people, community, and the natural world."
            button="Our Mission"
            buttonClass="btn-gold"
            overlay
          />
          <TopCard
            image={approachImage}
            title="Our Approach"
            text="Insights into how we promote holistic wellness, sustainable living, and a deeper culture of environmental stewardship."
            button="How We Help"
            buttonClass="btn-green"
            overlay
          />
        </section>

        <section className="grid-two second-row">
          <TopCard
            image={pathwaysImage}
            title="Our Pathways"
            text="Explore our integrative wellness and ecological learning pathways designed to nurture mind, body, and spirit."
            button="View Programs"
            buttonClass="btn-green"
            overlay={false}
          />
          <TopCard
            image={communityImage}
            title="Connect & Grow"
            text="Join our community-centered initiatives dedicated to learning, connection, and sustainable ways of life."
            button="Get Involved"
            buttonClass="btn-gold"
            overlay={false}
          />
        </section>

        <section className="science-row">
          <article className="science-banner" style={{ backgroundImage: `url(${researchImage})` }}>
            <div className="science-shade">
              <h2>Advancing the Science of Well-Being</h2>
              <p>
                Supporting research on holistic solutions, eco-conscious health practices,
                and regenerative thinking for a healthier planet.
              </p>
              <button className="btn btn-gold">Learn More</button>
            </div>
          </article>

          <article className="science-side">
            <img src={labImage} alt="Researchers working with plants in a laboratory" />
          </article>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark footer-mark">✿</div>
          <div className="brand-text">
            <div className="brand-title">Liuli Society</div>
            <div className="brand-sub">OF AMERICA</div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Approach</a>
            <a href="#">Pathways</a>
            <a href="#">Community</a>
            <a href="#">Support</a>
          </div>

          <div className="footer-col">
            <h4>Programs</h4>
            <a href="#">About</a>
            <a href="#">Pathways</a>
            <a href="#">Research</a>
            <a href="#">Community</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>info@liulisociety.org</p>
            <p>(623) 122–4567</p>
            <p>Harmony, NH 02834</p>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>(533) 123–4587</p>
            <p>126 Holistic Way</p>
            <p>Harmony, NH 02834</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Liuli Society</span>
          <span>All rights reserved.</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>
    </div>
  )
}
