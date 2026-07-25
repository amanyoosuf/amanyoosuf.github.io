import React from 'react';
import "../App.css";
import Cards from './Cards'; 
import './mainCon.css';
import Footer from './Footer'; 

function Home() {
    // Reusable styles for the futuristic turquoise section headers
    const sectionHeaderStyle = {
        fontFamily: 'monospace',
        color: '#64ffda',
        fontSize: '1.6rem',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(100, 255, 218, 0.05)',
        borderLeft: '3px solid #64ffda',
        padding: '6px 16px',
        borderRadius: '0 4px 4px 0',
        marginBottom: '35px'
    };

    return (
        <> 
            {/* 1. HERO LANDING ZONE */}
            <header id='welcome' className='hero-section_container' style={{ paddingTop: '80px' }}>
                <div className='hero-content_wrapper'>
                    <div className='hero-intro-text'>
                        <span className='hero-subtitle'>📍 Hong Kong | Year 2 @ PolyU</span>
                        <h1 className='hero-title'>Amanur Yoosuf</h1>
                        <p className='hero-tagline'>
                            Electrical Engineering student with a secondary major in Artificial Intelligence & Data Analytics (AIDA). Exploring power systems, smart grids, and electronics.
                        </p>
                        
                        {/* Live Engineering Status Widget (Goal 1: Live Demo / Interactive Element) */}
                        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-sm text-emerald-400 flex items-center gap-3 my-4" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(100, 255, 218, 0.2)', padding: '12px 16px', borderRadius: '8px', maxWidth: '600px' }}>
                            <span className="relative flex h-3 w-3" style={{ position: 'relative', display: 'flex', height: '12px', width: '12px' }}>
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#34d399', opacity: 0.75 }}></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '12px', width: '12px', backgroundColor: '#10b981' }}></span>
                            </span>
                            <span style={{ color: '#64ffda' }}>Status: Systems Nominal | Core Focus: Power Systems, Embedded Controls & High-Performance STEM Education</span>
                        </div>

                        <div className='hero-cta-buttons'>
                            <a href='#aboutme' className='cta-btn primary'>About Me</a>
                            <a href='mailto:amanur.yoosuf@connect.polyu.hk' className='cta-btn secondary'>Let's Connect</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. EDUCATION SECTION */}
            <section id='education' className='academic-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>01. Education</h2>
                    
                    {/* POLYU CARD */}
                    <div className='academic-timeline-card' style={{ marginBottom: '25px' }}>
                        <div className='education-flex-container' style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            
                            {/* Left Side: PolyU Logo */}
                            <div className='education-logo-zone' style={{ flexShrink: 0, width: '60px', marginTop: '5px' }}>
                                <img 
                                    src='./polyu.png' 
                                    className='institution-logo' 
                                    alt="PolyU Logo" 
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '6px' }} 
                                />
                            </div>
                            
                            {/* Right Side: PolyU Academic Details */}
                            <div className='education-text-zone' style={{ flexGrow: 1 }}>
                                <div className='academic-card-header'>
                                    <h3>The Hong Kong Polytechnic University</h3>
                                    <span className='academic-period'>September 2025 - Present</span>
                                </div>
                                <h4 className='academic-degree'>BEng in Electrical Engineering (with a Secondary Major in AIDA)</h4>
                                <p className='academic-grade'><strong>Grade:</strong> 3.53/4.30 (as of Year 1)</p>
                            </div>
                            
                        </div>
                    </div>
            
                    {/* LYCEUM CARD */}
                    <div className='academic-timeline-card'>
                        <div className='education-flex-container' style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            
                            {/* Left Side: Lyceum Logo */}
                            <div className='education-logo-zone' style={{ flexShrink: 0, width: '60px', marginTop: '5px' }}>
                                <img 
                                    src='./lyceum aristotle.png' 
                                    className='institution-logo' 
                                    alt="Lyceum International School Logo" 
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '6px' }} 
                                />
                            </div>
                            
                            {/* Right Side: Lyceum Academic Details */}
                            <div className='education-text-zone' style={{ flexGrow: 1 }}>
                                <div className='academic-card-header'>
                                    <h3>Lyceum International School Nugegoda, Sri Lanka</h3>
                                    <span className='academic-period'>February 2022 - June 2024</span>
                                </div>
                                <h4 className='academic-degree'>Edexcel International Advanced Level</h4>
                                <p className='academic-grade'><strong>Result:</strong> 4A* (Subjects: Mathematics, Chemistry, Biology, Physics)</p>
                            </div>
                            
                        </div>
                    </div>
            
                    <div className='placeholder-zone'>
                        {/* Future milestones placeholder */}
                    </div>
                </div>
            </section>

            {/* 4. EXPERIENCE SECTION */}
            <section id='experience' className='work-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>02. Experience</h2>
        
                    {/* EXPERIENCE CARD 1: URIS RESEARCH */}
                    <div className='work-timeline-card' style={{ marginBottom: '25px' }}>
                        <div className='experience-flex-container' style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                
                            {/* Left Side: Logo Block */}
                            <div className='experience-logo-zone' style={{ flexShrink: 0, width: '60px', marginTop: '5px' }}>
                                <img 
                                    src='./polyu.png' 
                                    className='company-logo' 
                                    alt="PolyU Logo" 
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '6px' }} 
                                />
                            </div>
                
                            {/* Right Side: Text Block */}
                            <div className='experience-text-zone' style={{ flexGrow: 1 }}>
                                <div className='work-card-header'>
                                    <h3>Undergraduate Researcher (URIS)</h3>
                                    <span className='work-period'>Sep 2026 - Present</span>
                                </div>
                                <h4 className='work-organization'>The Hong Kong Polytechnic University</h4>
                                <p className='work-details'>
                                    Participating in the Undergraduate Research and Innovation Scheme (URIS) at PolyU. Currently working on making power grids smarter and more resilient using AI-driven models for real-time state estimation.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* EXPERIENCE CARD 2: TUTORING */}
                    <div className='work-timeline-card' style={{ marginBottom: '25px' }}>
                        <div className='experience-flex-container' style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                
                            {/* Left Side: Logo Block */}
                            <div className='experience-logo-zone' style={{ flexShrink: 0, width: '60px', marginTop: '5px' }}>
                                <img 
                                    src='./scholastic.gif' 
                                    className='company-logo' 
                                    alt="Scholastic Chess Logo" 
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '6px' }} 
                                />
                            </div>
                
                            {/* Right Side: Text Block */}
                            <div className='experience-text-zone' style={{ flexGrow: 1 }}>
                                <div className='work-card-header'>
                                    <h3>STEM Tutor</h3>
                                    <span className='work-period'>Oct 2025 - Present</span>
                                </div>
                                <h4 className='work-organization'>Scholastic Chess</h4>
                                <p className='work-details'>
                                    Delivered engaging STEM instruction through Minecraft Education to students aged 6–12 from international schools across Hong Kong, fostering creativity, collaboration, and problem-solving skills.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* EXPERIENCE CARD 3: FOR YOU EDUCATION */}
                    <div className='work-timeline-card' style={{ marginBottom: '25px' }}>
                        <div className='experience-flex-container' style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                
                            {/* Left Side: Logo Block */}
                            <div className='experience-logo-zone' style={{ flexShrink: 0, width: '60px', marginTop: '5px' }}>
                                <img 
                                    src='./for_you_education_limited_logo.jpeg' 
                                    className='company-logo' 
                                    alt="For You Education Logo" 
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '6px' }} 
                                />
                            </div>
                
                            {/* Right Side: Text Block */}
                            <div className='experience-text-zone' style={{ flexGrow: 1 }}>
                                <div className='work-card-header'>
                                    <h3>DSE/IGCSE/IB/SAT Tutor</h3>
                                    <span className='work-period'>Sep 2025 - Present</span>
                                </div>
                                <h4 className='work-organization'>For You Education</h4>
                                <p className='work-details'>
                                    Delivered premium academic tutoring in Advanced Level Biology, Chemistry, Mathematics and Physics to students from top international schools—including HKIS, SIS, WIS, KGV, and St. Paul's Convent, at the primary Causeway Bay center.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* 5. PROJECTS SECTION */}
            <section id='projects' className='portfolio-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>03. Projects</h2>
                    <Cards /> 
                    <div className='placeholder-zone'>
                        {/* Custom project sub-lines layout placeholder */}
                    </div>
                </div>
            </section>

            {/* 6. HONORS & AWARDS SECTION */}
            <section id='awards' className='recognition-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>04. Honors & Awards</h2>
                    
                    <div className='award-item-row'>
                        <span className='award-year'>2026</span>
                        <div className='award-text-content'>
                            <h3>Talent Development Scholarship 2025/26 (valued at 10,000 HKD)</h3>
                        </div>
                    </div>

                    <div className='award-item-row'>
                        <span className='award-year'>2026</span>
                        <div className='award-text-content'>
                            <h3>Undergraduate Research & Innovation Scheme (URIS) Scholarship & Grant (valued at 50,000 HKD)</h3>
                        </div>
                    </div>

                    <div className='award-item-row'>
                        <span className='award-year'>2025</span>
                        <div className='award-text-content'>
                            <h3>PolyU Academic Entry Scholarship (valued at almost 1M HKD)</h3>
                        </div>
                    </div>

                    <div className='award-item-row'>
                        <span className='award-year'>2024</span>
                        <div className='award-text-content'>
                            <h3>Edexcel High Achiever Award</h3>
                        </div>
                    </div>

                    <div className='award-item-row'>
                        <span className='award-year'>2022</span>
                        <div className='award-text-content'>
                            <h3>Cambridge Outstanding Learner Award</h3>
                        </div>
                    </div>
                    
                    <div className='placeholder-zone'>
                        {/* Future honors layout placeholder */}
                    </div>
                </div>
            </section>

            {/* 7. CRICKET SECTION */}
            <section id='cricket' className='athletics-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>05. Cricket</h2>
                    <div className='athletics-profile-card'>
                        
                        <p style={{ fontSize: '1.15rem', fontWeight: 'bold', lineHeight: '1.6', color: '#ffffff' }}>
                            On weekends, you’ll find me on the cricket pitch. I’ve played cricket my whole life and currently proudly represent both the <strong>PolyU Cricket Team</strong> and the <strong>United Services Recreation Club (USRC)</strong>. You can have a look at my Hong Kong Cricket profile <a href="https://cricclubs.com/CricketHongKong/viewPlayer.do?playerId=6589217&clubId=1105594" target="_blank" rel="noreferrer" style={{ color: '#64ffda', textDecoration: 'underline', fontWeight: 'bold' }}>here</a>.
                        </p>

                        {/* Cricket Action Photos Row Directly Below Text */}
                        <div className='cricket-photos-row' style={{ display: 'flex', gap: '20px', marginTop: '25px', flexWrap: 'wrap' }}>
                            
                            {/* Photo 1 */}
                            <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                                <img 
                                    src='./polyucricketteam1.jpg' 
                                    alt="PolyU Cricket Team" 
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                                />
                            </div>

                            {/* Photo 2 */}
                            <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                                <img 
                                    src='./polyucricketteam2.jpg' 
                                    alt="Cricket Training" 
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                                />
                            </div>

                            {/* Photo 3 */}
                            <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                                <img 
                                    src='./usrcinaction.jpg' 
                                    alt="Playing for USRC" 
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                                />
                            </div>

                            {/* Photo 4 */}
                            <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                                <img 
                                    src='./polyuinaction.jpg' 
                                    alt="Playing for PolyU" 
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                                />
                            </div>

                            {/* Photo 5 */}
                            <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                                <img 
                                    src='./usrcinaction2.jpg' 
                                    alt="Playing for USRC" 
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                                />
                            </div>

                            {/* Photo 6 */}
                            <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                                <img 
                                    src='./platepolyu.jpg' 
                                    alt="Winning with PolyU" 
                                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                                />
                            </div>

                        </div>

                    </div>
                </div> 
            </section>

            {/* 8. TUTORING SUMMARY PREVIEW SECTION (Goal 3: Dedicated Sub-Page / Module feel) */}
            <section id='tutoring' className='services-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>06. Tutoring Hub</h2>
                    <div className='tutoring-pitch-card' style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(100, 255, 218, 0.15)', padding: '30px', borderRadius: '12px' }}>
                        
                        {/* Professional Metrics Callout for Tutoring */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                            <div style={{ background: 'rgba(30, 41, 59, 0.7)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid #64ffda' }}>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Rate / Tier</span>
                                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff', margin: '5px 0 0' }}>400 HKD <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#64ffda' }}>/ hr</span></p>
                            </div>
                            <div style={{ background: 'rgba(30, 41, 59, 0.7)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid #64ffda' }}>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Volume & Impact</span>
                                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff', margin: '5px 0 0' }}>15k HKD <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#64ffda' }}>/ mo</span></p>
                            </div>
                            <div style={{ background: 'rgba(30, 41, 59, 0.7)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid #64ffda' }}>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Track Record</span>
                                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff', margin: '5px 0 0' }}>50+ Students <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#64ffda' }}>Global</span></p>
                            </div>
                        </div>

                        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#ffffff' }}>
                            Alongside my academics, I maintain a high-impact academic tutoring practice. Since 2022, I have had the privilege of guiding more than 50 students across 10+ global territories through rigorous international school curricula to achieve top-tier results. Currently, I tailor instruction—both online and in-person—for students attending premier international schools in Hong Kong, including HKIS, WIS, SIS, Stamford American, KIS, and The Island School.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
                            <a href="https://wa.me/85297630974" target="_blank" rel="noreferrer" className='cta-btn primary' style={{ background: '#64ffda', color: '#0a192f', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none' }}>
                                Book / Inquire via WhatsApp
                            </a>
                        </div>

                        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#94a3b8', marginTop: '20px' }}>
                            <em>Because demand scales upward, I selectively review profiles of high-performing PolyU engineering students to support my student base. Qualified candidates are welcome to reach out.</em>
                        </p>
                    </div>
                </div>
            </section>
                                    
            <Footer />
        </>
    );
}

export default Home;
