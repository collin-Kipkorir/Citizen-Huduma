import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaArrowRight, FaUserPlus, FaUserEdit, FaGraduationCap, FaMoneyCheckAlt } from "react-icons/fa";
import { BsFileEarmarkText, BsPersonVcard, BsSearch, BsGear } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import './CyberServicesUI.css';

export default function CyberServicesUI() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <a href="tel:+254710420222" className="contact-link">
              <span>📞</span> (+254)723 914 386
            </a>
            <a href="mailto:services@digitali.co.ke" className="contact-link">
              <span>✉️</span> services@citizenhuduma.co.ke
            </a>
          </div>
          <div className="auth-buttons">
            <a href="/login" className="login-btn">Login</a>
            <a href="/register" className="register-btn">Register</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="main-header">
        <div className="container header-content">
          <div className="logo">Citizen Huduma</div>
          
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {["Home", "IT Services", "Web Services", "Cyber Services"].map((item) => (
                <li key={item}>
                  <a 
                    href="/" 
                    className={`nav-link ${item === "Home" ? "active" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <button className="contact-btn">Contact Us</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text-content">
              <div className="welcome-badge">
                WELCOME TO CITIZEN HUDUMA
              </div>
              <h4 className="hero-title">
                Your One-Stop Centre For All Government Services
              </h4>
              <p className="hero-description">
                Fast, secure, and professional digital solutions for all your government service needs. Experience seamless service delivery at your fingertips.
              </p>
              <div className="hero-cta">
                <button className="primary-btn">
                  Get Started <FaArrowRight />
                </button>
                <button className="secondary-btn">
                  <FaRegLightbulb /> Learn More
                </button>
              </div>
              <div className="hero-stats">
                <div className="user-avatars">
                  {[1,2,3,4].map((_, i) => (
                    <div key={i} className="avatar-circle"></div>
                  ))}
                </div>
                <div className="stats-text">
                  <strong>500+ Satisfied Clients</strong>
                  <span>Join our growing community</span>
                </div>
              </div>
            </div>
            
            <div className="hero-image-container">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="image-wrapper"
              >
                <div className="image-background"></div>
                <img 
                  src="/images/contact-centre.webp" 
                  alt="Hero"
                  className="hero-image"
                />
                <div className="floating-card top">
                  <BsPersonVcard size={20} />
                  <span>ID Services</span>
                </div>
                <div className="floating-card bottom">
                  <BsFileEarmarkText size={20} />
                  <span>Quick Processing</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="services-section">
        <div className="container">
          {/* Huduma Centre Services */}
          <div className="section-header">
            <div className="section-title-group">
            
              <h4 className="section-title text-start">Unified Huduma Centre Services</h4>
              <p className="section-description text-start">Access government services easily and efficiently</p>
            </div>
            <button className="view-all-btn">
              View All Services <FaArrowRight />
            </button>
          </div>

          <div className="services-grid">
            {[
              {
                title: "Birth Certificate Application",
                icon: <BsFileEarmarkText size={28} />,
                description: "Apply for birth certificates quickly and easily",
                link: "Read More"
              },
              {
                title: "National ID Card Application",
                icon: <BsPersonVcard size={28} />,
                description: "Apply for a national ID card",
                link: "Read More"
              },
              {
                title: "Land Search Application",
                icon: <BsSearch size={28} />,
                description: "Search for land information",
                link: "Read More"
              }
            ].map((service, index) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                key={index} 
                className="service-card"
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                  {service.link} <FaArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* SHA & NSSF Services */}
<section className="services-section">
  <div className="container">
    <div className="section-header">
      <div className="section-title-group">
        <h4 className="section-title text-start">SHA & NSSF Services</h4>
        <p className="section-description text-start">Register and manage your social security accounts easily</p>
      </div>
      <button className="view-all-btn">
        Get Started <FaArrowRight />
      </button>
    </div>

    <div className="services-grid">
      {[
        {
          title: "SHA Registration",
          icon: <FaUserPlus size={28} />,
          description: "Register for a Social Security Fund account",
          link: "Read More"
        },
        {
          title: "SHA Account Update",
          icon: <FaUserEdit size={28} />,
          description: "Update your Social Security Fund account",
          link: "Make Application"
        },
        {
          title: "NSSF Registration",
          icon: <GiReceiveMoney size={28} />,
          description: "Register for a National Social Security Fund account",
          link: "Make Application",
          highlight: true
        }
      ].map((service, index) => (
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          key={index} 
          className={`service-card ${service.highlight ? 'highlight' : ''}`}
        >
          <div className="service-icon">
            {service.icon}
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
            {service.link} <FaArrowRight size={14} />
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-dark py-4">
        <div className="container">
          <div className="row">
            {/* Industries We Serve */}
            <div className="col-md-3 mb-4">
            <h5 className="text-white mb-3 text-start">Industries We Serve</h5>
              <ul className="list-unstyled">
                {[
                  'Government Services',
                  'SME Enterprises',
                  'Travel and Tourism',
                  'Real Estate',
                  'View All'
                ].map((item) => (
                  <li key={item} className="mb-2">
                    <a href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                       className="text-secondary text-decoration-none d-flex align-items-center">
                      <FaArrowRight className="text-warning me-2" size={10} />
                      <span className="hover-orange">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 mb-4">
              <h5 className="text-white mb-3 text-start">Useful Links</h5>
              <ul className="list-unstyled">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Disclaimer',
                  'Refund Policy',
                  'Client Testimonials'
                ].map((item) => (
                  <li key={item} className="mb-2">
                    <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                       className="text-secondary text-decoration-none d-flex align-items-center">
                      <FaArrowRight className="text-warning me-2" size={10} />
                      <span className="hover-orange">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h5 className="text-white mb-3 text-start">Quick Links</h5>
              <ul className="list-unstyled">
                {[
                  'Customer Dashboard',
                  'Affiliate Dashboard',
                  'Partner Program',
                  'Our Portfolio',
                  'Work With Us'
                ].map((item) => (
                  <li key={item} className="mb-2">
                    <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                       className="text-secondary text-decoration-none d-flex align-items-center">
                      <FaArrowRight className="text-warning me-2" size={10} />
                      <span className="hover-orange">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Intouch */}
            <div className="col-md-3 mb-4">
              <h5 className="text-white mb-3 text-start">Get Intouch</h5>
              <ul className="list-unstyled mb-4">
                <li className="text-secondary mb-2 d-flex align-items-start">
                  <span className="me-2">📍</span>
                  Tengecha Lane, Kco
                </li>
                <li className="text-secondary mb-2 d-flex align-items-start">
                  <span className="me-2">✉️</span>
                  services@citizenhuduma.co.ke
                </li>
                <li className="text-secondary mb-2 d-flex align-items-start">
                  <span className="me-2">📞</span>
                  (+254) 723 914 386
                </li>
              </ul>
              <h6 className="text-white mb-3 text-start">Follow On Social</h6>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-primary btn-sm rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-info btn-sm rounded-circle">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-primary btn-sm rounded-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-success btn-sm rounded-circle">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-top border-secondary mt-4 pt-4">
            <div className="text-center text-secondary small">
              <p className="mb-1">Developed & Maintained By Metacode Solutions</p>
              <p className="mb-0">Copyright © 2025 All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}