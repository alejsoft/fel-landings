import { config } from "@/config";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="px-6 sm:px-8 py-32 md:py-48 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {config.cta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-12 max-w-xl mx-auto">
            {config.cta.subhead}
          </p>
          <a
            href={`https://wa.me/50259819812?text=${encodeURIComponent(config.cta.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            Escribir por WhatsApp
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <p className="mt-6 text-sm text-muted">
            Infraestructura AWS
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
