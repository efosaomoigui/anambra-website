// lib/api/endpoints/graphql/homepage.ts
import { gql } from "@apollo/client";

export const homepageQueries = {
  root: gql`
    query FetchHomepage {
      homepage {
        title
        description
        bannerImage {
          url
        }
      }
    }
  `,
};
