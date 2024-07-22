"use client";
import CartItemWidget from "@/components/Cart/CartItemWidget";
import NoCartItems from "@/components/Cart/NoCartItems";
import TotalCart from "@/components/Cart/TotalCart";
import Page from "@/components/template/Page";
import useProduct from "@/data/hooks/useProduct";

export default function CarPage() {
  const { items, addProduct, removeProduct } = useProduct();

  return (
    <Page classname="flex flex-col gap-10">
      {items.length !== 0 ? (
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <CartItemWidget
              key={item.product.id}
              items={item}
              addProduct={(item) => addProduct(item.product)}
              removeProduct={(item) => removeProduct(item.product)}
            />
          ))}
          <TotalCart product={items}/>
        </div>
      ) : (
        <NoCartItems />
      )}
    </Page>
  );
}
