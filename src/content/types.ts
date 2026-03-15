export type ArticleSection = {
  heading: string;
  body: string;
};

export type Article = {
  slug: string;
  product: string;
  title: string;
  description: string;
  keywords: string[];
  publishedDate: string;
  sections: ArticleSection[];
};
