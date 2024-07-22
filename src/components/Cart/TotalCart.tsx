'use client'
import useProduct from "@/data/hooks/useProduct";
import CartItem from "@/data/model/ItemCart";

export interface TotalCartProps {
    product: CartItem[];
}

export default function TotalCart({ product }: TotalCartProps) {
    const { items } = useProduct()
    const total = product.reduce((total, item) => total + item.product.price * item.quantity, 0)


    const handleSendOrder = () => {
        const message = `Olá, gostaria de fazer um pedido: ${items.map((items) => (
            `${items.quantity}x ${items.product.name} `
        ))}`
        const url = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=${message}`

        window.open(url, '_blank')
    }

    return (
        <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7 mt-5">
            <div className="flex flex-col justify-between">
                <span className=" text-zinc-500">Total</span>
                <span className="text-3xl font-bold text-yellow-500">R$ {total.toFixed(2)}</span>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded-md text-xl hover:opacity-80" onClick={handleSendOrder}>Finalizar</button>
        </div>
    )
}