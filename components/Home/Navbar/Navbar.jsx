'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const items = [
        { id: 1, url: '#home', itemName: 'Home' },
        { id: 2, url: '#about', itemName: 'About' },
        { id: 3, url: '#feature', itemName: 'Feature' },
        { id: 4, url: '#testimonial', itemName: 'Testimonial' },
        { id: 5, url: '#blog', itemName: 'Blog' },
        { id: 6, url: '#contact', itemName: 'Contact' },
    ];

    const [navBg, setNavBg] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setNavBg(window.scrollY >= 90);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // Smooth scrolling function
    const handleSmoothScroll = (e, url) => {
        e.preventDefault();
        setMenuOpen(false);
        const section = document.querySelector(url);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden'
      }
      else{
        document.body.style.overflow = 'auto'
      }
    
      return () => {
        document.body.style.overflow = 'hidden'
      }
    }, [menuOpen])
    

    return (
        <nav className={`fixed left-0 right-0 top-0 z-50 transition-all ${navBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="lg:max-w-[80%] max-w-[90%] w-full mx-auto flex items-center justify-between h-[80px]">
                {/* Logo */}
                <h1 className="text-xl md:text-2xl font-bold">
                    <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
                </h1>

                {/* Desktop Menu */}
                <ul className="lg:flex hidden gap-12">
                    {items.map((menuItem) => (
                        <li key={menuItem.id}>
                            <a 
                                href={menuItem.url} 
                                className="text-gray-700 hover:text-blue-500 font-bold transition-all duration-200"
                                onClick={(e) => handleSmoothScroll(e, menuItem.url)}
                            >
                                {menuItem.itemName}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Join Button */}
                <button className="px-8 py-2.5 font-bold text-white bg-blue-700 rounded-full cursor-pointer hover:bg-blue-800 transition-all duration-200 lg:block hidden">
                    Join Now
                </button>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <button className="px-5 py-2.5 font-bold text-white bg-blue-700 rounded-full cursor-pointer hover:bg-blue-800 transition-all duration-200">
                        Join Now
                    </button>
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        aria-label="Toggle Menu" 
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <IoClose className="text-4xl cursor-pointer" /> : <HiMenuAlt3 className="text-4xl cursor-pointer" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center py-5 space-y-4">
                    {items.map((menuItem) => (
                        <a 
                            key={menuItem.id} 
                            href={menuItem.url} 
                            className="text-gray-700 hover:text-blue-500 font-bold transition-all duration-200" 
                            onClick={(e) => handleSmoothScroll(e, menuItem.url)}
                        >
                            {menuItem.itemName}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
