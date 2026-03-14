import { config } from "@/config";
import FadeIn from "./FadeIn";

export default function Problem() {
  return (
    <section className="px-6 sm:px-8 py-32 md:py-48">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-widest uppercase text-muted mb-6">
            El problema
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mb-20">
            Tu equipo no debería digitar facturas.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {config.problems.map((problem, i) => (
            <FadeIn key={problem.title} className={`delay-${(i + 1) * 100}`}>
              <p className="text-5xl font-semibold text-accent/20 mb-6">
                0{i + 1}
              </p>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted leading-relaxed">{problem.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
