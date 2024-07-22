'use client'
import { Node, ProductProvider } from "@/data/context/ProductContext"

export default function Layout({children}: Node) {
    return <ProductProvider>{children}</ProductProvider>
}