import { createContext, ReactNode, useEffect, useState } from "react"
import { Product } from "../model/Product";
import CartItem from "../model/ItemCart";
import useLocalStorage from "../hooks/useLocalStorage";

export interface Node {
    children: ReactNode
}

type ProductContextProps = {
    items: CartItem[];
    itemsQuantity: number;
    addProduct: (item: Product) => void;
    removeProduct: (item: Product) => void;
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

export function  ProductProvider({children}: Node) {
    const [items, setItems] = useState<CartItem[]>([])
    const { set, get } = useLocalStorage()

    useEffect(() => {
        const cart = get('cart')
        if (cart) {
            setItems(cart)
        }
    },[get])

    function addProduct(product: Product) {
        const index = items.findIndex((i) => i.product.id === product.id)

        if(index === -1) {
            changeItems([...items, {product, quantity: 1}])
        }else {
            const newItems = [...items]
            newItems[index].quantity++
            changeItems(newItems)
        }
    }

    function removeProduct(product: Product) {
        const newItems = items.map((i) => {
            if(i.product.id === product.id) {
                i.quantity--
            }
            return i
        }).filter((i) => i.quantity > 0)
        changeItems(newItems)
    }

    function changeItems(newItems: CartItem[]) {
        setItems(newItems)
        set('cart', newItems)
    }

    return(
        <ProductContext.Provider
            value={{
                items,
                addProduct,
                removeProduct,
                get itemsQuantity() {
                    return items.reduce((total, item) => total + item.quantity, 0)
                },
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;