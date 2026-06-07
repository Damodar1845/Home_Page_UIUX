import React from "react";
import hotelRoomImage from "../../../assets/hotel_management_1.png";
import hotelSearchImage from "../../../assets/hotel_management_2.png";

export default function HotelManagementShowcase() {
  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-[rgba(255,255,255,0.1)] bg-[#081117] p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#05c725] mb-4">Hotel Management Preview</p>
            <h3 className="text-3xl font-['Inter:Bold',sans-serif] text-white">Visual experience for booking, availability, and guest management</h3>
            <p className="mt-4 max-w-2xl text-[#b9f5d0] leading-7">
              A polished hotel web page preview that shows room search, booking status, and guest dashboard designs, all optimized for a modern hospitality platform.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[rgba(5,199,37,0.15)] bg-[#061116] p-5 shadow-[0_20px_80px_rgba(5,199,37,0.08)]">
            <div className="mb-4 rounded-3xl bg-[#081219] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#05c725]">Reservation Summary</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">Deluxe Suite</p>
                  <p className="text-sm text-[#b9f5d0]">2 guests • 3 nights</p>
                </div>
                <span className="rounded-full bg-[#05c725] px-4 py-2 text-sm font-semibold text-black">Booked</span>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#061216] p-4 border border-[rgba(5,199,37,0.1)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#05c725]">Availability</p>
                <p className="mt-3 text-2xl font-bold text-white">72%</p>
              </div>
              <div className="rounded-3xl bg-[#061216] p-4 border border-[rgba(5,199,37,0.1)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#05c725]">Rating</p>
                <p className="mt-3 text-2xl font-bold text-white">4.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[1.75rem] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#071618] shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
          <img src={hotelRoomImage} alt="Room preview" className="w-full h-72 object-cover" />
          <div className="p-6 space-y-3">
            <h4 className="text-xl font-semibold text-white">Executive Suite</h4>
            <p className="text-sm text-[#b9f5d0]">A premium room card with quick details, pricing, and booking CTA.</p>
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-[#05c725]">₹4,999 / night</span>
              <button className="rounded-full bg-[#05c725] px-4 py-2 text-sm font-semibold text-black">View</button>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#071618] shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
          <img src={hotelSearchImage} alt="Search interface preview" className="w-full h-72 object-cover" />
          <div className="p-6 space-y-3">
            <h4 className="text-xl font-semibold text-white">Find the best room</h4>
            <p className="text-sm text-[#dbe9d4]">Destination, check-in, and guest search UI for fast booking.</p>
            <div className="rounded-full bg-[#0b1a1d] p-3 text-sm text-[#05c725]">Search by city, date, or guest count</div>
          </div>
        </div>

        <div className="rounded-[1.75rem] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#071618] shadow-[0_15px_40px_rgba(0,0,0,0.2)] p-6">
          <h4 className="text-xl font-semibold text-white">Guest stats</h4>
          <p className="text-sm text-[#b9f5d0]">A summary card for occupancy, revenue, and reviews.</p>
          <div className="mt-4 grid gap-2 text-sm text-[#05c725]">
            <div className="flex items-center justify-between">
              <span>Occupancy</span>
              <span>78%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Reviews</span>
              <span>4.8★</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Revenue growth</span>
              <span>+12%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
