"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Check,
  ChevronDown,
  CheckCircle,
  ExternalLink,
  Phone,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { bookingConfig, generalBookingUrl, buildCalendlyUrl } from "@/config/booking";

const languages = ["English", "Spanish", "Ukrainian", "Russian"];

const hearAboutOptions = [
  "Google search",
  "Google Maps",
  "Friend / family referral",
  "Drove past the shop",
  "Returning customer",
  "Other",
];

const timeframeOptions = [
  { value: "asap", label: "ASAP — vehicle isn't drivable" },
  { value: "this-week", label: "This week" },
  { value: "next-week", label: "Next week" },
  { value: "flexible", label: "Flexible — whenever works" },
];

type StepId = "service" | "vehicle" | "issue" | "contact";

const stepOrder: StepId[] = ["service", "vehicle", "issue", "contact"];
const stepMeta: Record<StepId, { title: string; sub: string }> = {
  service: { title: "What do you need?", sub: "Pick the service that fits best." },
  vehicle: { title: "About your vehicle", sub: "Year, make and model help us prep the bay." },
  issue: { title: "Tell us what's going on", sub: "The more detail, the faster we move." },
  contact: { title: "How can we reach you?", sub: "Final step before picking a time." },
};

interface FormState {
  serviceSlug: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleMileage: string;
  vehicleVin: string;
  problemDescription: string;
  preferredTimeframe: string;
  hearAboutUs: string;
  name: string;
  phone: string;
  email: string;
  preferredLanguage: string;
}

const initialState: FormState = {
  serviceSlug: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleMileage: "",
  vehicleVin: "",
  problemDescription: "",
  preferredTimeframe: "",
  hearAboutUs: "",
  name: "",
  phone: "",
  email: "",
  preferredLanguage: "English",
};

