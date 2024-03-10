'use client'
import Image from "next/image";
import { navBar } from "../../data/index";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({setModal}) => {

    const pathname = usePathname();

    return (<div className="w-full flex justify-center items-center py-8 px-4">
        <nav className="flex md:bg-white  bg-transparent rounded-2xl px-5 py-3 justify-between items-center  z-50 xl:w-[70%] w-[100%] ">
            <Image className="cursor-pointer md:flex hidden" src="/images/mastura-logo.svg" alt="mastura logo" width={45} height={45} quality={100} />
            <Image className="cursor-pointer md:hidden flex" src='/images/mastura-logo-white.svg' width={45} height={45} quality={100} alt="mastura logo"/>
            <ul className="md:flex hidden list-none space-x-2 space-x-reverse ">
                {navBar.map((item, index) => (
                    <Link key={index} href={item.link} className={`hover:text-green-500 cursor-pointer p-2 px-5 rounded-[40px]
                     ${pathname === item.link ? 'bg-[#3B98691A] text-green-500 hover:text-green-500' : ''}`}>
                        {item.title}
                    </Link>
                ))}
            </ul>
            <button onClick={()=>setModal(true)} className="bg-m-green py-2 px-9 rounded-xl md:flex hidden">
                <p className="text-white">
                    شروع
                </p>
            </button>
            <button className="md:hidden flex glass w-10 h-10 rounded-xl justify-center items-center">
                <img src="/icons/hamburger.svg" alt="" />
            </button>
        </nav>
    </div>);
}

export default Navbar;