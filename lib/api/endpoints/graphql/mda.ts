// lib/api/endpoints/graphql/mdas.ts
import { gql } from "@apollo/client";

export const mdaQueries = {
  all: gql`
    query FetchAllMDAs {
      mdas {
        name
        Slug
        Functions
        Mandate
        departments {
          name
          Slug
          Description
        }
      }
    }
  `,
  bySlug: gql`
    query FetchMDABySlug($slug: String!) {
      mdas(filters: { Slug: { eq: $slug } }) {
        name
        Functions
        Mandate
      }
    }
  `,
};
