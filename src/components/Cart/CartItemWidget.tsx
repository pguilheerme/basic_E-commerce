import CartItem from "@/data/model/ItemCart";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";

export interface CartItemProps {
  items: CartItem;
  addProduct?: (item: CartItem) => void;
  removeProduct?: (item: CartItem) => void;
}

export default function CartItemWidget({ items, addProduct, removeProduct }: CartItemProps) {

  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
      <div className="relative w-28 h-28">
        <Image
          src={items.product.image}
          alt={items.product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center flex-1 ">
        <span className="text-xl font-bold">{items.product.name}</span>
        <span className="text-sm text-zinc-400">{items.product.description}</span>
        <div className="flex items-center gap-2 mt-2 text-zinc-400">
            <span>R$ {items.product.price.toFixed(2)}</span>
            <IconX size={20}/>
            <span>{items.quantity}</span>
            <span>=</span>
            <span className="text-yellow-500">
                R$ {(items.product.price * items.quantity).toFixed(2)}
            </span>
        </div>
      </div>
      <div className="flex gap-2 items-center px-5">
        <button onClick={() => removeProduct?.(items)}>
          <IconMinus />
        </button>
        <span className="flex px-4 py-2 rounded-md bg-black">
          {items.quantity}
        </span>
        <button onClick={() => addProduct?.(items)}>
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
