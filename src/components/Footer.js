import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div 
      className='footer-container' 
      style={{ 
          backgroundColor: '#020c1b', 
          borderTop: '2px solid rgba(100, 255, 218, 0.2)',
          padding: '40px 20px',
          boxShadow: '0 -10px 30px -10px rgba(2, 12, 27, 0.7)'
      }}
    >
      {/* Primary Contact Node */}
      <div className='my-email' style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="mailto:amanur.yoosuf@connect.polyu.hk">amanur.yoosuf@connect.polyu.hk</a>
      </div>
       
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons' style={{ display: 'flex', gap: '25px', justifyContent: 'center', margin: '25px 0' }}>
            
            {/* GitHub */}
            <a className='social-icon-link github' href='https://github.com/amanyoosuf' target='_blank' rel='noreferrer' aria-label='GitHub'>
              <i className='fab fa-github fa-2x' style={{color: '#64ffda', transition: 'transform 0.2s'}} />
            </a>

            {/* LinkedIn */}
            <a className='social-icon-link linkedin' href='https://www.linkedin.com/in/amanuryoosuf12' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
              <i className='fab fa-linkedin fa-2x' style={{color: '#64ffda'}} />
            </a>

            {/* Instagram */}
            <a className='social-icon-link instagram' href='https://instagram.com/amanyoosuf' target='_blank' rel='noreferrer' aria-label='Instagram'>
              <i className='fab fa-instagram fa-2x' style={{color: '#64ffda'}} />
            </a>

            {/* Facebook */}
            <a className='social-icon-link facebook' href='https://facebook.com/aman.yoosuf.2025/' target='_blank' rel='noreferrer' aria-label='Facebook'>
              <i className='fab fa-facebook fa-2x' style={{color: '#64ffda'}} />
            </a>

            {/* WhatsApp */}
            <a className='social-icon-link whatsapp' href='https://wa.me/85297630974' target='_blank' rel='noreferrer' aria-label='WhatsApp'>
              <i className='fab fa-whatsapp fa-2x' style={{color: '#64ffda'}} />
            </a>

          </div>
        </div>
      </section>

      {/* Clean Copyright & Identity Rights Frame */}
      <section className='social-media' style={{ textAlign: 'center' }}>
        <small className='website-rights' style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'monospace' }}>
          Amanur Yoosuf © 2026
        </small>
      </section>
    </div>
  );
}

export default Footer;
