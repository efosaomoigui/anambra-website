import { gql } from "@apollo/client";

export const MdaQueries = {
  root: gql`
    query FetchMdaCategories {
      mdas {
        documentId
        name
        Slug
        Mandate
        Functions
        createdAt
        updatedAt
        publishedAt
      }
    }
  `,
  rootDeep: gql`
      query Mdas {
        mdas {
          documentId
          name
          Slug
          Mandate
          Functions
          departments_connection {
            nodes {
              documentId
              name
              Slug
              Description
              createdAt
              updatedAt
              publishedAt
            }
          }
          departments {
            documentId
            name
            Slug
            Description
            mdas_connection {
              nodes {
                documentId
                name
                Slug
                Mandate
                Functions
                createdAt
                updatedAt
                publishedAt
              }
            }
            mdas {
              documentId
              name
              Slug
              Mandate
              Functions
              createdAt
              updatedAt
              publishedAt
            }
            createdAt
            updatedAt
            publishedAt
          }
          Officials {
            id
            Contact {
              id
              image {
                id
                file {
                  documentId
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider
                  provider_metadata
                  related {
                    ... on ComponentSharedSlider {
                      id
                    }
                    ... on ComponentSharedSeo {
                      id
                      metaTitle
                      metaDescription
                    }
                    ... on ComponentSharedRichText {
                      id
                      body
                    }
                    ... on ComponentSharedQuote {
                      id
                      title
                      body
                    }
                    ... on ComponentSharedOfficials {
                      id
                    }
                    ... on ComponentSharedMedia {
                      id
                    }
                    ... on ComponentSharedContact {
                      id
                    }
                    ... on ComponentHomepageStats {
                      id
                      label
                      value
                    }
                    ... on ComponentHomepageSearchSection {
                      id
                      search_placeholder
                    }
                    ... on ComponentHomepageNewsArticlesGrid {
                      id
                      news_selection_criteria
                    }
                    ... on ComponentHomepageLensSection {
                      id
                      lens_section_title
                      lens_section_description
                      lens_section_link
                    }
                    ... on ComponentHomepageIllustrationSection {
                      id
                    }
                    ... on ComponentHomepageFooterSection {
                      id

                      title
                      link
                    }
                    ... on ComponentHomepageFooterLinks {
                      id
                    }
                    ... on ComponentHomepageFaqSection {
                      id
                      faq_selection_criteria
                    }
                  }
                  ... on ComponentHomepageEaseBusiness {
                    id
                    ease_business_title
                    ease_business_description
                    ease_business_link
                  }
                  ... on ComponentHomepageBannerSection {
                    id
                    title
                    subtitle
                  }
                  ... on UploadFile {
                    documentId
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on I18NLocale {
                    documentId
                    name
                    code
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on ReviewWorkflowsWorkflow {
                    documentId
                    name

                    contentTypes
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on ReviewWorkflowsWorkflowStage {
                    documentId
                    name
                    color

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on UsersPermissionsPermission {
                    documentId
                    action

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on UsersPermissionsRole {
                    documentId
                    name
                    description
                    type

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on UsersPermissionsUser {
                    documentId
                    username
                    email
                    provider
                    confirmed
                    blocked
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Strapi5SitemapPluginStrapi5SitemapPluginContentType {
                    documentId
                    type
                    langcode
                    pattern
                    priority
                    frequency
                    lastModified
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Strapi5SitemapPluginStrapi5SitemapPluginContentTypeSingleUrl {
                    documentId
                    slug
                    priority
                    frequency
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Strapi5SitemapPluginStrapi5SitemapPluginOption {
                    documentId
                    baseUrl
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on EmailDesigner5EmailDesignerTemplate {
                    documentId
                    templateReferenceId
                    design
                    name
                    subject
                    bodyHtml
                    bodyText
                    tags
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on About {
                    documentId
                    title

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Article {
                    documentId
                    title
                    description
                    slug

                    Article_publish_date
                    is_featured
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Author {
                    documentId
                    name

                    email
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Category {
                    documentId
                    name
                    slug

                    description
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Department {
                    documentId
                    name
                    Slug
                    Description
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Event {
                    documentId
                    title
                    date
                    time
                    location
                    description
                    link
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Faq {
                    documentId
                    question

                    faq_Published_Date

                    FaqAnswer
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on FaqCategory {
                    documentId
                    Name
                    Slug
                    Description
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Global {
                    documentId
                    siteName

                    siteDescription

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Homepage {
                    documentId

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Mda {
                    documentId
                    name
                    Slug
                    Mandate
                    Functions
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Notice {
                    documentId
                    title
                    description
                    date
                    URL
                    Homepage
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Page {
                    documentId
                    Title
                    Slug
                    Content

                    Published_Time
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on PublicAnnouncement {
                    documentId
                    title
                    content
                    priority
                    announcement_time
                    createdAt
                    updatedAt
                    publishedAt
                    locale
                  }
                  ... on SearchKeyword {
                    documentId
                    keyword

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Service {
                    documentId
                    Name
                    Description
                    ServicesDetails

                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on ServiceCategory {
                    documentId
                    Name
                    Slug
                    Description
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on ServicesDetail {
                    documentId
                    Detail
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on Tag {
                    documentId
                    Name
                    Description
                    Slug
                    createdAt
                    updatedAt
                    publishedAt
                  }
                  ... on UserFeedback {
                    documentId
                    name
                    email
                    message
                    feedback_status
                    createdAt
                    updatedAt
                    publishedAt
                  }
                }
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
      }
  `,
  byId: gql`
    query FetchCategoryById($documentId: ID!) {
      mda(documentId: $documentId) {
        documentId
        name
        Slug
        Mandate
        Functions
        createdAt
        updatedAt
        publishedAt
      }
    }
  `,
};
