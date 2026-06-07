import React from "react";
import heroImage from "../../../assets/insurance_predictor_1.png";
import formImage from "../../../assets/insurance_predictor_2.png";

export default function InsurancePredictorShowcase() {
  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] overflow-hidden border border-[rgba(5,199,37,0.06)] bg-[#f8fdff] p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#0b84ff] mb-2">Insurance Predictor</p>
            <h3 className="text-3xl font-['Inter:Bold',sans-serif] text-[#07324a]">AI-powered predictions and clear insights</h3>
            <p className="mt-3 text-sm text-[#235a78] max-w-2xl">Interactive UI showing form input, prediction CTA, and a summary dashboard with confidence and breakdowns.</p>
          </div>
          <div className="rounded-xl overflow-hidden border bg-white p-2 w-full lg:w-96">
            <img src={heroImage} alt="Insurance hero" className="w-full h-40 object-cover" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[1.5rem] overflow-hidden border border-[rgba(0,0,0,0.04)] bg-white">
          <img src={formImage} alt="Form preview" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-[#07324a]">Get Your Prediction</h4>
            <p className="text-sm text-[#3b6f8f]">Enter basic health info to receive a tailored suggestion.</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] overflow-hidden border border-[rgba(0,0,0,0.04)] bg-white p-4">
          <h4 className="text-lg font-semibold text-[#07324a]">Prediction Summary</h4>
          <p className="text-sm text-[#3b6f8f]">Premium estimate, confidence, and feature insights displayed clearly.</p>
          <div className="mt-4 space-y-2 text-sm text-[#3b6f8f]">
            <p>• Accurate premiums based on health and lifestyle</p>
            <p>• Visual confidence score for every recommendation</p>
            <p>• Clear plan comparison at a glance</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] overflow-hidden border border-[rgba(0,0,0,0.04)] bg-white p-4">
          <h4 className="text-lg font-semibold text-[#07324a]">How It Works</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#3b6f8f]">
            <li>• Fill in personal & health details</li>
            <li>• Our AI analyzes and compares plans</li>
            <li>• Receive a recommended plan with confidence score</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
