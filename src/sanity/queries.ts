import "server-only";

import { sanityFetch } from "../../sanity/lib/fetch";
import { urlFor } from "../../sanity/lib/image";

// ─── Types ─────────────────────────────────────────────────────────────────
export interface SiteSettings {
  businessName: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  cityStateZip: string;
  mapsUrl: string;
  hours: string;
  languages: string;
  generalBookingUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  footerDescription: string;
}

export interface HeroContent {
  statusBadge: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  subheadline: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  trustBadges: { icon: string; label: string }[];
  backgroundImageUrl?: string | null;
}

export interface ServiceDoc {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  details: string[];
  featured: boolean;
  calendlyUrl?: string;
  durationMinutes?: number;
  availabilityNote?: string;
  consultationFirst?: boolean;
  order?: number;
}

export interface SpecialtyDoc {
  tag: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order?: number;
}

export interface TestimonialDoc {
  name: string;
  text: string;
  source: string;
  rating: number;
  order?: number;
}

export interface StatDoc {
  label: string;
  value: number;
  suffix?: string;
  showStar?: boolean;
  showInHero?: boolean;
  showInTrustSection?: boolean;
  order?: number;
}

export interface ProcessStepDoc {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface GalleryPhotoDoc {
  imageUrl: string;
  alt: string;
  caption: string;
  tag: string;
  size: "large" | "tall" | "wide" | "small";
  order?: number;
}

export interface TrustReasonDoc {
  title: string;
  description: string;
  icon: string;
  order?: number;
}

/** Portable-Text block (loosely typed — we render with @portabletext/react). */
export interface LegalPageDoc {
  title: string;
  slug: string;
  effectiveDate?: string;
  summary?: string;
  body: unknown[];
}

// ─── GROQ queries ─────────────────────────────────────────────────────────
const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  businessName, shortName, tagline, phone, phoneHref, email, address,
  cityStateZip, mapsUrl, hours, languages, generalBookingUrl,
  metaTitle, metaDescription, footerDescription
}`;

const HERO_QUERY = `*[_type == "hero"][0]{
  statusBadge, headlineLine1, headlineLine2, headlineLine3, subheadline,
  primaryCtaLabel, secondaryCtaLabel, trustBadges, backgroundImage
}`;

const SERVICES_QUERY = `*[_type == "service"]|order(order asc, title asc){
  "slug": slug.current, title, category, description, icon, details,
  featured, calendlyUrl, durationMinutes, availabilityNote,
  consultationFirst, order
}`;

const SPECIALTIES_QUERY = `*[_type == "specialty"]|order(order asc){
  tag, title, description, icon, features, order
}`;

const TESTIMONIALS_QUERY = `*[_type == "testimonial"]|order(order asc){
  name, text, source, rating, order
}`;

const STATS_QUERY = `*[_type == "stat"]|order(order asc){
  label, value, suffix, showStar, showInHero, showInTrustSection, order
}`;

const PROCESS_STEPS_QUERY = `*[_type == "processStep"]|order(order asc){
  stepNumber, title, description, icon, order
}`;

const GALLERY_QUERY = `*[_type == "galleryPhoto"]|order(order asc){
  image, caption, tag, size, order
}`;

const TRUST_REASONS_QUERY = `*[_type == "trustReason"]|order(order asc){
  title, description, icon, order
}`;

const LEGAL_PAGE_QUERY = `*[_type == "legalPage" && slug.current == $slug][0]{
  title, "slug": slug.current, effectiveDate, summary, body
}`;

// ─── Fetch helpers ─────────────────────────────────────────────────────────
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY });
}

export async function getHero(): Promise<HeroContent | null> {
  const raw = await sanityFetch<HeroContent & { backgroundImage?: unknown }>({
    query: HERO_QUERY,
  });
  if (!raw) return null;
  const { backgroundImage, ...rest } = raw;
  return {
    ...rest,
    backgroundImageUrl: backgroundImage
      ? urlFor(backgroundImage as never).width(2000).auto("format").url()
      : null,
  };
}

export async function getServices(): Promise<ServiceDoc[]> {
  const data = await sanityFetch<ServiceDoc[]>({ query: SERVICES_QUERY });
  return data ?? [];
}

export async function getSpecialties(): Promise<SpecialtyDoc[]> {
  const data = await sanityFetch<SpecialtyDoc[]>({ query: SPECIALTIES_QUERY });
  return data ?? [];
}

export async function getTestimonials(): Promise<TestimonialDoc[]> {
  const data = await sanityFetch<TestimonialDoc[]>({ query: TESTIMONIALS_QUERY });
  return data ?? [];
}

export async function getStats(): Promise<StatDoc[]> {
  const data = await sanityFetch<StatDoc[]>({ query: STATS_QUERY });
  return data ?? [];
}

export async function getProcessSteps(): Promise<ProcessStepDoc[]> {
  const data = await sanityFetch<ProcessStepDoc[]>({ query: PROCESS_STEPS_QUERY });
  return data ?? [];
}

export async function getGalleryPhotos(): Promise<GalleryPhotoDoc[]> {
  const raw = await sanityFetch<
    ({ image?: unknown; caption: string; tag: string; size: GalleryPhotoDoc["size"]; order?: number } & {
      image?: { alt?: string };
    })[]
  >({ query: GALLERY_QUERY });
  if (!raw) return [];
  return raw
    .filter((p) => p.image)
    .map((p) => ({
      imageUrl: urlFor(p.image as never)
        .width(1400)
        .auto("format")
        .url(),
      alt: (p.image as { alt?: string })?.alt ?? p.caption,
      caption: p.caption,
      tag: p.tag,
      size: p.size ?? "small",
      order: p.order,
    }));
}

export async function getTrustReasons(): Promise<TrustReasonDoc[]> {
  const data = await sanityFetch<TrustReasonDoc[]>({ query: TRUST_REASONS_QUERY });
  return data ?? [];
}

export async function getLegalPage(slug: string): Promise<LegalPageDoc | null> {
  return sanityFetch<LegalPageDoc>({
    query: LEGAL_PAGE_QUERY,
    params: { slug },
  });
}
