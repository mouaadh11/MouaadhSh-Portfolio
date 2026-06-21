import type { PortfolioCollection } from "@/types/portfolio";

export type AdminFieldType = "text" | "textarea" | "number" | "tags" | "checkbox";

export interface AdminField {
  name: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
  placeholder?: string;
}

export interface AdminCollectionConfig {
  collectionName: PortfolioCollection;
  label: string;
  description: string;
  titleField: string;
  fields: AdminField[];
}

export const adminCollectionConfigs: AdminCollectionConfig[] = [
  {
    collectionName: "projects",
    label: "Projects",
    description: "Portfolio work cards and project links.",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "imageUrl", label: "Image URL", type: "text" },
      { name: "link", label: "Public Link", type: "text" },
      { name: "githubUrl", label: "GitHub URL", type: "text" },
      { name: "blogSlug", label: "Blog Slug", type: "text" },
      { name: "tags", label: "Tags", type: "tags" },
      { name: "featured", label: "Featured", type: "checkbox" },
      { name: "order", label: "Order", type: "number", required: true },
    ],
  },
  {
    collectionName: "education",
    label: "Education",
    description: "Studies, programs, and academic history.",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "institution", label: "Institution", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "blogSlug", label: "Blog Slug", type: "text" },
      { name: "startDate", label: "Start Date", type: "text" },
      { name: "endDate", label: "End Date", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "order", label: "Order", type: "number", required: true },
    ],
  },
  {
    collectionName: "experience",
    label: "Experience",
    description: "Journey and work experience entries.",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "blogSlug", label: "Blog Slug", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "startDate", label: "Start Date", type: "text" },
      { name: "endDate", label: "End Date", type: "text" },
      { name: "order", label: "Order", type: "number", required: true },
    ],
  },
  {
    collectionName: "achievements",
    label: "Achievements",
    description: "Awards and proud moments.",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "blogSlug", label: "Blog Slug", type: "text" },
      { name: "date", label: "Date", type: "text" },
      { name: "imageUrl", label: "Image URL", type: "text" },
      { name: "order", label: "Order", type: "number", required: true },
    ],
  },
  {
    collectionName: "tools",
    label: "Tools",
    description: "Skills, tools, and technology cards.",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "category", label: "Category / Description", type: "text", required: true },
      { name: "iconUrl", label: "Icon URL", type: "text" },
      { name: "level", label: "Level", type: "text" },
      { name: "order", label: "Order", type: "number", required: true },
    ],
  },
  // Blogs are now edited from each collection item's editor and are not shown as a standalone collection.
];
