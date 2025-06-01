import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jazzlogo from '../components/jazzcash.png'
import easypaisalogo from '../components/Easypaisa.png'

const Footer = () => {


  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  const goToAbout = () => navigate('/about');
  const goToContact = () => navigate('/contact');
  const goToBlogPage = () => navigate('/blogs')


  return (
    <>


      <div className='laptop-footer'  >

        <footer className="footer-con">
          <div className="footer-grid">
            {/* Shopping & Products */}
            <div>
              <h3 className="footer-title">Shop</h3>
              <ul className="footer-list">
                <li>T-Shirts</li>
                <li>New Arrivals</li>
                <li>Summer Collection</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="footer-title">Customer Service</h3>
              <ul className="footer-list">
                <li>Help Center</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Exchanges</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
              </ul>
            </div>

            {/* About the Brand */}
            <div>
              <h3 className="footer-title">About CozyWear</h3>
              <ul className="footer-list">
                <li onClick={goToAbout}>Our Journey</li>
                <li onClick={goToContact}>Contact Us</li>
                <li onClick={goToBlogPage}>Blog</li>
              </ul>
            </div>

            {/* Newsletter & Socials */}
            <div>
              <h3 className="footer-title">Stay Connected</h3>
              <div className="newsletter">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">
                  Subscribe
                </button>
              </div>
              <div className="social-icons">
                <i id='fb' className="fa-brands fa-facebook"></i>
                <i id='tiktok' className="fa-brands fa-tiktok"></i>
                <i id='insta' className="fa-brands fa-instagram"></i>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Payment Methods & Legal */}
          <div className="footer-bottom">
            {/* Payment Methods */}
            <div className="payment-icons">
              <img src={jazzlogo} alt="jazzcash" className='payment-logo' />
              <img src={easypaisalogo} alt="easypaisa" className='payment-logo' />
            </div>

            {/* Legal Info */}
            <div className="legal-text">
              © 2025 CozyWear. All rights reserved. | Privacy Policy | Terms & Conditions
            </div>
          </div>
        </footer>

      </div>
      {/* Mobile View Footer */}



      <div className="mobile-footer">
        {[
          {
            title: 'Get In Touch',
            key: 'getInTouch',
            content: (
              <div className="dropdown-content">
                <p>We’d love to hear from you! <br />  123 Cozy Street, Fashion City</p>
                <p>Phone: +123 456 7890 <br /> support@cozywear.com</p>
              </div>
            ),
          },
          {
            title: 'Customer Links',
            key: 'customerLinks',
            content: (
              <div className="dropdown-content">
                <p onClick={goToAbout}>Our Journey</p>
                <p onClick={goToContact}>Contact Us</p>
                <p onClick={goToBlogPage}>Blog</p>

              </div>
            ),
          },
          {
            title: 'Useful Links',
            key: 'usefulLinks',
            content: (
              <div className="dropdown-content">
                <p>Help Center</p>
                <p>Returns & Exchanges</p>
                <p>Order Tracking</p>
                <p>Privacy Policy</p>
              </div>
            ),
          },
        ].map((section) => (
          <div key={section.key} className="mobile-footer-section">
            <div className="mobile-footer-row" onClick={() => toggleSection(section.key)}>
              <span className="section-title">{section.title}</span>
              <span className="icon-toggle">{openSection === section.key ? '−' : '+'}</span>
            </div>

            <div
              className={`mobile-footer-dropdown ${openSection === section.key ? 'open' : 'closed'
                }`}
            >
              {section.content}
            </div>
          </div>
        ))}

        <div className="footer-divider"></div>

        <div className="payment-icons">
          <img src={jazzlogo} alt="jazzcash" className="payment-logo" />
          <img src={easypaisalogo} alt="easypaisa" className="payment-logo" />
        </div>

        <div className="legal-text">
          © 2025 CozyWear. All rights reserved.
        </div>
      </div>



    </>
  )
}

export default Footer;