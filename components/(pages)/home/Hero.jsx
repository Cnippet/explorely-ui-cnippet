import React from "react";
import Image from "next/image";

import Hero2 from "@/public/h1.jpg";

const Hero = () => {
    return (
        <section className="relative isolate bg-white overflow-hidden -mt-[6.5rem] font-swir">
            <div className="max-w-full relative w-full h-full isolate">
                <Image
                    src={Hero2}
                    alt="hero-img"
                    quality={100}
                    loading="eager"
                    fill={true}
                    sizes="100vw"
                    className="w-full h-full object-cover object-bottom inset-0 z-[-10]"
                />

                <div className="absolute w-full h-full z-[-9] bg-gradient-to-b from-white/10 via-black/10  to-black/20 overflow-hidden"></div>

                <div className="mx-auto max-w-full md:max-w-[85%] px-6 md:px-8 pb-16 pt-[18.5rem] md:pt-64">
                    <div className="hidden sm:mb-8 sm:flex">
                        <div className="relative rounded-full px-3 py-1 text-base leading-6 bg-gray-500/50 text-white ring-1 ring-gray-100/10 hover:ring-gray-100">
                            The Best Place to Start Your Adventure
                        </div>
                    </div>
                    <h1 className="text-5xl max-w-2xl font-semibold text-white md:text-7xl md:text-left text-center">
                        Embark on <span className=" bg-clip-text text-transparent bg-gradient-to-l to-emerald-400 from-[#96d279]">journeys</span> not just  <span className=" bg-clip-text text-transparent bg-gradient-to-l to-emerald-400 from-[#96d279]">destinations</span> with our trips.
                    </h1>
                    <p className="mt-6 text-base text-center md:text-right md:ml-auto max-w-3xl text-white md:font-light md:text-2xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.
                    </p>
                    <div className="mt-6 ml-auto flex justify-end font-swim">
                        <a
                            href="#"
                            className="-my-2.5 inline-flex justify-center rounded-3xl bg-white px-6 py-1.5 text-base text-black"
                        >
                            Learn more
                        </a>
                        <a
                            href="#"
                            className="-my-2.5 ml-4 inline-flex justify-center rounded-3xl bg-[#96d279] px-6 py-1.5 text-base text-black"
                        >
                            <span>
                                Get treks <span aria-hidden="true">→</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
