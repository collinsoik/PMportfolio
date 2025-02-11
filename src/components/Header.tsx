import React from 'react';
import { Briefcase } from 'lucide-react';
import headshot from '../assets/images/headshot.webp';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <Briefcase className="w-8 h-8 md:w-10 md:h-10" />
              <h1 className="text-3xl md:text-4xl font-bold">Collin's Project Management Portfolio</h1>
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Specialized experience in quality engineering, digital transformation, and startup development, 
              with a strong track record of exceeding project objectives while maintaining budget efficiency.
            </p>
          </div>
          
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
              <img 
                src={headshot}
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