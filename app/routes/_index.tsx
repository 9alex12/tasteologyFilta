import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";
import ComplementInfo from "~/components/ComplementInfo";

export const meta: MetaFunction = () => {
  return [
    { title: "Tasteology" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center flex-col">
      <HeroSection />
      <ComplementInfo />
    </div>
  );
}
