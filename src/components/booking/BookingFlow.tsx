"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import ServiceSelector from "./ServiceSelector";
import { bookingConfig, generalBookingUrl } from "@/config/booking";
import { ArrowRight, ExternalLink, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

function BookingFlowInner() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const s = searchParams.get("service");
    if (s) setSelectedService(s);
  }, [searchParams]);

  const config = bookingConfig.find((b) => b.serviceSlug === selectedService);
  const bookingUrl = config?.calendlyUrl ?? generalBookingUrl;

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-8">
          <ServiceSelector selected={selectedService} onSelect={setSelectedService} />

          {selectedService && config && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3 mb-4">
                {config.requiresApproval ? (
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={cn("font-semibold text-sm", config.requiresApproval ? "text-yellow-700" : "text-green-700")}>
                    {config.requiresApproval ? "Consultation Required" : "Book Directly"}
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {config.approvalMessage ?? `You can book ${config.serviceName} directly online.`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" />{config.durationMinutes} minutes</div>
                <Badge variant="gray">{config.dailyCapacityNote}</Badge>
              </div>

              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-base px-6 py-4 transition-all duration-200">
                {config.requiresApproval ? "Request Consultation" : "Schedule on Calendly"}
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-xs text-center text-gray-400 mt-3">
                You&apos;ll be redirected to our Calendly scheduling page to select your date and time.
              </p>
            </div>
          )}

          {!selectedService && (
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm mb-4">Don&apos;t see what you need?</p>
              <a href={generalBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-base px-6 py-3 transition-all duration-200">
                Book General Appointment <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function BookingFlow() {
  return (
    <Suspense fallback={<div className="max-w-2xl mx-auto"><Card><CardContent className="p-8 text-center text-gray-500">Loading...</CardContent></Card></div>}>
      <BookingFlowInner />
    </Suspense>
  );
}
