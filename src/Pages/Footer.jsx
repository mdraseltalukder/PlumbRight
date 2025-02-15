import { Facebook, Twitter, Linkedin, Globe, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer mt-1">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-sections">
          {/* About Us Section */}
          <div className="footer-section">
            <h3 className="footer-heading">ABOUT US</h3>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna ali qua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="social-icons">
              <a href="https://x.com/mdraseltalukdr"  target="_blank" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/mdraseltalukder0/" target="_blank" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/md-rasel-talukderbd/" target="_blank" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/mdraseltalukdrr/" target="_blank" className="social-icon" aria-label="Website">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Our Prices</a>
              </li>
              <li>
                <a href="#">Certification</a>
              </li>
              <li>
                <a href="#">Our Prices</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">All Services</a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3 className="footer-heading">SERVICES</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Drain Cleaning</a>
              </li>
              <li>
                <a href="#">Faucet Repairs</a>
              </li>
              <li>
                <a href="#">Sewer Cleaning</a>
              </li>
              <li>
                <a href="#">Heating & Cooling</a>
              </li>
              <li>
                <a href="#">Water Treatment</a>
              </li>
            </ul>
          </div>

          {/* Mascot Image */}
          <div className="footer-mascot">
            <img
              src="images/foot.png"
              alt="24H Emergency Response Plumber"
              width={300}
              height={300}
              className="mascot-image"
            />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <p className="newsletter-text">
            Subscribe now and receive weekly newsletter with new tips and exciting offers or discounts.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">Copyright © Plumbing Spl 2023. All rights reserved.</p>
          <p className="credits">Developed by: Md Rasel</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

