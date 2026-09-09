import { notFound } from "next/navigation";
import { ProductPageView, PRODUCTS } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return { title: "Products | Aiden OS" };
  return {
    title: `${product.title} | Aiden OS`,
    description: product.blurb,
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!(slug in PRODUCTS)) notFound();
  return <ProductPageView slug={slug as keyof typeof PRODUCTS} />;
}
