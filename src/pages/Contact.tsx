import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about geekHacks? We're here to help! Reach out to us through any
            of the following channels.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection className="space-y-8">
            <div className="bg-[#151515] p-6 rounded-lg border border-[#661511]">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#d00b02] mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-400">
                    Techno Main Salt Lake<br />
                    EM-4/1, Sector V, Salt Lake<br />
                    Kolkata - 700091
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#151515] p-6 rounded-lg border border-[#661511]">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#d00b02] mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:contact@geekhacks.dev"
                    className="text-gray-400 hover:text-[#d00b02] transition-colors"
                  >
                    contact@geekhacks.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#151515] p-6 rounded-lg border border-[#661511]">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#d00b02] mr-4" />
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-400 hover:text-[#d00b02] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#151515] border border-[#661511] rounded-lg focus:outline-none focus:border-[#d00b02] text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#151515] border border-[#661511] rounded-lg focus:outline-none focus:border-[#d00b02] text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#151515] border border-[#661511] rounded-lg focus:outline-none focus:border-[#d00b02] text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-[#d00b02] text-white rounded-lg hover:bg-[#661511] transition-colors"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;