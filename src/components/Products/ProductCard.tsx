import useProduct from "@/data/hooks/useProduct";
import { Product } from "@/data/model/Product"
import Image from "next/image";

export interface ProductCardProps {
    product: Product;

}

export default function ProductCard({product}: ProductCardProps) {
    const {name, description, price, image} = product
    const { addProduct } = useProduct()

    return(
        <div className="flex flex-col w-72 bg-zinc-900 rounded-md">
            <div className="relative w-72 h-52">
                <Image src={image} alt={name} fill className="object-cover"/>
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="flex-1 text-sm text-zinc-400">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="">R$ {price}</span>
                    <button className="border border-cyan-500 shadow-white rounded-md px-4 py-1 text-sm transition-all hover:opacity-80 bg-cyan-500" onClick={() => addProduct(product)}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}