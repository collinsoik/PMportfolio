import React, { useState } from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import Modal from './Modal';

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectProps {
  title: string;
  duration: string;
  teamSize?: string;
  industry: string;
  overview: string;
  responsibilities?: string[];
  technical?: string[];
  achievements: string[];
  images: ProjectImage[];
}

const ProjectSection: React.FC<ProjectProps> = ({
  title,
  duration,
  teamSize,
  industry,
  overview,
  responsibilities,
  technical,
  achievements,
  images
}) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            {teamSize && (
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>{teamSize}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Award className="w-4 h-4" />
              <span>{industry}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{overview}</p>

          {responsibilities && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {technical && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Implementation</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {technical.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  );
};

export default ProjectSection;