import { ReactNode } from "react"
import Header from "./Header";

export interface PageProps {
    children: ReactNode;
    classname?: string;
}

export default function Page(props: PageProps) {
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className={`flex-1 w-[1200px] mx-auto ${props.classname ?? ''} py-10`} >{props.children}</main>
        </div>
    )
}