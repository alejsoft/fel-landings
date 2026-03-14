import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Compatibility from "@/components/Compatibility";
import BigNumber from "@/components/BigNumber";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { config } from "@/config";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `HaaB ${config.product}`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud (AWS)",
  description: config.seo.description,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "GTQ",
  },
  featureList: config.schema.featureList,
  provider: {
    "@type": "Organization",
    name: "HaaB Technologies, S.A.",
    url: `https://${config.domain}`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: config.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};


export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Problem />
      <HowItWorks />
      <Compatibility />
      <BigNumber />
      <FAQ />
      <CTA />
    </main>
  );
}
