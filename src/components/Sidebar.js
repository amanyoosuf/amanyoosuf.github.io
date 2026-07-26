import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    const sidebarStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '140px',
        position: 'sticky',
        top: '60px'
    };

    const getNavLinkStyle = (path) => ({
        fontFamily: 'Georgia, serif',
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: location.pathname === path ? '#e05638' : '#111111',
        fontWeight: location.pathname === path ? '500' : 'normal',
        transition: 'color 0.2s ease'
    });

    return (
        <div style={sidebarStyle}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/" style={getNavLinkStyle('/')}>home</Link>
                <Link to="/projects" style={getNavLinkStyle('/projects')}>projects</Link>
                <Link to="/experience" style={getNavLinkStyle('/experience')}>experience</Link>
                <Link to="/teaching" style={getNavLinkStyle('/teaching')}>teaching</Link>
                <Link to="/athletics" style={getNavLinkStyle('/athletics')}>athletics</Link>
                <Link to="/awards" style={getNavLinkStyle('/awards')}>awards</Link>
            </nav>
        </div>
    );
}

export default Sidebar;
