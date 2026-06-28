import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      {/* Primary Contact Node */}
      <div className='my-email'>
        <a href="mailto:amanur.yoosuf@connect.polyu.hk">amanur.yoosuf@connect.polyu.hk</a>
      </div>
       
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            {/* GitHub */}
            <Link
              className='social-icon-link github'
              to='https://github.com/yourusername'
              target='_blank'
              aria-label='GitHub'
            >
              <i className='fab fa-github fa-2x' style={{color: 'white'}} />
            </Link>

            {/* LinkedIn */}
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/yourusername'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin fa-2x' style={{color: 'white'}} />
            </Link>

            {/* WhatsApp Direct Chat Interlock */}
            <Link
              className='social-icon-link whatsapp'
              to='https://wa.me/85297630974'
              target='_blank'
              aria-label='WhatsApp'
            >
              <i className='fab fa-whatsapp fa-2x' style={{color: 'white'}} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clean Copyright & Identity Rights Frame */}
      <section className='social-media'>
        <small className='website-rights'>Amanur Yoosuf © 2026</small>
      </section>
    </div>
  );
}

export default Footer;
