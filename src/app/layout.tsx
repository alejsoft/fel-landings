import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { config } from "@/config";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppLink from "@/components/WhatsAppLink";
import WhatsAppProvider from "@/components/WhatsAppProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${config.domain}`),
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords,
  authors: [{ name: "HaaB Technologies, S.A.", url: "https://haab.gt" }],
  publisher: "HaaB Technologies, S.A.",
  alternates: {
    canonical: `https://${config.domain}`,
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: `https://${config.domain}`,
    siteName: "HaaB Technologies, S.A.",
    title: config.seo.title,
    description: config.seo.description,
    images: [
      {
        url: `https://${config.domain}${config.ogImage}`,
        width: 1200,
        height: 630,
        alt: config.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [`https://${config.domain}${config.ogImage}`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-GT"
      suppressHydrationWarning
      style={{ "--accent-light": config.accentColor, "--accent-dark": config.accentColorDark } as React.CSSProperties}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {/* Minimal header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 h-16 flex items-center justify-between backdrop-blur-xl bg-background/80">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/haab-light.webp"
              alt="HaaB"
              width={24}
              height={24}
              className="rounded-sm dark:hidden"
            />
            <Image
              src="/haab-dark.webp"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
              className="rounded-sm hidden dark:block"
            />
            <span className="text-sm font-semibold tracking-tight">
              {config.product}
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/rpa-vs-integracion"
              className="hidden sm:block text-sm text-muted hover:text-foreground transition-colors"
            >
              RPA vs API
            </a>
            <ThemeToggle />
            <WhatsAppLink className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Solicitar Demo
            </WhatsAppLink>
          </div>
        </header>

        <WhatsAppProvider>
          {children}
        </WhatsAppProvider>

        {/* Footer */}
        <footer className="border-t border-border-subtle px-6 sm:px-8 py-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm text-muted">
            <a href="/articulos" className="hover:text-foreground transition-colors px-3">Artículos</a>
            <span className="text-border-subtle">|</span>
            <a href="/rpa-vs-integracion" className="hover:text-foreground transition-colors px-3">RPA vs Integración</a>
            <span className="text-border-subtle">|</span>
            <a href="/privacy" className="hover:text-foreground transition-colors px-3">Política de Privacidad</a>
            <span className="text-border-subtle">|</span>
            <a href="/terms" className="hover:text-foreground transition-colors px-3">Términos de Uso</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
