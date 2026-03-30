"use client";

import { Badge } from "@/components/ui/Badge";

export default function Gallery() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">Our Shop</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">State-of-the-Art Facility</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Modern equipment, clean workspace, and a team that takes pride in their craft.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Shop Photo {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
