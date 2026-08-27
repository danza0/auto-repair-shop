/**
 * Fallback copy for /privacy and /terms — used when Sanity isn't seeded
 * yet. Once the Legal Pages docs exist in Sanity, they override this.
 *
 * These templates are drafted for SmartCare Auto Repair (Spanaway, WA) —
 * a small local auto repair shop that collects PII via a Calendly booking
 * form and uses Google Maps + Vercel hosting. They cover the usual bases
 * (CCPA/CalOPPA, WA state, third-party disclosures, contact) but are NOT
 * legal advice. Have a lawyer review before shipping high-stakes changes.
 */
export const DEFAULT_EFFECTIVE_DATE = "August 27, 2026";

export const DEFAULT_BUSINESS = {
  name: "SmartCare Auto Repair",
  address: "108 163rd St S, Spanaway, WA 98387",
  email: "smartcareautorepair@gmail.com",
  phone: "(253) 214-3774",
};

export interface DefaultLegalSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface DefaultLegalPage {
  title: string;
  summary: string;
  sections: DefaultLegalSection[];
}

const b = DEFAULT_BUSINESS;

export const DEFAULT_PRIVACY: DefaultLegalPage = {
  title: "Privacy Policy",
  summary: `How ${b.name} collects, uses, and protects the information you share when you contact us or book an appointment.`,
  sections: [
    {
      paragraphs: [
        `${b.name} ("we", "us", "our") operates the website at auto-repair-shop-eta.vercel.app (the "Site"). This policy explains what personal information we collect, how we use it, and the choices you have.`,
        `By using the Site or scheduling an appointment with us, you agree to this policy.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "When you contact us or book an appointment, we collect the information you choose to share with us, which typically includes:",
      ],
      bullets: [
        "Your name",
        "Your phone number",
        "Your email address",
        "Your vehicle details (year, make, model, mileage, VIN)",
        "A description of the service you need or the symptoms you're experiencing",
        "Preferred appointment time",
      ],
    },
    {
      paragraphs: [
        "We do not collect payment information through the Site. Payments are handled in person at our shop.",
        "We may also collect basic technical information automatically — such as your device type, browser, and pages visited — through our hosting provider's server logs. We do not use advertising cookies or third-party marketing trackers.",
      ],
    },
    {
      heading: "How we use your information",
      paragraphs: ["We use the information you provide to:"],
      bullets: [
        "Confirm your appointment and communicate with you about the service",
        "Diagnose your vehicle and prepare accurate repair estimates",
        "Keep records of past services performed on your vehicle",
        "Send occasional reminders about maintenance or follow-up service",
        "Comply with tax, warranty, and legal recordkeeping requirements",
      ],
    },
    {
      heading: "Third-party services we use",
      paragraphs: [
        "We rely on a small number of trusted third parties to run the Site and manage appointments. Each has its own privacy policy that governs its handling of your data:",
      ],
      bullets: [
        "Calendly — handles the appointment booking form and calendar. Data you enter into the booking form is stored on Calendly's servers.",
        "Google Maps — provides the map and directions link. Google may collect information about your interaction with the map.",
        "Vercel — hosts the website and processes basic request logs.",
      ],
    },
    {
      heading: "How we share your information",
      paragraphs: [
        "We do not sell your personal information. We do not share it with advertisers or data brokers.",
        "We may share limited information with parts suppliers, sublet vendors (for example a tire shop or alignment specialist), or your insurance company — but only as needed to complete the service you asked us to perform.",
        "We may disclose information if required by law, subpoena, or court order, or to protect the rights, property, or safety of our customers, employees, or others.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep service records for as long as needed to support your vehicle's warranty and to comply with tax and business recordkeeping rules — typically at least seven (7) years from the date of the last service. Booking-form entries that don't result in a service appointment are deleted within one year.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You can contact us at any time to:",
      ],
      bullets: [
        "Ask what personal information we have about you",
        "Ask us to correct information that is inaccurate",
        "Ask us to delete your information (subject to legal recordkeeping requirements)",
        "Ask us to stop contacting you for non-appointment reasons",
      ],
      // Second paragraphs block after bullets rendered as a separate section below.
    },
    {
      paragraphs: [
        "California residents have additional rights under the California Consumer Privacy Act (CCPA/CPRA), including the right to know what categories of information we collect, the right to request deletion, and the right not to be discriminated against for exercising these rights. To exercise any of these rights, email us at " + b.email + ".",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "The Site is intended for adults. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us and we will delete it.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We take reasonable measures to protect the information you share with us. No system is perfectly secure, but we limit access to your data to team members who need it to service your vehicle.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. When we do, we'll update the effective date at the top of this page. If the changes are significant, we'll let you know via the Site or by email.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        `Questions about this policy? Get in touch:`,
        `${b.name}`,
        `${b.address}`,
        `${b.phone}`,
        `${b.email}`,
      ],
    },
  ],
};

export const DEFAULT_TERMS: DefaultLegalPage = {
  title: "Terms of Service",
  summary: `The ground rules for using ${b.name}'s website and booking service with us.`,
  sections: [
    {
      paragraphs: [
        `Welcome to ${b.name} (the "Shop"). These Terms of Service ("Terms") govern your use of our website at auto-repair-shop-eta.vercel.app (the "Site") and your interactions with us through it. By using the Site or booking an appointment, you agree to these Terms.`,
      ],
    },
    {
      heading: "Using the Site",
      paragraphs: [
        "You may use the Site to learn about our services, contact us, and book appointments. You agree not to misuse the Site — for example, by scraping it in bulk, attempting to gain unauthorized access, or submitting false booking requests.",
      ],
    },
    {
      heading: "Appointments and estimates",
      paragraphs: [
        "The Site lets you request an appointment. A booking is a request, not a confirmation. We confirm your appointment within one business day.",
        "Any prices, times, or descriptions on the Site are general information — not a firm quote. Repair estimates are only final after we have inspected your vehicle and provided a written estimate. We will not begin non-emergency work without your approval.",
        "You are responsible for the accuracy of the information you provide about your vehicle. Incorrect information (wrong VIN, wrong make, wrong mileage) may result in delays or additional charges.",
      ],
    },
    {
      heading: "Payment",
      paragraphs: [
        "Payment is due when you pick up your vehicle. We accept the payment methods posted at our shop. If your vehicle is not picked up within a reasonable time after you are notified that work is complete, storage fees may apply, and we reserve any lien rights available to us under Washington law.",
      ],
    },
    {
      heading: "Warranty",
      paragraphs: [
        "We warrant our workmanship as described in the written repair order or invoice we provide when you pick up your vehicle. Parts warranties are set by the parts manufacturer. If you have a warranty question, contact us and we will do our best to make it right.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent allowed by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the Site or from services performed on your vehicle, except where required by Washington consumer protection laws. Nothing in these Terms limits any rights that cannot be waived under law.",
      ],
    },
    {
      heading: "Third-party links and tools",
      paragraphs: [
        "The Site may link to third-party tools (like Calendly for booking or Google Maps for directions). Those services have their own terms and privacy policies. We are not responsible for their content or practices.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The Site's design, logos, copy, and photos are owned by us or our licensors. You may not copy or reuse them without written permission, except for personal, non-commercial use (like screenshotting a service description to share with your family).",
      ],
    },
    {
      heading: "Accessibility",
      paragraphs: [
        "We aim to make the Site usable for everyone, including customers with disabilities. If you run into an accessibility problem, please email us at " + b.email + " and we'll do our best to address it and provide the information you need through another channel.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These Terms are governed by the laws of the State of Washington, without regard to conflict-of-law rules. Disputes will be resolved in the state or federal courts located in Pierce County, Washington.",
      ],
    },
    {
      heading: "Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time. When we do, we'll update the effective date at the top of the page. Your continued use of the Site after we post changes means you accept the updated Terms.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        `Questions about these Terms? Get in touch:`,
        `${b.name}`,
        `${b.address}`,
        `${b.phone}`,
        `${b.email}`,
      ],
    },
  ],
};
