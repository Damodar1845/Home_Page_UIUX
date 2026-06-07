import React from "react";

export default function DigiLockerShowcase() {
  return (
    <div className="w-full space-y-12">
      {/* Design Overview Section */}
      <div className="bg-gradient-to-r from-[rgba(5,199,37,0.1)] to-[rgba(5,199,37,0.05)] border border-[rgba(5,199,37,0.3)] rounded-lg p-8 md:p-12">
        <h3 className="font-['Inter:Bold',sans-serif] text-[28px] text-white mb-4">
          Design Overview
        </h3>
        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#05c725] mb-6">
          DigiLocker represents a modern approach to government digital services. The design emphasizes trust, security, and user empowerment through a clean, intuitive interface that makes document management effortless for millions of citizens.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white">Design Principles</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-[14px] text-[#05c725]">
                <span className="size-2 rounded-full bg-[#05c725] mt-2 flex-shrink-0" />
                <span><strong>Security First:</strong> Visual indicators emphasize encryption and data protection</span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#05c725]">
                <span className="size-2 rounded-full bg-[#05c725] mt-2 flex-shrink-0" />
                <span><strong>Accessibility:</strong> WCAG 2.1 AA compliant color contrasts and typography</span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#05c725]">
                <span className="size-2 rounded-full bg-[#05c725] mt-2 flex-shrink-0" />
                <span><strong>Inclusivity:</strong> Supports regional languages and diverse user demographics</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white">Key Focus Areas</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-[14px] text-[#05c725]">
                <span className="size-2 rounded-full bg-[#05c725] mt-2 flex-shrink-0" />
                <span><strong>Trust Building:</strong> Transparent security indicators and clear information hierarchy</span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#05c725]">
                <span className="size-2 rounded-full bg-[#05c725] mt-2 flex-shrink-0" />
                <span><strong>User Efficiency:</strong> One-click operations and smart categorization</span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#05c725]">
                <span className="size-2 rounded-full bg-[#05c725] mt-2 flex-shrink-0" />
                <span><strong>Government Integration:</strong> Seamless API connections with official databases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* User Flows Section */}
      <div className="space-y-6">
        <h3 className="font-['Inter:Bold',sans-serif] text-[28px] text-white">
          Core User Flows
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Onboarding Flow */}
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 rounded-full bg-[#05c725] text-black flex items-center justify-center font-bold">1</div>
              <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white">
                Onboarding & Verification
              </h4>
            </div>
            <ul className="space-y-3 text-[14px] text-[#05c725]">
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Aadhaar-based identity verification
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Multi-factor authentication setup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Profile completion and preferences
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Auto-sync with government databases
              </li>
            </ul>
          </div>

          {/* Document Management Flow */}
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 rounded-full bg-[#05c725] text-black flex items-center justify-center font-bold">2</div>
              <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white">
                Document Management
              </h4>
            </div>
            <ul className="space-y-3 text-[14px] text-[#05c725]">
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Organize documents by category
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Drag-and-drop upload interface
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Search and filter capabilities
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Version history and restore options
              </li>
            </ul>
          </div>

          {/* Sharing & Collaboration */}
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 rounded-full bg-[#05c725] text-black flex items-center justify-center font-bold">3</div>
              <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white">
                Secure Sharing
              </h4>
            </div>
            <ul className="space-y-3 text-[14px] text-[#05c725]">
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> One-click sharing with institutions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> QR code generation for mobile sharing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Time-limited access tokens
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Access auditing and revocation
              </li>
            </ul>
          </div>

          {/* Verification Flow */}
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 rounded-full bg-[#05c725] text-black flex items-center justify-center font-bold">4</div>
              <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-white">
                Certificate Verification
              </h4>
            </div>
            <ul className="space-y-3 text-[14px] text-[#05c725]">
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Real-time verification badges
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Government database integration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Digital signature validation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#05c725] mt-1">→</span> Certificate expiry notifications
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Components */}
      <div className="space-y-6">
        <h3 className="font-['Inter:Bold',sans-serif] text-[28px] text-white">
          Key UI Components
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
              📄 Document Card
            </h4>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-white mb-3">
              Displays document metadata with verification status, expiry date, and quick action buttons for download, share, and delete.
            </p>
            <div className="space-y-2 text-[13px] text-[#05c725]">
              <p>✓ Verification badge</p>
              <p>✓ Expiry countdown</p>
              <p>✓ Quick actions menu</p>
              <p>✓ Download progress indicator</p>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
              🔐 Security Indicator
            </h4>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-white mb-3">
              Visual representation of document encryption status and access permissions with clear messaging.
            </p>
            <div className="space-y-2 text-[13px] text-[#05c725]">
              <p>✓ Encryption status icon</p>
              <p>✓ Access level badge</p>
              <p>✓ Last access timestamp</p>
              <p>✓ Share status notification</p>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
              🏷️ Category Filter
            </h4>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-white mb-3">
              Intelligent filtering system for document organization with tags, categories, and smart search.
            </p>
            <div className="space-y-2 text-[13px] text-[#05c725]">
              <p>✓ Multi-select filtering</p>
              <p>✓ Custom tag creation</p>
              <p>✓ Search suggestions</p>
              <p>✓ Saved filter presets</p>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-6">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#05c725] mb-4">
              📱 Mobile Responsive
            </h4>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-white mb-3">
              Fully responsive design that adapts seamlessly across mobile, tablet, and desktop devices.
            </p>
            <div className="space-y-2 text-[13px] text-[#05c725]">
              <p>✓ Touch-optimized interactions</p>
              <p>✓ Bottom sheet modals</p>
              <p>✓ Gesture-based navigation</p>
              <p>✓ Mobile-first design approach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Specifications */}
      <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-lg p-8">
        <h3 className="font-['Inter:Bold',sans-serif] text-[28px] text-white mb-6">
          Design Specifications
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725] mb-3">
              Color Palette
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="size-6 rounded bg-[#0060D9]" />
                <span className="text-[13px] text-white">Primary Blue: #0060D9</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 rounded bg-[#FFFFFF]" />
                <span className="text-[13px] text-white">White: #FFFFFF</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 rounded bg-[#F5F5F5]" />
                <span className="text-[13px] text-white">Light Gray: #F5F5F5</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-6 rounded bg-[#DC2626]" />
                <span className="text-[13px] text-white">Error Red: #DC2626</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725] mb-3">
              Typography
            </h4>
            <div className="space-y-2 text-[13px] text-white">
              <p><strong>Font Family:</strong> Inter, Segoe UI</p>
              <p><strong>Headlines:</strong> Bold (700), 24-48px</p>
              <p><strong>Body:</strong> Regular (400), 14-16px</p>
              <p><strong>Caption:</strong> Regular (400), 12px</p>
            </div>
          </div>

          <div>
            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#05c725] mb-3">
              Spacing & Layout
            </h4>
            <div className="space-y-2 text-[13px] text-white">
              <p><strong>Grid:</strong> 8px base unit system</p>
              <p><strong>Breakpoints:</strong> 320px, 768px, 1024px</p>
              <p><strong>Border Radius:</strong> 4px, 8px, 12px</p>
              <p><strong>Shadows:</strong> Subtle elevation system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#05c725] to-[#05c725]/80 rounded-lg p-8 md:p-12 text-center">
        <h3 className="font-['Inter:Bold',sans-serif] text-[32px] text-black mb-4">
          View Full Figma Prototype
        </h3>
        <p className="font-['Inter:Regular',sans-serif] text-[16px] text-black/80 mb-6">
          Explore the complete interactive prototype with all design components and user flows
        </p>
        <a
          href="https://www.figma.com/design/Y0n1TTfmVGNVhIliKT77gZ/DIGILOCKER?node-id=0-1&p=f&t=Yr95oQHSFSOigiEs-0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-[#05c725] px-6 py-3 rounded-lg font-['Inter:Semi_Bold',sans-serif] hover:bg-black/90 transition-colors"
        >
          <span>Open in Figma</span>
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
