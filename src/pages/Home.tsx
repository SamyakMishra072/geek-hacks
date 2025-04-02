import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#090909]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d00b02]">
              geekHacks 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Unleash Your Potential at the Ultimate Coding Battle
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 text-[#d00b02]">
                <Calendar className="h-6 w-6" />
                <span>5th &amp; 6th April 2025</span>
              </div>
              <div className="hidden md:block text-gray-500"></div>
              <div className="hidden md:block text-gray-500"></div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://forms.gle/4QzBPC6YeErJK4eY8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#d00b02] text-white rounded-full hover:bg-[#661511] transition-colors"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://docs.google.com/document/d/16qCZAAWwbpbsX9t0-MV3rNFO4ytdPj5B3T5-yEMAWQU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-[#d00b02] text-[#d00b02] rounded-full hover:bg-[#d00b02] hover:text-white transition-colors"
              >
                View Problem Statements
              </a>
              {/* New Button Added */}
              <a
                href="https://drive.google.com/file/d/1LaTFRlJra9faxKtPE8K0JpYodcrCPiu4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#1A73E8] text-white rounded-full hover:bg-[#135ABD] transition-colors"
              >
                View geekHacks 2025 Brochure
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#151515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Join geekHacks?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Learn & Grow',
                description: 'Gain hands-on experience with cutting-edge technologies and industry mentors.',
                icon: '🚀',
              },
              {
                title: 'Network',
                description: 'Connect with like-minded developers and industry professionals.',
                icon: '🤝',
              },
              {
                title: 'Win Big',
                description: 'Compete for exciting prizes and recognition in the tech community.',
                icon: '🏆',
              },
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                className="bg-[#090909] p-6 rounded-lg border border-[#661511] hover:border-[#d00b02] transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
