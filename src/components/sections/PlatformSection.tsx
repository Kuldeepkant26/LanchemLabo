import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const PlatformSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // Animate the progress circle
      const timer = setTimeout(() => {
        setProgress(84);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const chartVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden relative w-full"
    >
      <motion.div
        className="w-full px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Content - Text */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            {/* Main text */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              The <span className="text-gray-400">platform</span> emerged as
              <br />
              a pivotal tool, <span className="text-gray-400">optimizing</span>
              <br />
              <span className="text-gray-400">drug discovery</span> in <span className="text-gray-900">pharmaceuticals</span>.
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900">
              75<span className="text-4xl align-top">%</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Platform accelerates research timelines,
              <br />
              enhances discovery efficiency.
            </p>
          </motion.div>
        </div>

        {/* Right Content - Circular Chart */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          variants={chartVariants}
        >
          <div className="relative">
            {/* Notification Cards */}
            <motion.div 
              className="absolute -top-8 right-0 z-20"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="space-y-3">
                {/* Pratt & Whitney notification */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-3 min-w-[200px]">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Novartis Research</div>
                    <div className="text-xs text-gray-500">11 April, 09:12 AM</div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 ml-auto">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>

                {/* Honeywell notification */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-3 min-w-[200px]">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Pfizer Laboratories</div>
                    <div className="text-xs text-gray-500">12 April, 10:32 AM</div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 ml-auto">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Main Circular Chart */}
            <div className="relative w-96 h-96">
              {/* Background circle */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background track */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  className="opacity-30"
                />
                
                {/* Progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ 
                    strokeDashoffset: isInView ? 2 * Math.PI * 40 * (1 - progress / 100) : 2 * Math.PI * 40 
                  }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div 
                  className="text-6xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  {progress}%
                </motion.div>
              </div>

              {/* Percentage indicators around the circle */}
              <div className="absolute inset-0">
                {[
                  { value: '24%', angle: 45, color: 'text-gray-400' },
                  { value: '62%', angle: 90, color: 'text-gray-400' },
                  { value: '44%', angle: 135, color: 'text-gray-400' },
                  { value: '52%', angle: 180, color: 'text-gray-400' },
                  { value: '84%', angle: 270, color: 'text-sky-600 font-bold' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute text-sm ${item.color}`}
                    style={{
                      left: `${50 + 45 * Math.cos((item.angle - 90) * Math.PI / 180)}%`,
                      top: `${50 + 45 * Math.sin((item.angle - 90) * Math.PI / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + index * 0.1 }}
                  >
                    {item.value}
                  </motion.div>
                ))}
              </div>

              {/* Growth indicator */}
              <motion.div 
                className="absolute -top-4 right-8 bg-gradient-to-r from-sky-500 to-cyan-600 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
              >
                <div className="text-sm">Bulgaria</div>
                <div className="text-lg font-bold">+124k</div>
              </motion.div>
            </div>

            {/* Floating background elements */}
            <motion.div
              className="absolute -left-8 top-20 w-16 h-16 bg-gradient-to-br from-sky-400/20 to-cyan-400/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -right-4 bottom-16 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-sky-400/20 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PlatformSection;
