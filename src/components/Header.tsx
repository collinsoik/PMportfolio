import React from 'react';
import { Briefcase } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-10 h-10" />
              <h1 className="text-4xl font-bold">Project Management Portfolio</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              Specialized experience in quality engineering, digital transformation, and startup development, 
              with a strong track record of exceeding project objectives while maintaining budget efficiency.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/10 ring-offset-2 ring-offset-blue-600"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;