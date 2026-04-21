import { useParams, Link } from "react-router";
import { getProjectById } from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="bg-black min-h-screen p-8 md:p-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Inter:Bold',sans-serif] text-[40px] text-white mb-4">
            Project Not Found
          </h1>
          <Link
            to="/page2"
            className="inline-flex items-center gap-2 text-[#05c725] hover:text-white transition-colors"
          >
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/page2"
          className="inline-flex items-center gap-2 text-[#05c725] hover:text-white transition-colors mb-12"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-['Inter:Medium',sans-serif] text-lg">Back to Projects</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-['Inter:Bold',sans-serif] text-[48px] md:text-[56px] leading-[60px] md:leading-[84px] text-white mb-6">
            {project.title}
          </h1>
          <div className="h-[2px] w-32 bg-[#05c725]" />
        </div>

        {/* Description */}
        <div className="mb-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6 md:p-8">
          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#05c725]">
            {project.description}
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-12">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-4">
            Problem Statement
          </h2>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6 md:p-8">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#05c725]">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-4">
            Solution
          </h2>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6 md:p-8">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#05c725]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-6">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.techStack.backend.length > 0 && (
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
                  Backend
                </h3>
                <div className="space-y-2">
                  {project.techStack.backend.map((tech, idx) => (
                    <p key={idx} className="font-['Inter:Regular',sans-serif] text-[14px] text-white flex items-center">
                      <span className="size-2 rounded-full bg-[#05c725] mr-3" />
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.frontend.length > 0 && (
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
                  Frontend
                </h3>
                <div className="space-y-2">
                  {project.techStack.frontend.map((tech, idx) => (
                    <p key={idx} className="font-['Inter:Regular',sans-serif] text-[14px] text-white flex items-center">
                      <span className="size-2 rounded-full bg-[#05c725] mr-3" />
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.databases.length > 0 && (
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
                  Database
                </h3>
                <div className="space-y-2">
                  {project.techStack.databases.map((tech, idx) => (
                    <p key={idx} className="font-['Inter:Regular',sans-serif] text-[14px] text-white flex items-center">
                      <span className="size-2 rounded-full bg-[#05c725] mr-3" />
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.tools.length > 0 && (
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
                  Tools & Libraries
                </h3>
                <div className="space-y-2">
                  {project.techStack.tools.map((tech, idx) => (
                    <p key={idx} className="font-['Inter:Regular',sans-serif] text-[14px] text-white flex items-center">
                      <span className="size-2 rounded-full bg-[#05c725] mr-3" />
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="mb-12">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-4">
            Architecture
          </h2>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6 md:p-8">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#05c725]">
              {project.architecture}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#05c725] flex items-start">
                  <span className="size-3 rounded-full bg-[#05c725] mr-3 flex-shrink-0 mt-1" />
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Scope Section */}
        <div className="mb-12">
          <h2 className="font-['Inter:Bold',sans-serif] text-[32px] text-white mb-6">
            Future Scope & Enhancements
          </h2>
          <div className="space-y-3">
            {project.futureScope.map((scope, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg">
                <div className="size-3 rounded-full bg-[#05c725] flex-shrink-0 mt-1.5" />
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#05c725]">
                  {scope}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Projects Button */}
        <div className="mt-16 text-center">
          <Link
            to="/page2"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#05c725] text-black rounded-full font-['Inter:Semi_Bold',sans-serif] text-[16px] hover:bg-white transition-colors"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
