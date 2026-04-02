import type { Metadata } from "next";
import { config } from "@/config";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${config.product}`,
  description:
    "Política de privacidad de HaaB Technologies S.A. Conoce cómo recopilamos, usamos y protegemos tu información personal.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://${config.domain}/privacy`,
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

export default function PrivacyPolicy() {
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
          Política de Privacidad
        </h1>

        <p className="text-muted text-sm mb-12 leading-relaxed">
          Nosotros en{" "}
          <span className="font-semibold text-foreground">HaaB Technologies, S.A.</span>{" "}
          (junto con nuestros afiliados, &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo; o &ldquo;nos&rdquo;) respetamos su
          privacidad y estamos firmemente comprometidos a mantener segura cualquier información que obtengamos de usted o
          sobre usted. Esta Política de Privacidad describe nuestras prácticas con respecto a la Información Personal que
          recopilamos de usted o sobre usted cuando utiliza nuestro sitio web, aplicaciones y servicios (colectivamente,
          &ldquo;Servicios&rdquo;). Nuestra plataforma ofrece herramientas de automatización para procesos comerciales y contables.
          El control de los datos ingresados en la plataforma permanece siempre con nuestros usuarios. HaaB Technologies
          actúa como procesador de datos bajo la autorización y dirección de nuestros usuarios, quienes son los
          propietarios y controladores legítimos de dicha información.
        </p>

        <div className="space-y-10">
          <Section number="1" title="Marco Legal y Cumplimiento">
            <p>
              Esta política cumple con las leyes de protección de datos aplicables en cada jurisdicción donde operamos,
              incluyendo el Reglamento General de Protección de Datos (RGPD/GDPR) de la Unión Europea, y las leyes de
              protección de datos de Latinoamérica.
            </p>
          </Section>

          <Section number="2" title="Información personal que recopilamos">
            <p>Recopilamos información personal relacionada con usted de la siguiente manera:</p>
            <p className="mt-3">
              <strong>Información de la cuenta:</strong> nombre, información de contacto, credenciales de la cuenta,
              información de tarjeta de pago e historial de transacciones.
            </p>
            <p className="mt-3">
              <strong>Información comercial y operativa:</strong> datos necesarios para las funcionalidades de automatización
              de procesos, incluyendo información transaccional, datos de inventario y registros contables.
            </p>
            <p className="mt-3">
              <strong>Información de comunicación:</strong> nombre, información de contacto y contenido de mensajes.
            </p>
            <p className="mt-3">
              <strong>Información técnica:</strong> datos de registro (IP, navegador, fecha/hora), datos de uso,
              información del dispositivo y cookies.
            </p>
          </Section>

          <Section number="3" title="Transferencias Internacionales de Datos">
            <p>
              Nuestros servidores están ubicados en centros de datos certificados (AWS US-East-1, US-West-2, EU-Central-1).
              Las transferencias se realizan bajo cláusulas contractuales estándar aprobadas por la Comisión Europea.
            </p>
          </Section>

          <Section number="4" title="Cómo utilizamos la información personal">
            <p>
              Utilizamos información personal para: proporcionar, administrar y mejorar los Servicios; comunicarnos con usted;
              prevenir fraudes y actividades delictivas; cumplir con obligaciones legales. El procesamiento de datos se realiza
              únicamente bajo la autorización explícita de nuestros usuarios.
            </p>
          </Section>

          <Section number="5" title="Divulgación de información personal">
            <p>
              <strong>Proveedores de servicios:</strong> alojamiento, servicios en la nube, comunicaciones y analítica web.
            </p>
            <p className="mt-3">
              <strong>Transferencias comerciales:</strong> en caso de transacciones estratégicas o reorganización.
            </p>
            <p className="mt-3">
              <strong>Requisitos legales:</strong> cuando lo exija la ley o para proteger derechos y seguridad.
            </p>
          </Section>

          <Section number="6" title="Tiempo de Retención de Datos">
            <p>
              Conservamos información durante el tiempo necesario según los fines y requisitos legales. En caso de terminación,
              conservaremos datos por 90 días adicionales para exportación. Después, se eliminan de forma permanente.
            </p>
          </Section>

          <Section number="7" title="Sus Derechos ARCO">
            <ul className="mt-3 space-y-1.5">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos y cómo los procesamos.</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o desactualizados.</li>
              <li><strong>Cancelación:</strong> Solicitar eliminación cuando ya no sean necesarios.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento para fines específicos.</li>
              <li><strong>Portabilidad:</strong> Obtener copia en formato estructurado y legible.</li>
              <li><strong>Revocación:</strong> Retirar consentimiento en cualquier momento.</li>
            </ul>
          </Section>

          <Section number="8" title="Usuarios empresariales">
            <p>
              HaaB Technologies actúa como procesador de datos bajo su autorización. Usted es el controlador y propietario
              legítimo de toda la información procesada. No vendemos ni compartimos información personal para publicidad.
            </p>
          </Section>

          <Section number="9" title="Seguridad y protección">
            <ul className="mt-3 space-y-1.5">
              <li><strong>Encriptación:</strong> TLS 1.2+ en tránsito, AES-256 en reposo.</li>
              <li><strong>Segregación:</strong> Separación lógica por cliente en entornos multi-tenant.</li>
              <li><strong>Control de acceso:</strong> AWS Cognito con roles y permisos granulares.</li>
              <li><strong>Monitoreo:</strong> Logs de auditoría disponibles durante 90 días.</li>
              <li><strong>Infraestructura:</strong> AWS con certificaciones ISO 27001 y SOC 2.</li>
            </ul>
            <p className="mt-3">
              En caso de brecha de seguridad, le notificaremos dentro de 24 horas desde la detección.
            </p>
          </Section>

          <Section number="10" title="Cambios en la política de privacidad">
            <p>
              Podemos actualizar esta Política de Privacidad. Cuando lo hagamos, publicaremos una versión actualizada
              en esta página.
            </p>
          </Section>

          <Section number="11" title="Cómo contactarnos">
            <p>
              Comuníquese con nosotros si tiene alguna pregunta a través de{" "}
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
