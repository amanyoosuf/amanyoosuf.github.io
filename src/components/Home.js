import React from 'react';
import "../App.css";
import Cards from './Cards'; 
import './mainCon.css';
import Footer from './Footer'; 

function Home() {
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
                            <a href='#connect' className='cta-btn secondary'>Let's Connect</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. ABOUT ME SECTION */}
            <section id='aboutme' className='profile-section_container'>
                <div className='content-grid-split'>
                    <div className='profile-text-block'>
                        <h2>About Me</h2>
                        <div className='profile-body-text'>
                            <p>
                                Hey everyone! My name is Aman, a Year 2 Electrical Engineering student at <strong>The Hong Kong Polytechnic University</strong>, with a secondary major in <strong>AIDA (Artificial Intelligence and Data Analytics)</strong>. Originally from Sri Lanka, I now study and live in Hong Kong.
                            </p>
                            <p>
                                I’m passionate about several fields within the endless realm of Electrical Engineering, including power systems, electronics, IoT, and robotics. I’m always looking to explore new opportunities to diversify my knowledge and build meaningful skills.
                            </p>
                        </div>
                    </div>
                    <div className='profile-showcase-block'>
                        <div className='avatar-frame'>
                            <img src='./your-profile-pic.png' className='profile-image' alt="Aman Yoosuf - PolyU Electrical Engineering" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EDUCATION SECTION */}
            <section id='education' className='academic-section_container'>
                <div className='content-wrapper'>
                    <h2>🎓 Education</h2>
                    
                    <div className='academic-timeline-card'>
                        <div className='academic-card-header'>
                            <h3>The Hong Kong Polytechnic University</h3>
                            <span className='academic-period'>September 2025 - Present</span>
                        </div>
                        <h4 className='academic-degree'>BEng in Electrical Engineering (with a Secondary Major in AIDA)</h4>
                        <p className='academic-grade'><strong>Grade:</strong> 3.53/4.30 (as of Year 1)</p>
                    </div>

                    <div className='academic-timeline-card'>
                        <div className='academic-card-header'>
                            <h3>Lyceum International School Nugegoda, Sri Lanka</h3>
                            <span className='academic-period'>February 2022 - June 2024</span>
                        </div>
                        <h4 className='academic-degree'>Edexcel International Advanced Level</h4>
                        <p className='academic-grade'><strong>Result:</strong> 4A* (Subjects: Mathematics, Chemistry, Biology, Physics)</p>
                    </div>

                    {/* Placeholder for more education entries */}
                    <div className='placeholder-zone'>
                        {/* Add future certification courses or honors academies here */}
                    </div>
                </div>
            </section>

            {/* 4. EXPERIENCE SECTION */}
            <section id='experience' className='work-section_container'>
                <div className='content-wrapper'>
                    <h2>💼 Experience</h2>
                    
                    <div className='work-timeline-card'>
                        <div className='work-card-header'>
                            <h3>Undergraduate Researcher (URIS)</h3>
                            <span className='work-period'>Current</span>
                        </div>
                        <h4 className='work-organization'>The Hong Kong Polytechnic University</h4>
                        <p className='work-details'>
                            Participating in the Undergraduate Research and Innovation Scheme (URIS) at PolyU. Currently working on making power grids smarter and more resilient using AI-driven models for real-time state estimation.
                        </p>
                    </div>

                    {/* Placeholder for future engineering internships */}
                    <div className='placeholder-zone'>
                        {/* Insert your future internship items here */}
                    </div>
                </div>
            </section>

            {/* 5. PROJECTS SECTION */}
            <section id='projects' className='portfolio-section_container'>
                <div className='content-wrapper'>
                    <h2>🚀 Projects</h2>
                    <Cards /> 
                    
                    {/* Placeholder for custom projects text lines */}
                    <div className='placeholder-zone'>
                        {/* Add bullet points or specific descriptions for your data analytics or engineering projects */}
                    </div>
                </div>
            </section>

            {/* 6. HONORS & AWARDS SECTION */}
            <section id='awards' className='recognition-section_container'>
                <div className='content-wrapper'>
                    <h2>🏆 Honors & Awards</h2>
                    
                    <div className='award-item-row'>
                        <span className='award-year'>2024</span>
                        <div className='award-text-content'>
                            <h3>Edexcel Academic Achievement Outstanding Performance</h3>
                            <p>Achieved a perfect score of 4A* at the International Advanced Level examinations.</p>
                        </div>
                    </div>

                    {/* Placeholder for scholarships, Dean's lists, or pitch wins */}
                    <div className='placeholder-zone'>
                        {/* Insert future scholarship milestones here */}
                    </div>
                </div>
            </section>

            {/* 7. CRICKET SECTION */}
            <section id='cricket' className='athletics-section_container'>
                <div className='content-wrapper'>
                    <h2>🏏 Cricket</h2>
                    <div className='athletics-profile-card'>
                        <p>
                            On weekends, you’ll find me on the cricket pitch. I’ve played cricket my whole life and currently proudly represent both the <strong>PolyU Cricket Team</strong> and the <strong>Kowloon Cricket Club (KCC)</strong>.
                        </p>
                        {/* Placeholder for seasonal metrics, league highlights, or match records */}
                    </div>
                </div> {/* <--- Added missing closing div for content-wrapper here */}
            </section>

            {/* 8. TUTORING SECTION */}
            <section id='tutoring' className='services-section_container'>
                <div className='content-wrapper'>
                    <h2>💡 Tutoring</h2>
                    <div className='tutoring-pitch-card'>
                        <p>
                            I’m heavily involved in teaching and academic mentoring. With over four years of experience, I’ve successfully taught and guided more than 40 students across various international schools in Hong Kong.
                        </p>
                        <div className='subject-tags_container'>
                            <span className='subject-tag'>Physics</span>
                            <span className='subject-tag'>Mathematics</span>
                            <span className='subject-tag'>Chemistry</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. TRAVEL + MORE SECTION */}
            <section id='travel' className='lifestyle-section_container'>
                <div className='content-wrapper'>
                    <h2>✈️ Travel + more</h2>
                    
                    <div className='athletics-profile-card'>
                        <p>Exploring diverse international academic environments, field studies, and unique cultural paths outside of the research lab.</p>
                        {/* Placeholder for future travel logs, photography, or creative pursuits */}
                    </div>
                </div>
            </section>

            {/* 10. LET'S CONNECT SECTION */}
            <section id='connect' className='contact-section_container'>
                <div className='content-wrapper'>
                    <h2>📫 Let's Connect</h2>
                    <div className='contact-methods-box'>
                        <p>Feel free to reach out to me for research collaborations, premium academic tutoring, or anything cricket related!</p>
                        <div className='contact-links-grid'>
                            <a href="mailto:amanur.yoosuf@connect.polyu.hk" className='contact-btn email'>
                                <i className='fas fa-envelope' /> amanur.yoosuf@connect.polyu.hk
                            </a>
                            <a href="https://wa.me/85297630974" target="_blank" rel="noreferrer" className='contact-btn whatsapp'>
                                <i className='fab fa-whatsapp' /> +852 9763 0974
                            </a>
                        </div>
                    </div>
                </div>
            </section>
           
            <Footer />
        </>
    );
}

export default Home;
