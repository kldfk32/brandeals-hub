import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        // General pages (static URLs)
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown", required: false }
          ]
        },

        // Promo Deals Listing Pages
        {
          name: "PromoPage",
          type: "page",
          urlPath: "/deals/{slug}",
          filePath: "content/deals/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "category", type: "reference", models: ["Category"], required: true },
            { name: "featuredImage", type: "image", required: false },
            { name: "content", type: "markdown", required: false }
          ]
        },

        // Category Pages (Dynamic URLs)
        {
          name: "CategoryPage",
          type: "page",
          urlPath: "/category/{slug}",
          filePath: "content/categories/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "icon", type: "image", required: false }
          ]
        },

        // Promo Code (Not a page, just data)
        {
          name: "PromoCode",
          type: "data",
          filePath: "content/promocodes/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "brand", type: "reference", models: ["Brand"], required: true },
            { name: "code", type: "string", required: true },
            { name: "discount", type: "string", required: true },
            { name: "category", type: "reference", models: ["Category"], required: true },
            { name: "expiryDate", type: "date", required: false },
            { name: "image", type: "image", required: false },
            { name: "link", type: "string", required: true },
            { name: "verified", type: "boolean", required: true, default: true }
          ]
        }
      ]
    })
  ],

  // SiteMap function to define custom URL paths
  siteMap: ({ documents, models }) => {
    return documents
      .map((document) => {
        switch (document.modelName) {
          case "Page":
            return {
              stableId: document.id,
              urlPath: `/${document.slug}`,
              document,
              isHomePage: document.slug === "index" // Detect if it's the homepage
            };

          case "PromoPage":
            return {
              stableId: document.id,
              urlPath: `/deals/${document.slug}`,
              document,
              isHomePage: false
            };

          case "CategoryPage":
            return {
              stableId: document.id,
              urlPath: `/category/${document.slug}`,
              document,
              isHomePage: false
            };

          default:
            return null;
        }
      })
      .filter(Boolean) as SiteMapEntry[];
  }
});

