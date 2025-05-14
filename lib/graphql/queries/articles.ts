// lib/api/endpoints/graphql/articles.ts
import { gql } from "@apollo/client";

export const articleQueries = {
  all: gql`
    query FetchAllArticles {
      articles {
        title
        slug
        description
        Article_publish_date
        is_featured
        cover {
          url
        }
        category {
          name
        }
      }
    }
  `,
  bySlug: gql`
    query FetchArticleBySlug($slug: String!) {
      articles(filters: { slug: { eq: $slug } }) {
        title
        description
        Article_publish_date
      }
    }
  `,
};
