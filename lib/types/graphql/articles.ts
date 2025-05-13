// types/graphql/article.d.ts
export interface Article {
  title: string;
  slug: string;
  description: string;
  Article_publish_date: string;
  is_featured: boolean;
  cover: {
    url: string;
  };
  category: {
    name: string;
  };
}
