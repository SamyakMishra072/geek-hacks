import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Users, Trophy, Target, Gift } from 'lucide-react';

const Join: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join geekHacks</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be part of something extraordinary. Join us as a participant, mentor, or volunteer
            and help shape the future of technology.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection className="bg-[#151515] p-8 rounded-lg border border-[#661511]">
            <h2 className="text-2xl font-bold mb-6">Participate</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Trophy className="h-6 w-6 text-[#d00b02] mr-3 mt-1" />
                <span className="text-gray-400">
                  Compete for prizes worth ₹1,00,000
                </span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-[#d00b02] mr-3 mt-1" />
                <span className="text-gray-400">
                  Network with industry professionals and fellow developers
                </span>
              </li>
              <li className="flex items-start">
                <Gift className="h-6 w-6 text-[#d00b02] mr-3 mt-1" />
                <span className="text-gray-400">
                  Get exclusive swag and certificates
                </span>
              </li>
            </ul>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#d00b02] text-white rounded-lg hover:bg-[#661511] transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </AnimatedSection>

          <AnimatedSection className="bg-[#151515] p-8 rounded-lg border border-[#661511]">
            <h2 className="text-2xl font-bold mb-6">Volunteer</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Target className="h-6 w-6 text-[#d00b02] mr-3 mt-1" />
                <span className="text-gray-400">
                  Gain valuable event management experience
                </span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-[#d00b02] mr-3 mt-1" />
                <span className="text-gray-400">
                  Work with a dynamic team of tech enthusiasts
                </span>
              </li>
              <li className="flex items-start">
                <Gift className="h-6 w-6 text-[#d00b02] mr-3 mt-1" />
                <span className="text-gray-400">
                  Receive volunteer certificate and exclusive perks
                </span>
              </li>
            </ul>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-[#d00b02] text-[#d00b02] rounded-lg hover:bg-[#d00b02] hover:text-white transition-colors"
            >
              Join as Volunteer
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center bg-[#151515] p-12 rounded-lg border border-[#661511]">
          <h2 className="text-3xl font-bold mb-6">Become a Mentor</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Share your expertise and guide the next generation of developers. We're looking
            for industry professionals to mentor our participants.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#d00b02] text-[#d00b02] rounded-lg hover:bg-[#d00b02] hover:text-white transition-colors"
          >
            Apply as Mentor
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Join;