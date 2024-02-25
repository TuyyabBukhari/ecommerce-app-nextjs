import { type SchemaTypeDefinition } from "sanity";

const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Kid", value: "kid" },
        ],
      },
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
};
