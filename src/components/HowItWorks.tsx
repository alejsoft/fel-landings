import { config } from "@/config";
import FadeIn from "./FadeIn";

export default function HowItWorks() {
  return (
    <section className="px-6 sm:px-8 py-32 md:py-48 bg-surface">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-widest uppercase text-muted mb-6">
            Cómo funciona
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mb-20">
            4 pasos. Sin intervención humana.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 md:gap-8">
          {config.steps.map((step) => (
            <FadeIn key={step.n}>
              <p className="text-4xl font-semibold text-accent mb-6">
                {step.n}
              </p>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
