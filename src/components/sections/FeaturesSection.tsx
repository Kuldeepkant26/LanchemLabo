import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, TrendingUp, Bot, Mic } from 'lucide-react';

const FeaturesSection: React.FC = () => {
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
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const visualVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-white py-20 overflow-hidden relative w-full"
    >
      <motion.div
        className="w-full px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Content - Visual (Replaced laptop mock with industry image) */}
        <motion.div 
          className="relative flex justify-center lg:justify-start"
          variants={visualVariants}
        >
          <div className="relative">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
              <img
                src="https://philantowellness.com/wp-content/uploads/2024/09/pharmaceuticals-manufacturing.jpg"
                alt="Pharmaceuticals manufacturing"
                className="w-full h-72 md:h-96 lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Demo button */}
            <motion.div 
              className="absolute -bottom-8 left-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg border border-gray-200 flex items-center space-x-2 hover:shadow-xl transition-all duration-300">
                <span>Demo our platform.</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Floating background shapes */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-sky-50 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-sky-50 rounded-full opacity-40"></div>
          </div>
        </motion.div>

        {/* Right Content - Features List */}
        <div className="space-y-8">
          {/* Feature 01 */}
          <motion.div 
            className="flex items-start space-x-6"
            variants={itemVariants}
          >
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-300">01</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-sky-600" />
                <h3 className="text-xl font-bold text-gray-900">AI Drug Discovery</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access advanced molecular analysis with AI-powered algorithms, ensuring compound authenticity and accelerating research timelines.
              </p>
            </div>
          </motion.div>

          {/* Feature 02 */}
          <motion.div 
            className="flex items-start space-x-6"
            variants={itemVariants}
          >
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-300">02</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6 text-sky-600" />
                <h3 className="text-xl font-bold text-gray-900">AI Research Assistant</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Boost research efficiency with AI Research Assistant integrated across all laboratory management platforms.
              </p>
            </div>
          </motion.div>

          {/* Feature 03 */}
          <motion.div 
            className="flex items-start space-x-6"
            variants={itemVariants}
          >
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-300">03</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mic className="w-6 h-6 text-sky-600" />
                <h3 className="text-xl font-bold text-gray-900">Voice Lab Control</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Interact efficiently with laboratory systems using voice commands for hands-free operation and data logging.
              </p>
            </div>
          </motion.div>

          {/* Bottom description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore a multitude of pharmaceutical innovations meticulously tailored to meet the unique needs of modern drug development.
            </p>
          </motion.div>

      {/* Statistics card (unified palette) */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute -right-8 -top-4">
        <div className="bg-gradient-to-br from-sky-500 to-cyan-600 p-8 rounded-3xl text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-90">
                  AI Research Assistant accelerates discovery timelines.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
