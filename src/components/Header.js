import { Bars3Icon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { TbHexagonLetterGFilled } from "react-icons/tb";


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-4 bg-primary">
        <a className="font-bold text-black" href=""><TbHexagonLetterGFilled size={70} /></a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {
            toggleMenu && <nav className="block md:hidden">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        }
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="menu h-5" /></button>
    </header >
}