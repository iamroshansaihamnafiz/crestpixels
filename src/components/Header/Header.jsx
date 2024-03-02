'use client';
import React, {useState, useEffect} from 'react';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import Link from "next/link";
import {HiOutlineBars3} from "react-icons/hi2";
import {AiOutlineClose} from "react-icons/ai";
import Image from "next/image";
import navbarData from '../../data/header-data.json';
import {usePathname} from "next/navigation";

function Header(props) {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };

    const {logo, menus, button} = navbarData;

    {/* For Active Link */
    }
    const pathname = usePathname();

    {/* For Sticky Navbar */
    }
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 80); // Change to 80 pixels if you want to add/remove the class at that point
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fixedStyle = {
        position: isScrolled ? 'fixed' : 'relative',
        top: isScrolled ? '0' : 'auto',
        backgroundColor: isScrolled ? '#ffffff' : 'transparent',
    };

    const containerClasses = `lg:flex py-6 lg:py-4 mt-0 lg:mt-0 lg:bg-transparent w-full ${
        isScrolled ? '' : 'md:mt-[80px]'
    }`;
    return (
        <>
            <section id="header-section" className="relative">
                <header style={fixedStyle} className={containerClasses}>
                    <div className="container flex items-center justify-between">

                        <Link href='/' className="logo">
                            <Image src={logo} className="h-[45px] w-full" width={100} height={100} alt="Logo"/>
                        </Link>

                        <nav className="hidden lg:block overflow-hidden lg:overflow-visible">
                            <div className="container flex">
                                <div className="navbar-items flex items-center justify-between flex-grow pl-12">
                                    <div className="flex items-center space-x-10 capitalize">
                                        {menus.map((item, index) => {
                                            const cleanPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
                                            const cleanLink = item.link.endsWith('/') ? item.link.slice(0, -1) : item.link;
                                            const isActive = cleanPathname === cleanLink;

                                            return (
                                                <li key={index} className="list-none">
                                                    <Link href={item.link}
                                                          className={` ${isActive ? 'active border-b-2 border-secondary' : ''} hover:border-b-2 hover:border-secondary text-lg text-secondary font-semibold transition`}>
                                                        {item.text}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                        <button
                                            className="button rounded-md text-lg text-white py-2 px-8 border-2 border-secondary bg-secondary hover:bg-transparent hover:text-secondary hover:scale-90 transition">
                                            {button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="w-8 text-center text-black cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full">
                    <div className="navbar-wrapper pl-12 pt-6 space-y-4">
                        {menus.map((item, index) => {
                            const cleanPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
                            const cleanLink = item.link.endsWith('/') ? item.link.slice(0, -1) : item.link;
                            const isActive = cleanPathname === cleanLink;

                            return (
                                <li key={index} className="list-none">
                                    <Link href={item.link}
                                          className={` ${isActive ? 'active border-b-2 border-secondary' : ''} hover:border-b-2 hover:border-secondary text-lg text-secondary font-semibold transition`}>
                                        {item.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;