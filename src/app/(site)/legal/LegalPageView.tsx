import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { LegalPageDoc } from "@/sanity/queries";
import type { DefaultLegalPage } from "./defaults";

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display font-semibold text-white text-lg sm:text-xl mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 text-slate-300 mb-6">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-400 hover:text-accent-300 underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

function formatDate(input?: string): string | null {
  if (!input) return null;
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  fromSanity: LegalPageDoc | null;
  fallback: DefaultLegalPage;
  fallbackEffectiveDate: string;
}

export function LegalPageView({ fromSanity, fallback, fallbackEffectiveDate }: Props) {
  const title = fromSanity?.title ?? fallback.title;
  const summary = fromSanity?.summary ?? fallback.summary;
  const effectiveDate =
    formatDate(fromSanity?.effectiveDate) ?? fallbackEffectiveDate;

  return (
    <div className="pt-24 pb-24 bg-black-pure min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="text-accent-500 text-xs font-mono tracking-widest uppercase mb-4">
            Effective {effectiveDate}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">{summary}</p>
        </div>

        <div className="line-accent mb-12" />

        {fromSanity?.body && fromSanity.body.length > 0 ? (
          <div className="prose-legal">
            <PortableText
              value={fromSanity.body as never[]}
              components={portableTextComponents}
            />
          </div>
        ) : (
          <div className="prose-legal">
            {fallback.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-12 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-slate-300 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6">
                    {section.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
