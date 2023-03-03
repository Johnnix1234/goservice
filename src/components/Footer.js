import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Investors</Link>
          </div>
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Investors</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Investors</Link>
          </div>
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Investors</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link>
              <span> Origin</span>
              <i className="fa-sharp fa-solid fa-microchip"></i>
            </Link>
          </div>
          <small className="website-rights">Origin &copy;</small>
          <div className="social-icons">
            <Link
              className="social-icon facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link
              className="social-icon instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
