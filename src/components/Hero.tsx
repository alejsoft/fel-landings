import { config } from "@/config";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sm tracking-widest uppercase text-muted mb-8">
          {config.product}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
          {config.hero.headline}
          <br />
          <span className="text-accent">{config.hero.highlight}</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
          {config.hero.subhead}
        </p>

        <div className="mt-12">
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
    </section>
  );
}
