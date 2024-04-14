import React from "react";
import Image from "next/image";
import S1 from '@/public/svg/s2.svg';

const features = [
    {
        title: "Optimized athletic output",
        para: "Our beverages fuel your body for peak performance, helping you reach new heights in your sport.",
        href: "#",
        svg: (
            <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="24"
                height="24"
                className="w-8 h-8 text-gray-700"
            >
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
            </svg>
        ),
    },
    {
        title: "Rapid revitalization",
        para: "Recover swiftly after intense workouts or competitions, getting back in the game faster.",
        href: "#",
        svg: (
            <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="24"
                height="24"
                className="w-8 h-8 text-gray-700"
            >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        ),
    },
    {
        title: "Superior hydration",
        para: "Stay perfectly hydrated with our scientifically designed beverages for extended endurance.",
        href: "#",
        svg: (
            <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="24"
                height="24"
                className="w-8 h-8 text-gray-700"
            >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zm4.211-10.724a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
            </svg>
        ),
    },
];

const List1 = () => {
    return (
        <section className="relative isolate bg-[#f5f5f5] py-24 sm:py-28 font-swim overflow-hidden">
            <Image 
                src={S1}
                alt=""
                className="w-[16rem] h-[16rem] absolute -right-5 -top-5 -z-10"
            />
            <div className="mx-auto max-w-full md:max-w-[83%] px-6 lg:px-8">
                <div className="mx-auto pb-16 flex justify-between relative">
                    <div className="flex flex-col gap-8 justify-between">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 text-blue-300"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M21 15.21C20.9318 15.2141 20.7357 15.21 20.6667 15.21C19.6422 15.21 18.7077 14.7524 18 14C17.2923 14.7524 16.3578 15.2099 15.3333 15.2099C15.2643 15.2099 15.0684 15.2141 15.0002 15.21C15.0002 15.21 15 15.9855 15 16.3979C15 18.6121 16.2748 20.4725 18 21C19.7252 20.4725 21 18.6121 21 16.3979C21 15.9855 21 15.21 21 15.21Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                        <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                            Sneak peeks inside
                        </p>
                    </div>

                    <p className="mt-auto font-swim max-w-xl text-right text-2xl leading-8 text-gray-600">
                        Explore the magic behind our unique elixirs: uncover the science and
                        artistry in every sip
                    </p>
                </div>

                <hr />

                <div className="mx-auto pt-16 max-w-2xl lg:max-w-none md:px-10">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col">
                                <dt className="flex  gap-3 text-xl text-gray-700 flex-col">
                                    {feature.svg}
                                    {feature.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-500">
                                    <p className="flex-auto">{feature.para}</p>
                                    
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default List1;
