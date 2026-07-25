import React from 'react';
import "../App.css";

function Home() {
    // Inline styling to achieve that exact clean, paper-like academic layout (cream background, dark typography)
    const pageStyle = {
        backgroundColor: '#fbfbfa',
        color: '#111111',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 40px',
        boxSizing: 'border-box'
    };

    const containerStyle = {
        display: 'flex',
        maxWidth: '900px',
        width: '100%',
        gap: '120px',
        alignItems: 'flex-start'
    };

    const sidebarStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '140px',
        position: 'sticky',
        top: '60px'
    };

    const navLinkStyle = {
        fontFamily: 'Georgia, serif',
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: '#111111',
        transition: 'color 0.2s ease'
    };

    const activeNavLinkStyle = {
        ...navLinkStyle,
        color: '#e05638', // Coral accent matching the reference image
        fontWeight: '500'
    };

    const contentStyle = {
        flex: 1,
        fontFamily: 'Georgia, serif',
        lineHeight: '1.6',
        fontSize: '1.05rem',
        color: '#222222'
    };

    const inlineLinkStyle = {
        color: '#e05638',
        textDecoration: 'none'
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                
                {/* LEFT SIDEBAR: Logo / Icon & Navigation */}
                <div style={sidebarStyle}>
                    {/* Small minimalist icon/logo placeholder */}
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                        ⚡
                    </div>
                    
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <a href="#home" style={activeNavLinkStyle}>home</a>
                        <a href="#projects" style={navLinkStyle}>projects</a>
                        <a href="#experience" style={navLinkStyle}>experience</a>
                        <a href="#teaching" style={navLinkStyle}>teaching</a>
                        <a href="#athletics" style={navLinkStyle}>athletics</a>
                        <a href="#awards" style={navLinkStyle}>awards</a>
                    </nav>
                </div>

                {/* RIGHT CONTENT AREA: Minimalist Intro */}
                <div style={contentStyle}>
                    <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.4rem', fontWeight: 'normal', margin: '0 0 25px 0', color: '#111' }}>
                        Amanur Yoosuf
                    </h1>

                    <p style={{ marginBottom: '20px' }}>
                        Hello! I'm an undergraduate at <a href="https://www.polyu.edu.hk" target="_blank" rel="noreferrer" style={inlineLinkStyle}>The Hong Kong Polytechnic University</a> studying Electrical Engineering with a secondary major in Artificial Intelligence & Data Analytics (AIDA). I am broadly interested in power systems, smart grid state estimation, and embedded electronics.
                    </p>

                    <p style={{ marginBottom: '20px' }}>
                        I've worked on power grid resilience research via the URIS program, educational technology and STEM instruction at <a href="https://www.scholasticchess.hk" target="_blank" rel="noreferrer" style={inlineLinkStyle}>Scholastic Chess</a>, and advanced curriculum tutoring at <a href="https://www.foryoued.com" target="_blank" rel="noreferrer" style={inlineLinkStyle}>For You Education</a> in Causeway Bay.
                    </p>

                    <p style={{ marginBottom: '30px' }}>
                        Outside of engineering, I play competitive cricket representing both the <span style={{ color: '#111', fontWeight: 'bold' }}>PolyU Cricket Team</span> and the <a href="https://www.usrc.org.hk" target="_blank" rel="noreferrer" style={inlineLinkStyle}>United Services Recreation Club (USRC)</a>.
                    </p>

                    <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#666' }}>
                        amanur.yoosuf [at] connect.polyu.hk
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;

```
