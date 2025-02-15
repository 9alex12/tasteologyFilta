import { EntryFieldTypes } from "contentful";

export type ProductSkeleton = {
  contentTypeId: "product";
  fields: Product;
};

export type Product={
    title: string;
    text: string;
    image: EntryFieldTypes.Asset;
  }