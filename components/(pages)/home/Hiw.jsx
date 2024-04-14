import React from "react";
import Image from "next/image";
import Hero1 from "@/public/p1.jpg";
import Hero2 from "@/public/p2.jpg";
import Hero3 from "@/public/p3.jpg";

import S1 from '@/public/svg/star.svg';
import S2 from '@/public/svg/bulb.svg';
import S3 from '@/public/svg/puzzle.svg';

const features = [
    {
        id: 1,
        title: "Push to deploy",
        image: Hero1,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "#",
        svg: S1,
        class: "bg-[#f4f1ec]"
    },
    {
        id: 2,
        title: "SSL certificates",
        image: Hero2,
        para: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "#",
        svg: S2,
        class: "bg-[#f0f4ed]"
    },
    {
        id: 3,
        title: "Simple queues",
        image: Hero3,
        para: "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
        href: "#",
        svg: S3,
        class: "bg-[#f5f5f5]"
    },
];

const List3 = () => {
    return (
        <section className="bg-white relative py-24 sm:py-28 font-swir z-20">
            <div className="mx-auto max-w-full md:max-w-[85%] px-6 lg:px-8">

                <div className="mx-auto flex justify-between">
                    <div className=" flex flex-col gap-8">
                        <p className="mt-2 text-3xl font-bold text-black sm:text-5xl">
                            Elevate your athletic prowess
                        </p>
                        <a
                            href="#"
                            className="w-fit inline-flex justify-center rounded-3xl bg-[#96d279] px-6 py-2 text-base text-black"
                        >
                            Explore equipments
                        </a>
                    </div>


                    <p className="mb-auto font-swim text-right text-2xl leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                        Suspendisse.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="mx-auto grid max-w-xl grid-rows-1 gap-y-10 lg:max-w-none lg:grid-rows-3">
                        {features.map((feature) => (
                            <div key={feature.id} className="sticky top-36 flex flex-row md:p-3 gap-x-3">
                                <dt className={`flex w-full flex-col justify-between my-auto gap-y-5 text-3xl h-full  p-16 rounded-3xl ${feature.class}`}>
                                    <Image
                                        src={feature.svg}
                                        alt=""
                                        className="w-16 h-16"
                                    />
                                    <div className="flex flex-col gap-4">
                                        <h3 className=" font-swim">{feature.title}</h3>

                                        <p className=" text-lg text-gray-500">{feature.para}</p>
                                    </div>
                                </dt>
                                <dd className="max-w-lg w-full overflow-hidden rounded-3xl text-gray-500">

                                    <Image
                                        src={feature.image}
                                        alt="post-img"
                                        className="w-full aspect-video h-full object-cover hover:scale-110 transform ease-in-out duration-300"
                                    />

                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default List3;
