import React from 'react';

function Experience() {
    const itemStyle = { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '30px' };

    return (
        <div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontWeight: 'normal', color: '#111', borderBottom: '1px solid #eaeaea', paddingBottom: '8px', marginBottom: '30px' }}>
                Work Experience
            </h2>

            <div style={itemStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ color: '#111' }}>Glow-in-the-Dark Corridor Strips: Zero-Energy Hall Safety</strong>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>2025</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#444' }}>
                    Developed a sustainability initiative proposal utilizing photoluminescent floor strips that absorb light during the day and glow faintly at night, providing a continuous, zero-energy navigation source for residential halls like Homantin Orange Hall.
                </p>
            </div>

            <div style={itemStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ color: '#111' }}>Power Grid Resilience & State Estimation</strong>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>Undergraduate Research (URIS)</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#444' }}>
                    Investigated advanced methodologies for smart grid reliability and state estimation frameworks under faculty mentorship, focusing on modern infrastructure stability.
                </p>
            </div>
        </div>
    );
}

export default Experience;
