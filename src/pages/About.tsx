import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Code2, Users, Trophy, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About geekHacks</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A premier hackathon organized by GeeksforGeeks Student Chapter Techno Main Salt Lake,
            bringing together the brightest minds in technology.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <AnimatedSection className="bg-[#151515] p-8 rounded-lg border border-[#661511]">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code2 className="h-6 w-6 text-[#d00b02] mr-2" />
              Our Mission
            </h2>
            <p className="text-gray-400">
              To foster innovation and creativity in the tech community by providing a platform
              for students to showcase their skills, learn from industry experts, and build
              solutions that matter.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-[#151515] p-8 rounded-lg border border-[#661511]">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="h-6 w-6 text-[#d00b02] mr-2" />
              Who We Are
            </h2>
            <p className="text-gray-400">
              EDGE Technical Event Organized by Team Geekonix, we are a passionate group of
              tech enthusiasts dedicated to creating impactful learning experiences for the
              student community.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8 text-[#d00b02]" />,
                title: 'Industry Recognition',
                description: 'Get noticed by top tech companies and industry leaders.',
              },
              {
                icon: <Target className="h-8 w-8 text-[#d00b02]" />,
                title: 'Focused Mentorship',
                description: 'Direct guidance from experienced professionals and mentors.',
              },
              {
                icon: <Users className="h-8 w-8 text-[#d00b02]" />,
                title: 'Community Building',
                description: 'Join a thriving community of tech enthusiasts and innovators.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#151515] rounded-lg border border-[#661511] hover:border-[#d00b02] transition-colors"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Participants' },
              { number: '48', label: 'Hours of Coding' },
              { number: '50+', label: 'Mentors' },
              { number: '100k', label: 'Prize Pool' },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-[#151515] rounded-lg">
                <div className="text-3xl font-bold text-[#d00b02] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;