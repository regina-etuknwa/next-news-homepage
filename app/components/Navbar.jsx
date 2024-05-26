"use client"

import Image from "next/image";
import Logo from "./logo.svg";
import NavOpen from "./icon-menu.svg";
import NavClose from "./icon-menu-close.svg";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    
  return (
    <div>
        <nav className="p-7">
            <div className="container flex justify-between items-center mx-auto relative">
                <Image
                    src={Logo}
                    alt="Logo"
                    quality={100}
                />
                <div className="hidden lg:flex space-x-4">
                    <Link href='/'>Home</Link>
                    <Link href='/'>New</Link>
                    <Link href='/'>Popular</Link>
                    <Link href='/'>Trending</Link>
                    <Link href='/'>Categories</Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <Image
                            src={NavOpen}
                            alt="Open Nav"
                            quality={100}
                        />
                    </button>
                </div>
            </div>
        </nav>

        {menuIsOpen && (
            <div className="fixed inset-0 z-50 flex items-center">
                <div className="absolute inset-0 bg-blue bg-opacity-70 backdrop-blur-sm" onClick={toggleMenu}></div>
                    <div className="w-3/4 h-full bg-offwhite p-8 fixed right-0 top-0 z-50">
                        <button className="absolute top-7 right-7" onClick={toggleMenu}>
                            <Image
                                src={NavClose}
                                alt="Close Nav"
                                quality={100}
                            />
                        </button>
                        <ul class="space-y-4 mt-20 text-xl">
                            <li><Link href='/' onClick={toggleMenu}>Home</Link></li>
                            <li><Link href='/' onClick={toggleMenu}>New</Link></li>
                            <li><Link href='/' onClick={toggleMenu}>Popular</Link></li>
                            <li><Link href='/' onClick={toggleMenu}>Trending</Link></li>
                            <li><Link href='/' onClick={toggleMenu}>Categories</Link></li>
                        </ul>
                    </div>
            </div>
        )}
    </div>
  )
}
