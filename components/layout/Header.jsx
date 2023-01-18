import { useState } from "react";
import Logo from "../ui/Logo";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa"
import Search from "../ui/Search";
import {GiHamburgerMenu, GiCancel} from "react-icons/gi"
import {useRouter} from "next/router";
import Link from "next/link" 
import { useSelector } from "react-redux";

const Header = () => {
    const [isSearchModal,setIsSearchModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const cart = useSelector ((state)=> state.cart)
    const router = useRouter();



  return (
<div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}>
    <div className="container mx-auto text-white flex justify-between items-center h-full">     
            <Logo/>
            <nav
          className={`sm:static h-screen absolute top-0 left-0 sm:w-auto sm:h-auto w-full
           sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                <li className="px-[5px] py-[10px] uppercase hover:text-primary duration-500">
                    <Link href="/">Home</Link>
                </li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary duration-500">
                    <Link href="/menu">Menu</Link>
                </li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary duration-500">
                    <Link href="/about">About</Link>
                </li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary duration-500">
                    <Link href="/reservation">Book Table</Link>
                </li>
            </ul>
            {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">  
            <Link href="/auth/login">
            <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
            </Link>
            <Link href="/cart">
            <span className="relative">
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              <span className="w-4 h-4 text-xs absolute -top-2 -right-3 text-black font-bold grid place-content-center bg-primary rounded-full">{cart.product.length === 0 ? "0" :  cart.product.length}</span>
            </span>
            </Link>
            <button onClick={()=> setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary duration-500 cursor-pointer"/>
            </button>
            <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">
                Order Online
            </button>
            </a>
            <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
    </div>
    {isSearchModal && <Search setIsSearchModal={setIsSearchModal}/>
       }
</div>
  );
};

export default Header