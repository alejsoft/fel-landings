import { config } from "@/config";
import FadeIn from "./FadeIn";

export default function Compatibility() {
  return (
    <section className="px-6 sm:px-8 py-32 md:py-48">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-widest uppercase text-muted mb-6">
            Compatibilidad
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mb-20">
            Tu versión de {config.erp} es compatible.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {config.compatibility.map((item) => (
              <div
                key={item.version}
                className="py-8 px-6 rounded-2xl hover:bg-surface transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{item.version}</h3>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
