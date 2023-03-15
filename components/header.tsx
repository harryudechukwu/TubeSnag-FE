import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Hamburger from 'hamburger-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header(): JSX.Element {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <header
            className={`flex justify-between items-center p-4 h-20 sm:px-8 md:px-10 lg:px-16 bg-[#f7f7f7]
            ${inter.className}
            `}>
            <div className="flex gap-2
            items-center">
                <Image src="/logo.svg" alt="TubeSnag" width={30} height={30} />
                <h2
                    className="text-2xl font-bold">
                    tubesnag.
                </h2>
            </div>
            <nav
                className={`
                fixed
                top-0
                bg-gray-100
                ${navIsOpen ? 'right-0' : '-right-full'}
                w-full
                h-full
                transition-all
                duration-500
                ease-in-out
                md:relative
                md:flex
                md:justify-between
                md:items-center
                md:w-auto
                md:h-auto
                md:right-0
                md:bg-transparent
                
                `} >
                <ul
                    className={`flex items-center  flex-col mt-28 gap-10 md:flex-row md:gap-8 md:mt-0 transition-all duration-100 ease-in-out`}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} name={link.name} />
                    ))}

                    <li>
                        <button
                            className="rounded-md px-4 py-2 border border-gray-300
                        hover:border-gray-400
                        transition-all
                        duration-300
                        ease-in-out
                        flex
                        items-center
                        gap-3
                        

                        "
                        >
                            <Image src="/heart.svg" alt="heart" width={20} height={20} />
                            Sponsor Project
                        </button>
                    </li>
                </ul>

            </nav>
            <div
                className='md:hidden
                z-10
                
                '
            >
                <Hamburger toggled={navIsOpen} toggle={setNavIsOpen}
                    duration={0.5}
                />

            </div>
        </header>
    );
};







const navLinks = [
    {
        name: 'What\'s new',
        href: '#',
    },
    {
        name: 'Join Us',
        href: '#',
    },
    {
        name: 'Tools',
        href: '#',
    },
];


type LinkProps = {
    href: string;
    name: string;
};
const Link = ({ href, name }: LinkProps): JSX.Element => (
    <li
        className="text-lg"
    >
        <a href={href}
            className="hover:text-gray-600"
        >{name}</a>
    </li>
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};