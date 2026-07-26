import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
    const pageStyle = {
        backgroundColor: '#fbfbfa',
        color: '#111111',
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

    const contentStyle = {
        flex: 1,
        fontFamily: 'Georgia, serif',
        lineHeight: '1.6',
        fontSize: '1.05rem',
        color: '#222222'
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <Sidebar />
                <div style={contentStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