const spring = { type: "spring" as const, stiffness: 110, damping: 22 };

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<StepId>("service");
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState<{ url: string; serviceName: string } | null>(null);

  // Prefill service from query string (e.g. /book?service=diagnostics)
  useEffect(() => {
    const s = searchParams.get("service");
    if (s && bookingConfig.some((b) => b.serviceSlug === s)) {
      setForm((f) => ({ ...f, serviceSlug: s }));
    }
  }, [searchParams]);

  const currentStepIndex = stepOrder.indexOf(step);
  const progress = ((currentStepIndex + 1) / stepOrder.length) * 100;
  const selectedConfig = useMemo(
    () => bookingConfig.find((b) => b.serviceSlug === form.serviceSlug),
    [form.serviceSlug]
  );

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validateStep(target: StepId): boolean {
    const next: typeof errors = {};
    if (target === "service" && !form.serviceSlug) next.serviceSlug = "Pick a service to continue.";
    if (target === "vehicle") {
      if (!form.vehicleYear) next.vehicleYear = "Year required.";
      if (!form.vehicleMake) next.vehicleMake = "Make required.";
      if (!form.vehicleModel) next.vehicleModel = "Model required.";
    }
    if (target === "issue") {
      if (!form.problemDescription.trim()) next.problemDescription = "Even a short note helps us prep.";
      if (!form.preferredTimeframe) next.preferredTimeframe = "Let us know your timing.";
    }
    if (target === "contact") {
      if (!form.name.trim()) next.name = "Name required.";
      if (!form.phone.trim()) next.phone = "Phone required.";
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        next.email = "Email looks invalid.";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    const next = stepOrder[currentStepIndex + 1];
    if (next) {
      setStep(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleSubmit();
    }
  }

  function goBack() {
    const prev = stepOrder[currentStepIndex - 1];
    if (prev) {
      setStep(prev);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleSubmit() {
    // Run every validation one more time for safety
    if (!validateStep("contact")) return;

    const baseUrl = selectedConfig?.calendlyUrl ?? generalBookingUrl;
    const calendlyUrl = buildCalendlyUrl(baseUrl, {
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      preferredLanguage: form.preferredLanguage,
      vehicleYear: form.vehicleYear,
      vehicleMake: form.vehicleMake,
      vehicleModel: form.vehicleModel,
      vehicleMileage: form.vehicleMileage || undefined,
      vehicleVin: form.vehicleVin || undefined,
      services: selectedConfig?.serviceName ?? "Other",
      problemDescription: form.problemDescription,
      preferredTimeframe:
        timeframeOptions.find((o) => o.value === form.preferredTimeframe)?.label ?? form.preferredTimeframe,
      hearAboutUs: form.hearAboutUs || undefined,
    });

    setSubmitted({
      url: calendlyUrl,
      serviceName: selectedConfig?.serviceName ?? "your appointment",
    });
    // Pop the calendar in a new tab so the user doesn't lose the confirmation
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  }

  /* ─── Reusable styles ─── */
  const inputBase =
    "w-full px-4 py-3.5 rounded-xl border bg-black-rich/50 text-white placeholder-slate-700 focus:outline-none transition-all duration-200 text-sm";
  const inputClass = (hasError: boolean) =>
    `${inputBase} ${
      hasError
        ? "border-red-500/40 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/40"
        : "border-white/[0.08] focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500/30"
    }`;
  const labelClass = "block text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2";
  const errorClass = "text-red-400 text-xs mt-1.5";

  /* ─── Submitted screen ─── */
  if (submitted) {
    return (
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring}
          className="rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-500/[0.06] to-transparent backdrop-blur-xl p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent-500/15 border border-accent-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Pick your time
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-2">
            We opened the calendar in a new tab. Confirm a slot for{" "}
            <span className="text-white font-semibold">{submitted.serviceName}</span> and
            we&apos;ll send you an instant confirmation.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Your vehicle and service details are already attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={submitted.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-7 py-3.5 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.45)]"
            >
              Open calendar again
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/15 text-white hover:border-accent-500/40 text-base px-7 py-3.5 transition-all duration-300"
            >
              Back to home
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.06] text-sm text-slate-500">
            Calendar trouble? Call us:{" "}
            <a href="tel:+12532143774" className="text-accent-400 hover:text-accent-300 font-medium">
              (253) 214-3774
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ─── Stepper form ─── */
  return (
    <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
      {/* Page header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent-500/50" />
          <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">
            Book a Visit
          </span>
          <div className="h-px w-8 bg-accent-500/50" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-[1.05]">
          Let&apos;s get your <span className="gradient-text">car back on the road.</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-lg mx-auto text-base">
          Four quick steps, then pick a time. Takes about 90 seconds.
        </p>
      </div>

      {/* Progress + steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-slate-500 mb-3">
          <span>
            Step {currentStepIndex + 1} of {stepOrder.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-500 to-accent-400"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-4 gap-2">
          {stepOrder.map((s, i) => {
            const isDone = i < currentStepIndex;
            const isActive = i === currentStepIndex;
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  if (i <= currentStepIndex || validateStep(step)) setStep(s);
                }}
                className={`flex-1 text-[10px] sm:text-xs font-mono tracking-wider uppercase py-2 px-1 rounded-lg border transition-all ${
                  isActive
                    ? "border-accent-500/40 bg-accent-500/[0.08] text-accent-300"
                    : isDone
                      ? "border-white/[0.06] bg-white/[0.02] text-slate-300 hover:border-accent-500/20 cursor-pointer"
                      : "border-white/[0.04] text-slate-600 cursor-default"
                }`}
                disabled={i > currentStepIndex}
              >
                <span className="hidden sm:inline">{i + 1}. </span>
                {s === "service" && "Service"}
                {s === "vehicle" && "Vehicle"}
                {s === "issue" && "Issue"}
                {s === "contact" && "Contact"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step card */}
      <div className="rounded-3xl border border-white/[0.06] bg-black-deep/60 backdrop-blur-xl p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {stepMeta[step].title}
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">{stepMeta[step].sub}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {step === "service" && (
              <div className="space-y-3">
                {bookingConfig.map((svc) => {
                  const active = form.serviceSlug === svc.serviceSlug;
                  return (
                    <button
                      key={svc.serviceSlug}
                      type="button"
                      onClick={() => setField("serviceSlug", svc.serviceSlug)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 group ${
                        active
                          ? "border-accent-500/40 bg-accent-500/[0.07] shadow-[0_0_20px_rgba(249,115,22,0.12)]"
                          : "border-white/[0.06] bg-white/[0.01] hover:border-accent-500/20 hover:bg-white/[0.025]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            active ? "border-accent-500 bg-accent-500" : "border-white/20 bg-transparent"
                          }`}
                        >
                          {active && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <p className="font-display font-semibold text-white text-base">
                              {svc.serviceName}
                            </p>
                            {svc.consultationFirst && (
                              <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                                Consultation first
                              </span>
                            )}
                          </div>
                          <p className="text-slate-400 text-sm leading-snug">{svc.availabilityNote}</p>
                          <div className="flex items-center gap-1.5 text-slate-600 text-xs mt-2">
                            <Clock className="w-3 h-3" />
                            <span>~{svc.durationMinutes} min</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
                {errors.serviceSlug && <p className={errorClass}>{errors.serviceSlug}</p>}
              </div>
            )}

            {step === "vehicle" && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="vehicleYear" className={labelClass}>Year *</label>
                    <input
                      id="vehicleYear"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={4}
                      value={form.vehicleYear}
                      onChange={(e) => setField("vehicleYear", e.target.value.replace(/\D/g, ""))}
                      placeholder="2019"
                      className={inputClass(!!errors.vehicleYear)}
                    />
                    {errors.vehicleYear && <p className={errorClass}>{errors.vehicleYear}</p>}
                  </div>
                  <div>
                    <label htmlFor="vehicleMake" className={labelClass}>Make *</label>
                    <input
                      id="vehicleMake"
                      type="text"
                      value={form.vehicleMake}
                      onChange={(e) => setField("vehicleMake", e.target.value)}
                      placeholder="Tesla"
                      className={inputClass(!!errors.vehicleMake)}
                    />
                    {errors.vehicleMake && <p className={errorClass}>{errors.vehicleMake}</p>}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="vehicleModel" className={labelClass}>Model *</label>
                    <input
                      id="vehicleModel"
                      type="text"
                      value={form.vehicleModel}
                      onChange={(e) => setField("vehicleModel", e.target.value)}
                      placeholder="Model 3"
                      className={inputClass(!!errors.vehicleModel)}
                    />
                    {errors.vehicleModel && <p className={errorClass}>{errors.vehicleModel}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vehicleMileage" className={labelClass}>Mileage</label>
                    <input
                      id="vehicleMileage"
                      type="text"
                      inputMode="numeric"
                      value={form.vehicleMileage}
                      onChange={(e) => setField("vehicleMileage", e.target.value)}
                      placeholder="48,000"
                      className={inputClass(false)}
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleVin" className={labelClass}>VIN (optional)</label>
                    <input
                      id="vehicleVin"
                      type="text"
                      maxLength={17}
                      value={form.vehicleVin}
                      onChange={(e) => setField("vehicleVin", e.target.value.toUpperCase())}
                      placeholder="Speeds up parts lookup"
                      className={inputClass(false) + " font-mono tracking-wider"}
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  VIN is optional but lets us pre-order parts before you arrive.
                </p>
              </div>
            )}

            {step === "issue" && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="problemDescription" className={labelClass}>
                    What&apos;s going on? *
                  </label>
                  <textarea
                    id="problemDescription"
                    rows={5}
                    value={form.problemDescription}
                    onChange={(e) => setField("problemDescription", e.target.value)}
                    placeholder="Symptoms, sounds, warning lights, recent work — anything helps."
                    className={inputClass(!!errors.problemDescription) + " resize-none"}
                  />
                  {errors.problemDescription && (
                    <p className={errorClass}>{errors.problemDescription}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>How soon do you need this? *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {timeframeOptions.map((opt) => {
                      const active = form.preferredTimeframe === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setField("preferredTimeframe", opt.value)}
                          className={`text-left p-3.5 rounded-xl border text-sm transition-all ${
                            active
                              ? "border-accent-500/40 bg-accent-500/[0.07] text-white"
                              : "border-white/[0.06] bg-white/[0.01] text-slate-300 hover:border-accent-500/20"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                active ? "border-accent-500 bg-accent-500" : "border-white/20"
                              }`}
                            >
                              {active && <Check className="w-2.5 h-2.5 text-white" />}
                            </span>
                            {opt.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.preferredTimeframe && (
                    <p className={errorClass}>{errors.preferredTimeframe}</p>
                  )}
                </div>
              </div>
            )}

            {step === "contact" && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      placeholder="Alex Smith"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      placeholder="(253) 000-0000"
                      className={inputClass(!!errors.phone)}
                    />
                    {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email (optional)</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="alex@example.com"
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                  <p className="text-xs text-slate-600 mt-1.5">
                    Used to send your appointment confirmation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredLanguage" className={labelClass}>Preferred language</label>
                    <div className="relative">
                      <select
                        id="preferredLanguage"
                        value={form.preferredLanguage}
                        onChange={(e) => setField("preferredLanguage", e.target.value)}
                        className={inputClass(false) + " appearance-none cursor-pointer pr-10"}
                      >
                        {languages.map((l) => (
                          <option key={l} value={l} className="bg-black-deep">
                            {l}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hearAboutUs" className={labelClass}>How&apos;d you find us?</label>
                    <div className="relative">
                      <select
                        id="hearAboutUs"
                        value={form.hearAboutUs}
                        onChange={(e) => setField("hearAboutUs", e.target.value)}
                        className={inputClass(false) + " appearance-none cursor-pointer pr-10"}
                      >
                        <option value="" className="bg-black-deep">Optional</option>
                        {hearAboutOptions.map((o) => (
                          <option key={o} value={o} className="bg-black-deep">
                            {o}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Summary chip */}
                <div className="mt-4 rounded-2xl border border-accent-500/15 bg-accent-500/[0.04] p-5">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-accent-400 mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Booking summary
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <SummaryRow label="Service" value={selectedConfig?.serviceName ?? "—"} />
                    <SummaryRow
                      label="Vehicle"
                      value={
                        [form.vehicleYear, form.vehicleMake, form.vehicleModel]
                          .filter(Boolean)
                          .join(" ") || "—"
                      }
                    />
                    <SummaryRow
                      label="Timing"
                      value={
                        timeframeOptions.find((o) => o.value === form.preferredTimeframe)?.label ?? "—"
                      }
                    />
                    <SummaryRow label="Duration" value={selectedConfig ? `~${selectedConfig.durationMinutes} min` : "—"} />
                  </dl>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer nav */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between">
          {currentStepIndex > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center justify-center gap-2 font-display font-medium rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/20 text-sm px-5 py-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <a
              href="tel:+12532143774"
              className="inline-flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-accent-400 transition-colors px-5 py-3"
            >
              <Phone className="w-3.5 h-3.5" />
              Rather call? (253) 214-3774
            </a>
          )}

          <button
            type="button"
            onClick={goNext}
            className="group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-7 py-3.5 transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:shadow-[0_0_35px_rgba(249,115,22,0.4)]"
          >
            {currentStepIndex === stepOrder.length - 1 ? (
              <>
                <Calendar className="w-4 h-4" />
                See available times
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Trust strip */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-500/70" />
          No surprise charges
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-accent-500/70" />
          5.0 Google rating
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-accent-500/70" />
          Same-week openings most weeks
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <dt className="text-[10px] font-mono tracking-widest uppercase text-slate-500 whitespace-nowrap">
        {label}
      </dt>
      <dd className="text-white text-sm font-medium truncate">{value}</dd>
    </div>
  );
}
