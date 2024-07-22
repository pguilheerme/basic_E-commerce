"use client";
import ProductCard from "@/components/Products/ProductCard";
import Page from "@/components/template/Page";
import products from "@/data/constants/products";

export default function Home() {
  return (
    <Page>
      <div className="flex justify-center gap-5 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  )
}
