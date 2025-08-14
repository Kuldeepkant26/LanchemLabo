import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-start bg-black">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2024/01/20/197486-905015022_tiny.mp4" type="video/mp4" />
        </video>
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/30 to-black/40 z-[2]" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-[5] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-[6] pl-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-12 tracking-tight">
          Innovation in
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
            Pharmaceutical
          </span>
          <br />
          Solutions.
        </h1>
        
        <button className="bg-transparent border border-white/70 text-white px-8 py-4 text-sm font-normal cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 backdrop-blur-sm relative overflow-hidden group">
          <span className="absolute top-0 left-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          <span className="relative z-10">Explore Our Solutions</span>
        </button>
      </div>

      {/* Play/Pause Button */}
      <button 
        className="absolute bottom-8 right-8 z-[15] w-12 h-12 bg-gradient-to-br from-sky-500/90 to-cyan-500/90 border border-sky-400/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:from-sky-500 hover:to-cyan-500 backdrop-blur-sm shadow-lg shadow-sky-500/30"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>

      {/* Footer Info */}
  <div className="absolute bottom-8 left-16 right-16 z-[6] text-xs text-white/80 text-center font-light leading-relaxed">
        Pharmaceutical innovation efficiency: 95-98% research success rate (preliminary value). 
        Development costs optimized: 15-25% reduction in time-to-market (preliminary value)
      </div>
    </section>
  );
};

export default HeroSection;
