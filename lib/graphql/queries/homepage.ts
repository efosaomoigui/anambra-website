import { gql } from "@apollo/client";

export const HomepageQueries = {
  root: gql`
    query Homepage {
      homepage {
        documentId
        Banner {
          id
          title
          subtitle
          banner_image_connection {
            nodes {
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
          }
          banner_image {
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

                files {
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
              }
              ... on ComponentSharedSeo {
                id
                metaTitle
                metaDescription
                shareImage {
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
                Contact {
                  id
                }
              }
              ... on ComponentSharedMedia {
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
                  createdAt
                  updatedAt
                  publishedAt
                }
              }
              ... on ComponentSharedContact {
                id
                image {
                  id
                }
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
                stages_connection {
                  nodes {
                    documentId
                    name
                    color
                    createdAt
                    updatedAt
                    publishedAt
                  }
                }
                stages {
                  documentId
                  name
                  color
                  createdAt
                  updatedAt
                  publishedAt
                }
                stageRequiredToPublish {
                  documentId
                  name
                  color
                  createdAt
                  updatedAt
                  publishedAt
                }
                contentTypes
                createdAt
                updatedAt
                publishedAt
              }
              ... on ReviewWorkflowsWorkflowStage {
                documentId
                name
                color
                workflow {
                  documentId
                  name
                  contentTypes
                  createdAt
                  updatedAt
                  publishedAt
                }
                createdAt
                updatedAt
                publishedAt
              }
              ... on UsersPermissionsPermission {
                documentId
                action
                role {
                  documentId
                  name
                  description
                  type
                  createdAt
                  updatedAt
                  publishedAt
                }
                createdAt
                updatedAt
                publishedAt
              }
              ... on UsersPermissionsRole {
                documentId
                name
                description
                type
                permissions_connection {
                  nodes {
                    documentId
                    action
                    createdAt
                    updatedAt
                    publishedAt
                  }
                }
                permissions {
                  documentId
                  action
                  createdAt
                  updatedAt
                  publishedAt
                }
                users_connection {
                  nodes {
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
                }
                users {
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
                avatar {
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
                favicon {
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
                siteDescription
                defaultSeo {
                  id
                  metaTitle
                  metaDescription
                }
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
                  createdAt
                  updatedAt
                  publishedAt
                }
                Officials {
                  id
                }
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
                SEO {
                  id
                  metaTitle
                  metaDescription
                }
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
                localizations_connection {
                  nodes {
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
                }
                localizations {
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
          Statistics {
            id
            label
            value
          }
        }
        SearchSection {
          id
          search_placeholder
          search_keywords_connection {
            nodes {
              documentId
              keyword
              createdAt
              updatedAt
              publishedAt
            }
          }
          search_keywords {
            documentId
            keyword
            articles_connection {
              nodes {
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
            }
            articles {
              documentId
              title
              description
              slug
              cover {
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
              category {
                documentId
                name
                slug
                description
                createdAt
                updatedAt
                publishedAt
              }
              blocks {
                ... on Error {
                  code
                  message
                }
              }
              Article_publish_date
              is_featured
              createdAt
              updatedAt
              publishedAt
            }
            services_connection {
              nodes {
                documentId
                Name
                Description
                ServicesDetails
                createdAt
                updatedAt
                publishedAt
              }
            }
            services {
              documentId
              Name
              Description
              ServicesDetails
              service_category {
                documentId
                Name
                Slug
                Description
                createdAt
                updatedAt
                publishedAt
              }
              createdAt
              updatedAt
              publishedAt
            }
            createdAt
            updatedAt
            publishedAt
          }
        }
        IllustrationSection {
          id
          illustration_image {
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

          illustration_animation {
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
        }
        Lens_Ease_Section {
          id
          lens_section_title
          lens_section_description
          lens_section_link
        }
        News_Articles_Grid {
          id
          news_selection_criteria
          tags_connection {
            nodes {
              documentId
              Name
              Description
              Slug
              createdAt
              updatedAt
              publishedAt
            }
          }
          tags {
            documentId
            Name
            Description
            Slug
            createdAt
            updatedAt
            publishedAt
          }
          selected_category_connection {
            nodes {
              documentId
              name
              slug
              description
              createdAt
              updatedAt
              publishedAt
            }
          }
          selected_category {
            documentId
            name
            slug
            description
            createdAt
            updatedAt
            publishedAt
          }
        }
        FAQ_Section {
          id
          faq_selection_criteria
          selected_faq_category_connection {
            nodes {
              documentId
              Name
              Slug
              Description
              createdAt
              updatedAt
              publishedAt
            }
          }
          selected_faq_category {
            documentId
            Name
            Slug
            Description
            createdAt
            updatedAt
            publishedAt
          }
          faqs_connection {
            nodes {
              documentId
              question
              faq_Published_Date
              FaqAnswer
              createdAt
              updatedAt
              publishedAt
            }
          }
          faqs {
            documentId
            question
            faq_category {
              documentId
              Name
              Slug
              Description
              createdAt
              updatedAt
              publishedAt
            }
            faq_Published_Date
            search_keyword {
              documentId
              keyword
              createdAt
              updatedAt
              publishedAt
            }
            FaqAnswer
            createdAt
            updatedAt
            publishedAt
          }
        }
        FoterSection {
          id
          FooterLinks {
            id
          }
          title
          link
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  `,
};
