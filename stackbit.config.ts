import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        // General Pages (Home, About, Contact)
        {
          name: "Page",
          type: "page", // Distinguish as a page model
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: false },
            { name: "content", type: "markdown", required: false }
          ]
        },

        // Promo Code Listing Page (All Deals)
        {
          name: "PromoPage",
          type: "page", // Distinguish as a page model
          urlPath: "/deals/{slug}",
          filePath: "content/deals/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "category", type: "reference", models: ["Category"], required: true },
            { name: "featuredImage", type: "image", required: false },
            { name: "content", type: "markdown", required: false }
          ]
        },

        // Promo Code Model (Not a page, just data)
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
  ]
});

