import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            // Find all section elements
            const sections = sectionIds.map(id => document.getElementById(id));
            
            // Find the section that is currently in view
            const current = sections.find(section => {
                if (!section) return false;
                
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                return (
                    window.scrollY >= sectionTop - offset &&
                    window.scrollY < sectionTop + sectionHeight - offset
                );
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset]);

    return activeSection;
};

export default useScrollSpy; 
