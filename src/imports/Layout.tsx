import svgPaths from "./svg-hnmwy4o8tk";
import imgImageDkLogo from "../assets/99016216df44dfa0277d77bfe444bf46d9b38b04.png";
import { Link } from "react-router";
import resumeImage from "../assets/f090ab9667c82a31980f810861549ba4f8c7d90b.png";

function Hero() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden w-full" data-name="Hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute blur-[40px] left-1/4 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 384 384\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -27.153 -27.153 0 192 192)\\'><stop stop-color=\\'rgba(0,212,255,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute blur-[40px] right-1/4 top-1/3 w-56 h-56 md:w-80 md:h-80 rounded-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 320 320\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -22.627 -22.627 0 160 160)\\'><stop stop-color=\\'rgba(79,70,229,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      </div>

      {/* Decorative dots */}
      <div className="absolute bg-[#00d4ff] opacity-20 rounded-full w-1.5 h-1.5 left-[15%] top-[20%]" />
      <div className="absolute bg-[#00d4ff] opacity-20 rounded-full w-1.5 h-1.5 left-[30%] top-[45%]" />
      <div className="absolute bg-[#00d4ff] opacity-56 rounded-full w-2 h-2 left-[45%] top-[70%]" />
      <div className="absolute bg-[#00d4ff] opacity-32 rounded-full w-2 h-2 right-[35%] top-[20%]" />
      <div className="absolute bg-[#00d4ff] opacity-37 rounded-full w-2 h-2 right-[20%] top-[45%]" />
      <div className="absolute bg-[#00d4ff] opacity-29 rounded-full w-2 h-2 right-[10%] top-[70%]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Heading */}
            <div>
              <h1 className="font-['Inter:Bold',sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-[67px] leading-tight text-[#f1f5f9]">
                Damodar{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, rgb(241, 245, 249) 0%, rgb(241, 245, 249) 100%), linear-gradient(163.61deg, rgb(0, 212, 255) 0%, rgb(79, 70, 229) 100%)" }}>
                  Kamath
                </span>
              </h1>
            </div>

            {/* Role */}
            <div>
              <p className="font-['Inter:Regular',sans-serif] text-lg sm:text-xl md:text-2xl text-[#35f365] tracking-wider">
                {`< Full Stack Engineer />`}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="font-['Inter:Regular',sans-serif] text-base sm:text-lg text-[#ebeaea] leading-relaxed max-w-xl">
                Designing robust full-stack applications and building intelligent solutions. Passionate about web development, scalable systems, and applying AI/ML to solve real-world problems efficiently.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/page2" 
                className="bg-[#d5d0d0] rounded-full px-6 py-3 shadow-[0px_0px_20px_0px_rgba(0,212,255,0.3)] hover:shadow-[0px_0px_30px_0px_rgba(0,212,255,0.5)] transition-shadow inline-flex items-center gap-2"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[#05c725] text-base">
                  More details here
                </span>
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 18 18">
                  <path d="M3.75 9H14.25" stroke="#05C725" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M9 3.75L14.25 9L9 14.25" stroke="#05C725" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </Link>

              <a 
                href={resumeImage} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.4)] rounded-full px-6 py-3 hover:shadow-[0px_0px_20px_0px_rgba(0,212,255,0.3)] transition-shadow inline-flex items-center gap-2"
              >
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p1c7ad000} stroke="#05C725" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M5.25 7.5L9 11.25L12.75 7.5" stroke="#05C725" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M9 11.25V2.25" stroke="#05C725" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className="font-['Inter:Regular',sans-serif] text-[#05c725] text-base">
                  Resume
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Logo/Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Open to Work Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] rounded-2xl px-4 py-2 z-20">
                <p className="font-['Inter:Bold',sans-serif] text-[#00d4ff] text-sm whitespace-nowrap">
                  Open to Work
                </p>
              </div>

              {/* Main Logo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div 
                  className="absolute inset-0 border border-[rgba(0,212,255,0.15)] rounded-full shadow-[0px_0px_60px_0px_rgba(0,212,255,0.1)]"
                  style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 384 384\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -27.153 -27.153 0 192 192)\\'><stop stop-color=\\'rgba(0,212,255,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(7,120,149,0.44)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(10,73,95,0.62)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(11,50,69,0.71)\\' offset=\\'0.6125\\'/><stop stop-color=\\'rgba(13,27,42,0.8)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }}
                >
                  {/* Rotating rings */}
                  <div className="absolute inset-[-15%] flex items-center justify-center">
                    <div className="animate-spin-slow">
                      <div className="border border-dashed border-[rgba(0,212,255,0.2)] rounded-full w-[350px] h-[350px]" />
                    </div>
                  </div>
                  <div className="absolute inset-[-8%] flex items-center justify-center">
                    <div className="animate-spin-reverse-slow">
                      <div className="border border-dashed border-[rgba(79,70,229,0.2)] rounded-full w-[318px] h-[318px]" />
                    </div>
                  </div>

                  {/* Corner dots */}
                  <div className="absolute bg-[#00d4ff] opacity-43 rounded-full w-2 h-2 right-[13%] top-[20%]" />
                  <div className="absolute bg-[#00d4ff] opacity-52 rounded-full w-2 h-2 left-1/2 -translate-x-1/2 bottom-[13%]" />
                  <div className="absolute bg-[#00d4ff] opacity-64 rounded-full w-2 h-2 left-[9%] top-1/2 -translate-y-1/2" />
                  <div className="absolute bg-[#00d4ff] opacity-79 rounded-full w-2 h-2 left-1/2 -translate-x-1/2 top-[11%]" />

                  {/* Logo Image */}
                  <div className="absolute inset-[16.5%]">
                    <img alt="DK Logo" className="w-full h-full object-contain" src={imgImageDkLogo} />
                  </div>

                  {/* Inner shadow */}
                  <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_0px_60px_0px_rgba(0,212,255,0.03)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 mt-12 lg:mt-0">
          <p className="font-['Inter:Regular',sans-serif] text-[#ebeaea] text-xs tracking-widest uppercase">
            Scroll
          </p>
          <div className="bg-[#ebeaea] w-px h-12" />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-black w-full" data-name="About">
      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent h-px w-full" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Inter:Bold',sans-serif] text-4xl md:text-5xl lg:text-[56px] text-[#f1f5f9]">
            About
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Description */}
            <div className="space-y-6">
              <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#ebeaea]">
                I'm a Full Stack Engineer with over 5 years of experience building robust, scalable systems. My expertise spans from crafting pixel-perfect React frontends to designing resilient cloud-native backend architectures.
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#ebeaea]">
                I thrive at the intersection of engineering and product thinking — I don't just write code, I solve problems. From startup sprints to enterprise-scale deployments, I bring a systems-first mindset and an eye for detail.
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#ebeaea]">
                When I'm not engineering, I'm exploring the latest in AI/ML research, contributing to open-source, or mentoring fellow developers in the community.
              </p>
            </div>

            {/* Characteristics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.12)] rounded-2xl px-4 py-3 flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p107b6100} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p27a85e80} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p2fc3a80} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <span className="font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">Clean Coder</span>
              </div>

              <div className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.12)] rounded-2xl px-4 py-3 flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.pfe5cd00} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p1fb38400} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10 1.33333V2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10 13.3333V14.6667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M1.33333 10H2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M1.33333 6H2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M13.3333 10H14.6667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M13.3333 6H14.6667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6 1.33333V2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6 13.3333V14.6667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <span className="font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">Systems Thinker</span>
              </div>

              <div className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.12)] rounded-2xl px-4 py-3 flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d="M6.66667 1.33333V2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M9.33333 1.33333V2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p11caa380} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M4 1.33333V2.66667" stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <span className="font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">Problem Solver</span>
              </div>

              <div className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.12)] rounded-2xl px-4 py-3 flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p14548f00} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p17781bc0} stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <span className="font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">Based in Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Primary Stack */}
            <div>
              <p className="font-['Inter:Regular',sans-serif] text-sm text-[#ebeaea] mb-4 tracking-wide">
                PRIMARY STACK
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  React
                </span>
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  Java
                </span>
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  Python
                </span>
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  PostgreSQL
                </span>
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  Docker
                </span>
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  AWS
                </span>
                <span className="bg-[#d5d0d0] border border-[rgba(0,212,255,0.2)] rounded-lg px-3 py-2 font-['Inter:Regular',sans-serif] text-sm text-[#05c725]">
                  GitHub
                </span>
              </div>
            </div>

            {/* Projects Description */}
            <div>
              <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#d5d0d0]">
                I have worked on a diverse set of projects spanning full stack development, AI/ML, and UI/UX design. 
              </p>
              <br />
              <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#d5d0d0]">
                These include a presentation analyzer that processes audio and PPT inputs to provide intelligent feedback, a hotel management system for seamless booking across multiple locations, and a medical insurance cost prediction model using machine learning for real-world insights. 
              </p>
              <br />
              <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#d5d0d0]">
                Additionally, I have redesigned platforms like DigiLocker and LinkedIn to enhance user experience, usability, and modern interface design, showcasing my ability to build scalable systems and create intuitive digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-black w-full" data-name="Layout">
      <Hero />
      <About />
    </div>
  );
}