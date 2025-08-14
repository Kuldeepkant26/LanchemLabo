import React from 'react';
import { motion } from 'framer-motion';
import { Star, Beaker, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Leading Pharmaceutical Innovation
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Lanchem Labo is a cutting-edge pharmaceutical company dedicated to developing innovative 
              solutions that improve global health outcomes. Our state-of-the-art research facilities 
              and expert team work tirelessly to bring breakthrough treatments to market.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              From drug discovery to clinical trials, our comprehensive approach ensures the highest 
              quality standards while maintaining regulatory compliance. We specialize in oncology, 
              immunology, and rare disease therapeutics with a focus on precision medicine.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Star className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <span className="text-lg font-medium text-slate-800">FDA-approved manufacturing facilities</span>
              </div>
              <div className="flex items-center gap-4">
                <Beaker className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <span className="text-lg font-medium text-slate-800">Advanced R&D laboratories</span>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <span className="text-lg font-medium text-slate-800">GMP-certified quality systems</span>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://t4.ftcdn.net/jpg/09/19/00/63/360_F_919006314_AsisZEaX70bLoa90ihW6IJZ8G1Mvcccq.jpg"
              alt="Pharmaceutical Laboratory"
              className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
