import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Star, Zap, Heart, Globe, Sparkles } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import OptimizeSection from '../components/sections/OptimizeSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PlatformSection from '../components/sections/PlatformSection';
import AssistantSection from '../components/sections/AssistantSection';
import Footer from '../components/Footer';


const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getSectionTransform = (index: number) => {
        const sectionHeight = window.innerHeight;
        // 6 sections total => multiplier is sections-1 = 5
        const totalScrollableHeight = 5 * sectionHeight;
        const scrollProgress = Math.min(scrollY / totalScrollableHeight, 1);
        const sectionProgress = scrollProgress * 5;
        const translateY = Math.max(0, (index - sectionProgress) * 100);
        return `translateY(${translateY}vh)`;
    };

    return (
        <div ref={containerRef} className="relative">
            {/* Set total scrollable height */}
            <div style={{ height: `${6 * 100}vh` }} />

            {/* Section 1 - Hero */}
            <div
                className="fixed top-0 left-0 w-full h-screen overflow-hidden"
                style={{
                    transform: getSectionTransform(0),
                    zIndex: 1,
                }}
            >
                <HeroSection />
            </div>

            {/* Section 2 - Innovation */}
            <div
                className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center overflow-hidden"
                style={{
                    transform: getSectionTransform(1),
                    zIndex: 2,
                }}
            >
                <PlatformSection />
            </div>

            {/* Section 3 - Optimize */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden pt-20"
                style={{
                    transform: getSectionTransform(2),
                    zIndex: 3,
                }}
            >
                <FeaturesSection />

            </div>

            {/* Section 4 - Features */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
                style={{
                    transform: getSectionTransform(3),
                    zIndex: 4,
                }}
            >
                <OptimizeSection />
            </div>

            {/* Section 5 - Platform */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
                style={{
                    transform: getSectionTransform(4),
                    zIndex: 5,
                }}
            >
                <AboutSection />
            </div>

            {/* Section 6 - Assistant (new) */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
                style={{
                    transform: getSectionTransform(5),
                    zIndex: 6,
                }}
            >
                <AssistantSection />
            </div>

            {/* Regular content sections */}
            <div className="relative z-10 bg-white">
                <Footer />
            </div>

            <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(360deg); }
        }
        
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Home;