"use client";

import { Badge } from "@/components/ui/Badge";

export default function Gallery() {
  return (
    <section className="section-padding bg-navy-850">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">Our Shop</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">Our Facility</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Modern equipment, clean workspace, and a team that takes pride in their craft.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video bg-gradient-to-br from-navy-700 to-navy-800 rounded-2xl border border-navy-600 flex items-center justify-center">
              <span className="text-slate-600 text-sm font-medium">Shop Photo {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
