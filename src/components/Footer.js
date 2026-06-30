import React from 'react';
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
          <div className='social-icons' style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0' }}>
            
            {/* GitHub */}
            <a
              className='social-icon-link github'
              href='https://github.com/amanyoosuf'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github fa-2x' style={{color: 'white'}} />
            </a>

            {/* LinkedIn */}
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/amanuryoosuf12'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin fa-2x' style={{color: 'white'}} />
            </a>

            {/* Instagram */}
            <a
              className='social-icon-link instagram'
              href='https://instagram.com/amanyoosuf'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram fa-2x' style={{color: 'white'}} />
            </a>

            {/* Facebook */}
            <a
              className='social-icon-link facebook'
              href='https://facebook.com/aman.yoosuf.2025/'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook fa-2x' style={{color: 'white'}} />
            </a>

            {/* WhatsApp Direct Chat Interlock */}
            <a
              className='social-icon-link whatsapp'
              href='https://wa.me/85297630974'
              target='_blank'
              rel='noreferrer'
              aria-label='WhatsApp'
            >
              <i className='fab fa-whatsapp fa-2x' style={{color: 'white'}} />
            </a>

          </div>
        </div>
      </section>

      {/* Clean Copyright & Identity Rights Frame */}
      <section className='social-media'>
        <small className='website-rights'>By Aman © 2026</small>
      </section>
    </div>
  );
}

export default Footer;
