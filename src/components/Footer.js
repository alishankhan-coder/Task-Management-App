import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/alishankhan-coder',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/ali-shan-b7308027a',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: '#',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: '#',
      color: '#e1306c'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: '#',
      color: '#1877f2'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: '#',
      color: '#ff0000'
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: '#',
      color: '#5865f2'
    },
    {
      name: 'Telegram',
      icon: 'fab fa-telegram',
      url: '#',
      color: '#0088cc'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-title">
              <i className="fas fa-tasks"></i>
              TaskFlow
            </h3>
            <p className="footer-description">
              Experience the future of task management with our cutting-edge, 
              futuristic interface designed for modern productivity.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Features</h4>
              <ul>
                <li><a href="#features">Task Management</a></li>
                <li><a href="#features">Priority System</a></li>
                <li><a href="#features">Category Filter</a></li>
                <li><a href="#features">Real-time Stats</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Developer</h4>
              <ul>
                <li><a href="mailto:alishankhanofficial@gmail.com">Email</a></li>
                <li><a href="tel:+923018826093">Phone</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#resume">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-social">
          <h4>Connect With Creator</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
                style={{ '--social-color': social.color }}
              >
                <i className={social.icon}></i>
                <span className="social-tooltip">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <div className="copyright-text">
              <p>
                © {currentYear} <strong>TaskFlow</strong>. Crafted with 
                <i className="fas fa-heart heart-icon"></i> by 
                <strong className="creator-name"> Ali Shan</strong>
              </p>
              <p className="subtitle">
                Full-Stack Developer | Python Specialist | React Enthusiast
              </p>
            </div>
            <div className="footer-tech">
              <span className="tech-badge">
                <i className="fab fa-react"></i> React
              </span>
              <span className="tech-badge">
                <i className="fab fa-js"></i> JavaScript
              </span>
              <span className="tech-badge">
                <i className="fab fa-css3-alt"></i> CSS3
              </span>
              <span className="tech-badge">
                <i className="fab fa-html5"></i> HTML5
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="rgba(0,255,255,0.1)"/>
          <path d="M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z" fill="rgba(255,0,255,0.1)"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
