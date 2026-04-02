import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { config } from "@/config";
import ThemeToggle from "@/components/ThemeToggle";
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
          <div className="flex items-center gap-3">
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
          </div>
          <ThemeToggle />
        </header>

        <WhatsAppProvider>
          {children}
        </WhatsAppProvider>

        {/* Minimal footer */}
        <footer className="px-6 sm:px-8 py-12 flex flex-col items-center gap-3">
          <a href="/articulos" className="text-sm text-muted hover:text-foreground transition-colors">
            Artículos
          </a>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} HaaB Technologies, S.A.
          </p>
        </footer>
      </body>
    </html>
  );
}
