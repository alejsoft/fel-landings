export type ProductConfig = {
  product: string;
  domain: string;
  erp: string;
  accentColor: string;
  ogImage: string;
  hero: {
    headline: string;
    highlight: string;
    subhead: string;
  };
  problems: Array<{
    title: string;
    desc: string;
  }>;
  steps: Array<{
    n: string;
    title: string;
    desc: string;
  }>;
  compatibility: Array<{
    version: string;
    detail: string;
  }>;
  bigNumbers: Array<{
    number: string;
    label: string;
  }>;
  cta: {
    headline: string;
    subhead: string;
    whatsappMessage: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  schema: {
    featureList: string[];
  };
  faq: Array<{
    q: string;
    a: string;
  }>;
};
