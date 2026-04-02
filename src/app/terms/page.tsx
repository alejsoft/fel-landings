import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/config";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: `Condiciones de Uso | ${config.product}`,
  description:
    "Términos y condiciones de uso de los servicios de HaaB Technologies S.A. Automatización de facturación electrónica SAT Guatemala.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://${config.domain}/terms`,
  },
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border-subtle pt-8">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-xs text-accent font-bold">{number}.</span>
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsOfService() {
  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 sm:w-12 bg-accent" />
          <span className="text-xs tracking-widest uppercase text-muted">
            Legal
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6">
          Condiciones de Uso
        </h1>

        <p className="text-muted text-sm mb-12 leading-relaxed">
          <span className="font-semibold text-foreground">Bienvenido a {config.domain}</span>{" "}
          (junto con nuestros afiliados, &ldquo;HaaB&rdquo;, &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;).
          Estos Términos de Uso (&ldquo;Términos&rdquo;) rigen el acceso y uso de nuestros servicios de software
          como servicio (SaaS), incluyendo nuestra plataforma de automatización de facturación electrónica,
          aplicaciones web, APIs y servicios relacionados (colectivamente, los &ldquo;Servicios&rdquo;).
          Al acceder o utilizar nuestros Servicios, usted acepta estar sujeto a estos Términos.
          Si no está de acuerdo con estos Términos, no utilice nuestros Servicios.
          Para información sobre cómo recopilamos y procesamos sus datos personales, consulte nuestra{" "}
          <Link href="/privacy" className="text-accent hover:underline">Política de Privacidad</Link>.
        </p>

        <div className="space-y-10">
          <Section number="1" title="Marco Legal y Cumplimiento">
            <p>
              Estos términos se rigen por las leyes de Guatemala, el Código de Comercio de Guatemala, las leyes de
              protección al consumidor aplicables (DIACO), y las regulaciones fiscales de la autoridad tributaria
              correspondiente.
            </p>
          </Section>

          <Section number="2" title="Cumplimiento Anti-Corrupción y Prevención de Lavado de Dinero">
            <p>
              Usted declara y garantiza que cumple con todas las leyes anti-corrupción aplicables, incluyendo la
              Ley contra la Corrupción de Guatemala, la Ley de Prevención de Lavado de Dinero y Financiamiento al
              Terrorismo de Guatemala. No utilizará nuestros servicios para actividades ilegales, lavado de dinero,
              financiamiento al terrorismo, o cualquier actividad prohibida.
            </p>
          </Section>

          <Section number="3" title="Registro y Acceso">
            <p>
              Debe tener al menos la mayoría de edad según su jurisdicción para utilizar los Servicios. Si utiliza
              los Servicios en nombre de otra persona o entidad, debe tener la autoridad legal para aceptar estos
              Términos en su nombre.
            </p>
            <p className="mt-3">
              Debe proporcionar información precisa y completa para registrarse. No puede compartir credenciales con
              personas fuera de su organización y es responsable de todas las actividades con sus credenciales.
            </p>
          </Section>

          <Section number="4" title="Requisitos de Uso">
            <p>
              <strong>(a) Uso de los Servicios.</strong> Puede acceder a los Servicios con un derecho no exclusivo de
              uso de acuerdo con estos Términos. Nosotros y nuestros afiliados poseemos todos los derechos sobre los
              Servicios.
            </p>
            <p className="mt-3">
              <strong>(b) Restricciones.</strong> No puede utilizar los Servicios de manera que infrinja derechos de
              terceros; desensamblar o descompilar el código fuente; utilizar los resultados para desarrollar productos
              competidores; o extraer datos mediante scraping.
            </p>
          </Section>

          <Section number="5" title="Facturación Electrónica y Cumplimiento Fiscal">
            <p>
              Cumplimos con los requisitos de facturación electrónica de Guatemala: Documentos Tributarios Electrónicos
              (DTE) ante la SAT. Nuestro sistema genera automáticamente los documentos fiscales requeridos y los
              transmite a las autoridades dentro de los plazos establecidos.
            </p>
          </Section>

          <Section number="6" title="Tarifas y Pagos">
            <p>
              <strong>(a) Tarifas.</strong> Pagará todas las tarifas cargadas a su cuenta según los precios publicados.
              Las tarifas se cobran en GTQ o USD.
            </p>
            <p className="mt-3">
              <strong>(b) Impuestos.</strong> Usted es responsable de los impuestos aplicables (IVA 12% Guatemala).
            </p>
            <p className="mt-3">
              <strong>(c) Cambios de precios.</strong> Los aumentos se notificarán con 30 días de antelación.
            </p>
          </Section>

          <Section number="7" title="Contenido">
            <p>
              <strong>(a) Su contenido.</strong> Usted es propietario de toda la información que proporciona (Entrada)
              y los resultados generados (Salida). No utilizamos su Contenido para desarrollar o mejorar nuestros
              Servicios.
            </p>
            <p className="mt-3">
              <strong>(b) Precisión.</strong> Debe evaluar la precisión de cualquier resultado según corresponda,
              incluso mediante revisión humana.
            </p>
          </Section>

          <Section number="8" title="Confidencialidad y Seguridad">
            <p>
              <strong>(a) Confidencialidad.</strong> Puede utilizar Información Confidencial solo según sea necesario
              para los Servicios. No puede revelarla a terceros.
            </p>
            <p className="mt-3">
              <strong>(b) Seguridad.</strong> Debe implementar medidas razonables para asegurar su acceso a los
              Servicios. Si descubre vulnerabilidades, comuníquese de inmediato.
            </p>
          </Section>

          <Section number="9" title="Plazo y Terminación">
            <p>
              Puede rescindir en cualquier momento interrumpiendo el uso. Podemos rescindir con 30 días de aviso o
              inmediatamente por incumplimiento sustancial. Tras terminación, sus datos se conservan 90 días para
              exportación, luego se eliminan permanentemente.
            </p>
          </Section>

          <Section number="10" title="Limitaciones de Responsabilidad">
            <p>
              Nuestra responsabilidad está limitada al monto pagado en los últimos 12 meses (mínimo Q.1,000). Estas
              limitaciones no aplican donde estén prohibidas por ley. Respetamos todos los derechos del consumidor
              establecidos por DIACO y la Ley de Protección al Consumidor y Usuario de Guatemala.
            </p>
          </Section>

          <Section number="11" title="Resolución de Disputas">
            <p>
              Mediación a través de DIACO, luego tribunales civiles de Guatemala. Arbitraje opcional bajo reglas del
              Centro de Mediación y Arbitraje de Guatemala. Antes de iniciar procedimientos, contacte con descripción
              detallada (plazo de resolución: 30 días calendario).
            </p>
          </Section>

          <Section number="12" title="Términos Generales">
            <p>
              <strong>(a) Modificaciones.</strong> Cambios materiales notificados con 30 días de antelación.
            </p>
            <p className="mt-3">
              <strong>(b) Contacto Legal.</strong> HaaB Technologies, S.A., Guatemala, Centroamérica.
            </p>
            <p className="mt-3">
              <strong>(c) Acuerdo Completo.</strong> Este documento, junto con nuestra{" "}
              <Link href="/privacy" className="text-accent hover:underline">Política de Privacidad</Link>,
              constituye el acuerdo completo entre las partes.
            </p>
          </Section>

          <Section number="13" title="Contacto">
            <p>
              Para consultas sobre estos Términos, comuníquese a través de{" "}
              <WhatsAppLink className="text-accent hover:underline inline">
                nuestro canal de contacto
              </WhatsAppLink>
              .
            </p>
            <p className="mt-3 text-xs text-muted">
              Actualizado el 11 de marzo de 2026.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
