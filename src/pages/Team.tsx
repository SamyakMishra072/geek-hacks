import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Linkedin, Mail } from 'lucide-react';
import { Github } from 'lucide-react';
import type { TeamMember } from '../types';

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Samyak Mishra',
      role: 'Technical Lead',
      image: 'https://i.postimg.cc/76dZYhtH/Samyak.jpg',
      github: 'https://github.com/SamyakMishra072',
      linkedin: 'https://www.linkedin.com/in/samyak072/',
      email: 'sm2.cse.tmsl@ticollege.org'
    },
    {
      name: 'Suprakash Roy',
      role: 'Technical Lead Associate',
      image: 'https://i.postimg.cc/KvFy7tTX/Suprakash-1.jpg',
      github: 'https://github.com/SuprakashRoy04',
      linkedin: 'https://www.linkedin.com/in/suprakash-roy-28361b247/',
      email: 'suprakash.05roy@gmail.com'
    },
    {
      name: 'Rhitwika Poddar',
      role: 'Design Lead Associate',
      image: 'https://i.postimg.cc/rmkzkvvz/Rhitwika.jpg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'rhitwikapoddar@gmail.com'
    },
    {
      name: 'Suhani Kundu',
      role: 'PR Lead Associate',
      image: 'https://i.postimg.cc/PrxJTbFb/Suhani.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/suhani-kundu-110104267/',
      email: 'suhanikundu.2004@gmail.com'
    },
    {
      name: 'Pragya Saha',
      role: 'Marketing Lead Associate',
      image: 'https://i.postimg.cc/MKtgyNxR/Pragya-1.jpg',
      linkedin: 'https://www.linkedin.com',
      email: 'sasha156julla@gmail.com'
    },
    {
      name: 'Arghya Dandopat',
      role: 'Social Media Lead Associate',
      image: 'https://i.postimg.cc/SQGYyxQ4/Arghya.jpg',
      linkedin: 'https://www.linkedin.com',
      email: 'dandapatarghya71@gmail.com'
    },
    {
      name: 'Arnab Singha',
      role: 'Event Lead Associate',
      image: 'https://i.postimg.cc/6qz8zYbq/Arnab.webp',
      linkedin: 'https://www.linkedin.com',
      email: 'singhaarnab007@gmail.com'
    }
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
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#d00b02] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#d00b02] transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#d00b02] transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
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
