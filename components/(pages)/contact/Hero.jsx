"use client";
import React from "react";
import S1 from '@/public/svg/watch.svg'
import S2 from '@/public/svg/address.svg'
import S3 from '@/public/svg/contact.svg'
import Image from "next/image";


const info = [
    {
        title: "Open hours",
        image: S1,
        sub: [
            "Mon-Fri: 9 AM - 6 PM",
            "Saturday: 9 AM - 4 PM",
            "Sunday: Closed"
        ]
    },
    {
        title: "Address",
        image: S2,
        sub: [
            "176 W Street, New York,",
            "NY 10014"
        ]
    },
    {
        title: "Get in touch",
        image: S3,
        sub: [
            "Telephone: +1(800)123-4566",
            "Email: info@yoursite.com"
        ]
    },
]

const fea = [
    "Premium Ingredients",
    "Dedication to Quality",
    "Competitive Pricing",
];

const Hero = () => {
    return (
        <section className="relative isolate z-20 -mt-[6.5rem] bg-[#f4f1ec] py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">
                <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-6">

                    <p className="mt-2 text-3xl font-bold text-black sm:text-6xl">
                        Contact us
                    </p>

                    <p className="mt-auto max-w-xl text-center font-swim text-2xl leading-8 text-gray-600">
                        Uncover what sets us apart and makes us your ideal choice for
                        quality sports beverages
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-full">
                <div className="relative mx-auto flex max-w-4xl">
                    <ul className="grid w-full grid-cols-3 gap-5">
                        {info.map((item, i) => (
                            <li
                                key={i}
                                className="flex flex-col h-full items-center gap-3 "
                            >
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        className="w-16"
                                    />
                                    <span className="mt-3 font-swim text-2xl text-gray-700">{item.title}</span>
                                </div>
                                <div className="rounded-xl w-full h-full bg-white  px-6 py-4 text-center">
                                    <ul>
                                        {item.sub.map((k, j) => (
                                            <li key={j} className="text-gray-700 text-md my-1">
                                                {k}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;
