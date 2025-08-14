import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  Shield,
  Award,
  Users,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 via-transparent to-transparent" />

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/25">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white">
                    Lanchem Labo
                  </span>
                  <span className="text-sm text-sky-300 font-medium">
                    Pharmaceutical Innovation
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Leading pharmaceutical and chemical manufacturer committed to improving lives 
                through innovative healthcare solutions and premium quality products.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-sky-500/10 rounded-lg border border-sky-500/20">
                  <Shield className="w-4 h-4 text-sky-400" />
                  <span className="text-xs text-sky-300 font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-300 font-medium">GMP Compliant</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {[
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                  { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                  { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-400' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-cyan-500 rounded-full mr-3"></div>
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Products', href: '#products' },
                  { name: 'Quality Assurance', href: '#quality' },
                  { name: 'Research & Development', href: '#research' },
                  { name: 'Manufacturing', href: '#manufacturing' },
                  { name: 'Careers', href: '#careers' }
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-400 hover:text-sky-300 transition-colors duration-200 group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-sky-500 rounded-full mr-3"></div>
                Our Services
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Drug Discovery', icon: Globe },
                  { name: 'Clinical Research', icon: Users },
                  { name: 'Pharmaceutical Manufacturing', icon: Shield },
                  { name: 'Quality Control Testing', icon: Award },
                  { name: 'Regulatory Affairs', icon: Shield },
                  { name: 'Custom Synthesis', icon: Globe }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-gray-400 hover:text-cyan-300 transition-colors duration-200 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className="w-4 h-4 mr-3 text-sky-500 group-hover:text-cyan-400 transition-colors duration-200" />
                    <span className="text-sm">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-cyan-500 rounded-full mr-3"></div>
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Head Office</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      123 Innovation Drive<br />
                      Pharmaceutical District<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Phone</p>
                    <p className="text-gray-400 text-sm">+91 11 2345 6789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <p className="text-gray-400 text-sm">info@lanchemnlabo.com</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div className="mt-6">
                <motion.div
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="#contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 group"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 py-8"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Lanchem Labo. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link to="#privacy" className="text-gray-400 hover:text-sky-300 text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="#terms" className="text-gray-400 hover:text-sky-300 text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="#cookies" className="text-gray-400 hover:text-sky-300 text-sm transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                ❤️
              </motion.div>
              <span>for better healthcare</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
