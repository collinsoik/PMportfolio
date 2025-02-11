import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import ProjectSection from './components/ProjectSection';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { projects } from './data/projects';

function App() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            
            const projectIndex = projectRefs.current.findIndex(ref => ref === entry.target);
            const timelinePoint = document.querySelector(`[data-project-index="${projectIndex}"]`);
            
            document.querySelectorAll('.timeline-point').forEach(point => {
              point.classList.remove('active');
            });
            
            if (timelinePoint) {
              timelinePoint.classList.add('active');
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1,
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex flex-col md:flex-row container mx-auto">
        {/* Timeline - Hidden on mobile */}
        <div className="hidden md:block w-64 shrink-0">
          <Timeline projects={projects} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 py-8">
          {/* Professional Summary */}
          <section className="mb-12 md:mb-16 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Professional Summary</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              A dynamic and results-driven Project Manager with demonstrated success in leading complex technical projects across software development, hardware implementation, and digital marketing domains. Proven expertise in managing cross-functional teams, delivering projects under aggressive timelines, and implementing innovative solutions to complex technical challenges. Specialized experience in quality engineering, digital transformation, and startup development, with a strong track record of exceeding project objectives while maintaining budget efficiency.
            </p>
          </section>

          {/* Projects Timeline */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 flex items-center gap-2">
              Project Timeline
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
            </h2>
            
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  ref={el => projectRefs.current[index] = el}
                  className="project-card opacity-0 translate-y-4 transition-all duration-500 ease-out"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <ProjectSection {...project} />
                </div>
              ))}
            </div>
          </section>

          {/* Core Competencies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  title: 'Technical Leadership',
                  skills: ['Cross-functional team management', 'Resource allocation optimization', 'Risk assessment and mitigation', 'Quality assurance protocols']
                },
                {
                  title: 'Project Management',
                  skills: ['Agile methodology implementation', 'Budget oversight and optimization', 'Timeline management', 'Stakeholder communication']
                },
                {
                  title: 'Digital Marketing',
                  skills: ['SEO strategy development', 'Brand development', 'Traffic optimization', 'Conversion rate improvement']
                },
                {
                  title: 'Technical Implementation',
                  skills: ['Software development oversight', 'Hardware integration', 'Quality assurance', 'System optimization']
                }
              ].map((competency, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{competency.title}</h3>
                  <ul className="space-y-2">
                    {competency.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Metrics */}
          <section className="mb-12 md:mb-16 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Impact Metrics</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">Throughout these projects, I have consistently demonstrated:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
              <li>Project completion averaging 20% under estimated timeline</li>
              <li>Achievement of 95%+ stakeholder satisfaction</li>
              <li>Successful management of teams up to 22 members</li>
              <li>Significant ROI improvements across all projects</li>
              <li>Strong track record of technical innovation</li>
              <li>Consistent achievement of project objectives</li>
              <li>Substantial cost reduction across projects</li>
            </ul>
          </section>

          {/* Professional Development */}
          <section className="mb-12 md:mb-16 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Professional Development</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">My commitment to continuous improvement includes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
              <li>Regular engagement with emerging technologies</li>
              <li>Active participation in industry conferences</li>
              <li>Membership in professional organizations</li>
              <li>Ongoing certification maintenance</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;