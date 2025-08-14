import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TrendingUp, Clock, BarChart3 } from 'lucide-react';

const OptimizeSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const visualVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateY: -30,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
  };

  return (
    <section 
      ref={ref}
  className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center py-20 overflow-hidden relative w-full"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="w-full px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-sky-600" />
              <span className="text-sky-600 font-semibold tracking-wide">Enhance Efficiency</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Optimize,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600">
                Outperform
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Save time and reduce costs with our
              <br />
              <span className="font-semibold text-gray-800">Automated Drug Discovery Platform</span>
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">75% Faster</div>
                  <div className="text-sm text-gray-600">Research Timeline</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">60% Lower</div>
                  <div className="text-sm text-gray-600">Development Costs</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button className="group bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1">
              Explore Platform
              <TrendingUp className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Content - Visual (replace phone mock with image) */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          variants={visualVariants}
        >
          <div className="relative w-full max-w-xl">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
              <img
                src="https://t4.ftcdn.net/jpg/05/48/54/13/360_F_548541329_iHCfxeFaJyQLYQXFw1QVRP7j3ZRvwSbI.jpg"
                alt="Researchers optimizing workflows"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -left-12 top-20 w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full opacity-20"
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
              className="absolute -right-8 bottom-10 w-12 h-12 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-full opacity-20"
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

export default OptimizeSection;
