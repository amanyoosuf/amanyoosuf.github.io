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
            <header id='welcome' className='hero-section_container'>
                <div className='hero-content_wrapper'>
                    <div className='hero-intro-text'>
                        <span className='hero-subtitle'>📍 Hong Kong | Year 2 @ PolyU</span>
                        <h1 className='hero-title'>Amanur Yoosuf</h1>
                        <p className='hero-tagline'>
                            Electrical Engineering student with a secondary major in Artificial Intelligence & Data Analytics (AIDA). Exploring power systems, smart grids, and electronics.
                        </p>
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
                                    src./polyuinaction.jpg' 
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

            {/* 8. TUTORING SUMMARY PREVIEW SECTION */}
            <section id='tutoring' className='services-section_container'>
                <div className='content-wrapper'>
                    <h2 style={sectionHeaderStyle}>06. Tutoring</h2>
                    <div className='tutoring-pitch-card'>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#ffffff' }}>
                            Alongside my academics, I also tutor high school students regularly. Since 2022, I have had the privilege of guiding more than 50 students across 10+ global territories through various international school curricula to achieve exceptional academic results. Currently, I tailor instruction—both online and in-person—for students attending top international schools in Hong Kong, including HKIS, WIS, SIS, Stamford American, KIS, and The Island School, and more.
                        </p>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#ffffff', marginTop: '15px' }}>
                            Parents and students alike are welcome to find out more <a href="https://wa.me/85297630974" target="_blank" rel="noreferrer" style={{ color: '#64ffda', textDecoration: 'underline', fontWeight: 'bold' }}>here</a>.
                        </p>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#ffffff', marginTop: '15px' }}>
                            Because demand occasionally scales up, I sometimes review profiles of qualified tutors to support my students (current PolyU students preferred). If interested, please feel free to reach out!
                        </p>
                    </div>
                </div>
            </section>
                                        
            <Footer />
        </>
    );
}

export default Home;
