import { Link } from "react-router";
import { projects } from "../data/projects";


export default function Page2() {
  return (
    <div className="bg-black min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[#05c725] hover:text-white transition-colors mb-12"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-['Inter:Medium',sans-serif] text-lg">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-['Inter:Bold',sans-serif] text-[56px] leading-[84px] text-white mb-6">
            Experience & Projects
          </h1>
          <div className="h-[2px] w-32 bg-[#05c725]" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Education Section */}
          <div className="space-y-6">
            <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-4">
              Education
            </h2>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-white mb-2">
                Bachelor of Technology
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#05c725] mb-1">
                Computer Science & Engineering
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#05c725]">
                2023 - 2027
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-4">
              Certifications
            </h2>
            <div className="space-y-4">
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725]">
                  AWS Certified Solutions Architect
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725]">
                  Google Cloud Professional Developer
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725]">
                  MongoDB Certified Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Highlight Section */}
        <div className="space-y-6">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-6">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6 hover:border-[#05c725] hover:bg-[rgba(5,199,37,0.05)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-3 rounded-full bg-[#05c725]" />
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white group-hover:text-[#05c725] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[#05c725] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.backend.slice(0, 2).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] rounded-full text-[12px] text-[#05c725]">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.frontend.slice(0, 1).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] rounded-full text-[12px] text-[#05c725]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-[#05c725] group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-['Inter:Medium',sans-serif]">View Details</span>
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-8">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-4">
            Let's Connect
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#05c725] mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:damodar.kamath23@spit.ac.in"
              className="px-6 py-3 bg-white rounded-full font-['Inter:Semi_Bold',sans-serif] text-[16px] text-black hover:bg-[#05c725] hover:text-white transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/damodar-kamath/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[rgba(255,255,255,0.4)] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Damodar1845"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[rgba(255,255,255,0.4)] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}