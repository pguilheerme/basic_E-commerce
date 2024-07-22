import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../public/logo-svg.svg"

export default function Logo() {
    return (
        <Link href='/'>
            <div className="flex flex-col items-center mt-2 w-[70px]">
                <Image src={LogoImage} alt="Image" className="-mt-2 rounded-full"/>
            </div>
        </Link>
    )
}