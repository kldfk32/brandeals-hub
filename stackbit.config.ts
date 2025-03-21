import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        // Pages (Home, About, Contact)
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: false },
            { name: "content", type: "markdown", required: false }
          ]
        },

        // Promo Code Model
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
        },

        // Brand Model
        {
          name: "Brand",
          type: "data",
          filePath: "content/brands/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "logo", type: "image", required: false },
            { name: "website", type: "string", required: false }
          ]
        },

        // Category Model
        {
          name: "Category",
          type: "data",
          filePath: "content/categories/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "icon", type: "image", required: false }
          ]
        }
      ]
    })
  ]
});
