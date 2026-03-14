"use client";

import { config } from "@/config";
import FadeIn from "./FadeIn";

export default function FAQ() {
  return (
    <section className="px-6 sm:px-8 py-32 md:py-48">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Preguntas frecuentes
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="divide-y divide-muted/20">
            {config.faq.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
                  {item.q}
                  <svg
                    className="w-5 h-5 text-muted transition-transform duration-300 group-open:rotate-45 shrink-0 ml-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <p className="mt-4 text-muted leading-relaxed pr-12">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
