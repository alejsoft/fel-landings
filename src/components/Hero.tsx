// src/components/Hero.tsx
"use client";

import dynamic from "next/dynamic";
import { config } from "@/config";

const FlujoFEL = dynamic(() => import("./FlujoFEL"), {
  ssr: false,
  loading: () => <div className="w-67.5 h-92 sm:w-76.5 sm:h-104.25 lg:w-90 lg:h-122.5" />,
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 pt-20 sm:pt-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-8">
          {/* Left column — Text */}
          <div className="flex-1 max-w-2xl">
            <p className="text-sm tracking-widest uppercase text-muted mb-4 sm:mb-8">
              {config.product}
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              {config.hero.headline}
              <br />
              <span className="text-accent">{config.hero.highlight}</span>
            </h1>

            <p className="mt-4 sm:mt-8 text-base sm:text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              {config.hero.subhead}
            </p>

            <div className="mt-6 sm:mt-12">
              <a
                href={`https://wa.me/50259819812?text=${encodeURIComponent(config.cta.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-3 text-accent hover:opacity-70 transition-opacity text-lg font-medium"
              >
                Ver demo
                <svg
                  width="20"
                  height="20"
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
            </div>
          </div>

          {/* Right column — Flow animation */}
          <div className="flex items-center justify-center flex-shrink-0">
            <div className="w-[270px] h-[368px] sm:w-[306px] sm:h-[417px] lg:w-[360px] lg:h-[490px]">
              <div className="scale-[0.75] sm:scale-[0.85] lg:scale-100 origin-top-left">
                <FlujoFEL />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
