import { config } from "@/config";
import FadeIn from "./FadeIn";

export default function BigNumber() {
  return (
    <section className="px-6 sm:px-8 py-32 md:py-48 bg-surface">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12">
            {config.bigNumbers.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <p className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tighter text-accent">
                  {item.number}
                </p>
                <p className="mt-4 text-xl sm:text-2xl text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
