import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { TeamMember } from '../types';

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Arjun Sharma',
      role: 'Event Lead',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Priya Patel',
      role: 'Technical Head',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Rahul Kumar',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Neha Singh',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Aditya Verma',
      role: 'Sponsorship Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Zara Ahmed',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The passionate individuals behind geekHacks who work tirelessly to create an
            unforgettable experience for all participants.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#151515] rounded-lg overflow-hidden border border-[#661511] hover:border-[#d00b02] transition-all transform hover:-translate-y-1"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#d00b02] mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#d00b02] transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#d00b02] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#d00b02] transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;