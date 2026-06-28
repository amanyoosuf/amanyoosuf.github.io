import React, { useState, useCallback } from 'react';
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Headroom from 'react-headroom';
import Dropdown from './Dropdown';
import useScrollSpy from '../hooks/useScrollSpy';

// Completely updated configuration map targeting your exact single-page layout IDs
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
    
    // Enables scroll spy on home page to track your active sections on scroll
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

    return (
        <Headroom>
            <nav className='navbar'>
                <div className='navbar-container'>
                    
                    {/* Brand Name Logo instead of a generic layout marker */}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Amanur Yoosuf
                    </Link>
     
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                                    >
                                        {item.label}
                                    </ScrollLink>
                                ) : (
                                    <Link 
                                        to={`/#${item.id}`}
                                        className='nav-links'
                                        onClick={closeMobileMenu}
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
                            >
                                Highlights <i className='fas fa-caret-down' />
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
