import React, { useState, useCallback } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Headroom from 'react-headroom';
import Dropdown from './Dropdown';
import useScrollSpy from '../hooks/useScrollSpy';

const NAVIGATION_ITEMS = [
    { id: 'welcome', label: 'Home' },
    { id: 'aboutme', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'cricket', label: 'Cricket' },
    { id: 'tutoring', label: 'Tutoring' },
    { id: 'travel', label: 'Travel' }
];

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();
    
    const isHomePage = location.pathname === '/';
    const activeSection = useScrollSpy(
        isHomePage ? NAVIGATION_ITEMS.map(item => item.id) : [],
        100
    );

    const handleClick = useCallback(() => setClick(prev => !prev), []);
    
    const closeMobileMenu = useCallback(() => {
        setClick(false);
        if (window.innerWidth < 960) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, []);
    
    const onMouseEnter = useCallback(() => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }, []);
    
    const onMouseLeave = useCallback(() => {
        setDropdown(false);
    }, []);

    // Monospace text utility for custom navigation tags
    const linkStyle = {
        fontFamily: 'monospace',
        textDecoration: 'none',
        fontSize: '0.95rem',
        letterSpacing: '0.5px',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out'
    };

    return (
        <Headroom>
            <nav 
                className='navbar' 
                style={{ 
                    backgroundColor: '#020c1b', 
                    borderBottom: '2px solid rgba(100, 255, 218, 0.2)',
                    boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
                    transition: 'background-color 0.3s ease'
                }}
            >
                <div className='navbar-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 20px' }}>
                    
                    {/* Futuristic Brand Identity Link */}
                    <Link 
                        to='/' 
                        className='navbar-logo' 
                        onClick={closeMobileMenu}
                        style={{
                            color: '#64ffda',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            letterSpacing: '1px',
                            textDecoration: 'none'
                        }}
                    >
                        AMANUR // AY
                    </Link>
     
                    <div className='menu-icon' onClick={handleClick} style={{ color: '#64ffda' }}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '5px' }}>
                        {NAVIGATION_ITEMS.map(item => (
                            <li key={item.id} className='nav-item'>
                                {isHomePage ? (
                                    <ScrollLink 
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        className={`nav-links ${isHomePage && activeSection === item.id ? 'nav-links--active' : ''}`}
                                        onClick={closeMobileMenu}
                                        style={{
                                            ...linkStyle,
                                            color: isHomePage && activeSection === item.id ? '#64ffda' : '#ffffff'
                                        }}
                                    >
                                        {isHomePage && activeSection === item.id ? `.${item.label.toLowerCase()}()` : item.label}
                                    </ScrollLink>
                                ) : (
                                    <Link 
                                        to={`/#${item.id}`}
                                        className='nav-links'
                                        onClick={closeMobileMenu}
                                        style={{ ...linkStyle, color: '#ffffff' }}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        
                        {/* Custom Dropdown Trigger Module */}
                        <li 
                            className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <div 
                                className='nav-links'
                                onClick={() => {
                                    if (window.innerWidth < 960) {
                                        setDropdown(!dropdown);
                                    }
                                }}
                                style={{ ...linkStyle, color: dropdown ? '#64ffda' : '#ffffff', cursor: 'pointer' }}
                            >
                                Highlights <i className='fas fa-caret-down' style={{ marginLeft: '4px', color: '#64ffda' }} />
                            </div>
                            {dropdown && <Dropdown onClose={() => setDropdown(false)} closeMobileMenu={closeMobileMenu} />}
                        </li>
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
}

export default Navbar;
