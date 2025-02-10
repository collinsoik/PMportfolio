import React from 'react';

interface TimelineProps {
  projects: Array<{
    title: string;
    duration: string;
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ projects }) => {
  return (
    <div className="sticky top-8 h-[calc(100vh-4rem)] flex flex-col items-center">
      <div className="h-full w-0.5 bg-gray-200 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            data-project-index={index}
            className="timeline-point absolute transform -translate-x-full flex items-center gap-2"
            style={{ top: `${(index * 16) + 10}%`, left: '-4px' }}
          >
            <span className="text-sm font-medium text-gray-600 opacity-0 transform translate-x-2 whitespace-nowrap max-w-[180px] truncate">
              {project.title}
            </span>
            <div className="w-4 h-4 rounded-full bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;