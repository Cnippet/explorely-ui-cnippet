import React from "react";
import Link from "next/link";

const links = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Products",
        url: "/products",
    },

    {
        title: "About",
        url: "/about",
    },
    {
        title: "Contact",
        url: "/contact",
    },
    // add more data here ...
];

const Navbar = () => {
    return (
        <header className="sticky top-0 isolate z-40 overflow-hidden bg-[#0000] py-3 font-swim opacity-100 backdrop-blur-sm">
            <div className="mx-auto flex max-w-full items-center justify-between px-6 md:max-w-[94%] lg:px-8">
                <div className="flex">
                    <Link href="/" className="-m-1.5 p-1.5 text-2xl text-black">
                        Explorely
                    </Link>
                </div>
                <nav className="hidden rounded-3xl bg-[#ffffff3e] p-1.5 opacity-100 shadow-md backdrop-blur-sm lg:flex lg:gap-x-1">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            className="rounded-3xl px-4 py-2 text-base font-medium leading-6 text-gray-900 hover:bg-white/90"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="hidden lg:flex lg:items-center">
                    {/* <Link
                        href="#"
                        className="-my-2.5 inline-flex justify-center rounded-3xl bg-white px-6 py-1.5 text-base text-black"
                    >
                        Learn more
                    </Link> */}
                    <Link
                        href="#"
                        className="inline-flex justify-center rounded-3xl bg-[#96d279] px-6 py-1.5 text-base text-black"
                    >
                        <span>
                            Get treks <span aria-hidden="true">→</span>
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 rounded-md p-4 text-gray-900">
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
