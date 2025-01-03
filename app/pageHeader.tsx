'use client';

import { useState } from "react";
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



export default function PageHeader(){
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle("dark");
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };


    return(
        <>
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">NextFlix</span>
                        <span className="h-8 w-auto"> <LocalMoviesSharpIcon /> </span>
                        <span className="text-sm/6 font-semibold ">NEXT<span className="text-red-700">FLIX</span></span>
                    </a>
                    </div>
                    <div className="flex lg:hidden ">
                        {/* <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer" onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <MenuIcon/> : <CloseIcon />}               
                        </button> */}
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold cursor-pointer"  aria-expanded="false" onClick={toggleTheme}>
                            {isDarkMode ? <NightlightIcon /> : <LightModeIcon />}
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 align-middle">
                        <a href="/genre" className="text-sm/6 font-semibold ">Genre</a>
                        <a href="/about" className="text-sm/6 font-semibold ">About</a>
                        <a href="/contact" className="text-sm/6 font-semibold ">Contact</a>
                       
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    {/* <a href="#" className="text-sm/6 font-semibold ">Log in <span aria-hidden="true">&rarr;</span></a> */}
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold cursor-pointer"  aria-expanded="false" onClick={toggleTheme}>
                            {isDarkMode ? <NightlightIcon /> : <LightModeIcon />}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
    
}
