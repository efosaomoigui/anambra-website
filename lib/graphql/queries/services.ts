import { gql } from "@apollo/client";

export const serviceQueries = {
  all: gql`
    query GetAllServices {
      services {
        documentId
        Name
        Description
        ServicesDetails
        createdAt
        updatedAt
        publishedAt
      }
    }
  // `,
  // byId: gql`
  //   query GetServiceById($id: ID!) {
  //     service(id: $id) {
  //       Name
  //       Description
  //       ServicesDetails
  //       createdAt
  //       updatedAt
  //       publishedAt
  //       Slug
  //     }
  //   }
  // `,
};
