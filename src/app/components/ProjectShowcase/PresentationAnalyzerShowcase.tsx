import React from "react";
import previewImage1 from "../../../assets/presentation_analyzer_1.png";
import previewImage2 from "../../../assets/presentation_analyzer_2.png";

export default function PresentationAnalyzerShowcase() {
  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] overflow-hidden border border-[rgba(5,199,37,0.06)] bg-[#f8fbff] p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#0b84ff] mb-2">Presentation Analyzer</p>
            <h3 className="text-3xl font-['Inter:Bold',sans-serif] text-[#0b3a66]">Visual analytics for slide and speech performance</h3>
            <p className="mt-3 text-sm text-[#2f5e86] max-w-2xl">Showcase your AI-driven presentation review interface with real UI imagery and insights cards.</p>
          </div>
          <div className="rounded-xl overflow-hidden border bg-white p-2 w-full lg:w-96">
            <img src={previewImage1} alt="Presentation analyzer preview" className="w-full h-40 object-cover" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[1.5rem] overflow-hidden border border-[rgba(0,0,0,0.04)] bg-white">
          <img src={previewImage2} alt="Slide analysis preview" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-[#0b3a66]">Slide Analysis</h4>
            <p className="text-sm text-[#3b6f8f]">View slide performance metrics and content suggestions in one place.</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] overflow-hidden border border-[rgba(0,0,0,0.04)] bg-white p-4">
          <h4 className="text-lg font-semibold text-[#0b3a66]">Audio Insights</h4>
          <p className="text-sm text-[#3b6f8f]">A glance at vocal delivery, pacing, and confidence scores.</p>
          <ul className="mt-4 space-y-2 text-sm text-[#3b6f8f]">
            <li>• Pacing and tone evaluation</li>
            <li>• Word emphasis and clarity metrics</li>
            <li>• Automated improvement prompts</li>
          </ul>
        </div>

        <div className="rounded-[1.5rem] overflow-hidden border border-[rgba(0,0,0,0.04)] bg-white p-4">
          <h4 className="text-lg font-semibold text-[#0b3a66]">Report Generator</h4>
          <p className="text-sm text-[#3b6f8f]">Generate polished feedback reports for presenters and teams.</p>
          <div className="mt-4 space-y-2 text-sm text-[#3b6f8f]">
            <p>• Exportable PDF summaries</p>
            <p>• Actionable next steps</p>
            <p>• Comparison across sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
