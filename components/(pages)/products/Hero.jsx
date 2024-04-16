import React from "react";
import Image from "next/image";

import Hero2 from "@/public/h4.jpg";

const Hero = () => {
    return (
        <section className="relative isolate -mt-[6.5rem] overflow-hidden bg-white font-swir">
            <div className="relative isolate h-full w-full max-w-full">
                <Image
                    src={Hero2}
                    alt="hero-img"
                    quality={100}
                    loading="eager"
                    fill={true}
                    sizes="100vw"
                    className="inset-0 z-[-10] h-full w-full object-cover object-bottom"
                />

                <div className="absolute z-[-9] h-full w-full overflow-hidden bg-gradient-to-b from-white/10  via-black/10 to-black/20"></div>

                <div className="mx-auto flex items-center flex-col max-w-full px-6 pb-16 pt-[18.5rem] md:max-w-[85%] md:px-8 md:pt-64">
                    <div className="hidden sm:mb-8 sm:flex">
                        <div className="relative rounded-full bg-gray-500/50 px-3 py-1 text-base leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100">
                            The Best Place to Start Your Adventure
                        </div>
                    </div>
                    <h1 className="max-w-2xl text-center text-5xl font-semibold text-white md:text-7xl">
                        Winning lineup. <br />
                        <span className=" bg-gradient-to-l from-[#96d279] to-emerald-400 bg-clip-text text-transparent">
                        Key to your success.
                        </span>{" "}
                    </h1>
                    <p className="mt-6 max-w-3xl text-center text-base text-white md:text-2xl md:font-light">
                    Fuel your athletic journey with our premium sports elixirs
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
