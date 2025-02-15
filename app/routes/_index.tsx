import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";
import ComplementInfo from "~/components/ComplementInfo";
import { getProducts } from "~/api/contentful/contentfulApi";
import { useLoaderData } from "@remix-run/react";
import type { ProductSkeleton } from "~/api/contentful/contentfulApi.d";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Tasteology" }];
};

export const loader = async () => {
  const data = await getProducts();
  return json(data?.items ?? []);

};

export default function Index() {
  const products = useLoaderData<ProductSkeleton[]>();
  return (
    <div className="flex h-screen items-center flex-col">
      <HeroSection />
      <ComplementInfo productsData={products} />
    </div>
  );
}
