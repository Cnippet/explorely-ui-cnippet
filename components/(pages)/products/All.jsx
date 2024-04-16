import React from "react";
import Image from "next/image";
import Hero1 from "@/public/p1.jpg";
import Hero2 from "@/public/p2.jpg";
import Hero3 from "@/public/p3.jpg";

import S1 from '@/public/svg/torch.svg'
import S2 from '@/public/svg/fire.svg'
import S3 from '@/public/svg/mount.svg'
import S4 from '@/public/svg/waki.svg'

const features = [
    {
        id: 1,
        title: "Push to deploy",
        image: Hero1,
        para: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "/products/simple-queues",
        rate: 499,
        sub: [
            {
                name: "Gluten Free",
                img: S1,
            },
            {
                name: "Vegan 100%",
                img: S2,
            },
            {
                name: "Carb 250kcal",
                img: S3,
            },
            {
                name: "Caffine 60mg",
                img: S4,
            }
        ]
    },
    {
        id: 2,
        title: "SSL certificates",
        image: Hero2,
        para: "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "#",
        rate: 499,
        sub: [
            {
                name: "Gluten Free",
                img: S1,
            },
            {
                name: "Vegan 100%",
                img: S2,
            },
            {
                name: "Carb 250kcal",
                img: S3,
            },
            {
                name: "Caffine 60mg",
                img: S4,
            }
        ]
    },
    {
        id: 3,
        title: "Simple queues",
        image: Hero3,
        para: "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
        href: "#",
        rate: 499,
        sub: [
            {
                name: "Gluten Free",
                img: S1,
            },
            {
                name: "Vegan 100%",
                img: S2,
            },
            {
                name: "Carb 250kcal",
                img: S3,
            },
            {
                name: "Caffine 60mg",
                img: S4,
            }
        ]
    },
];

const List3 = () => {
    return (
        <section className="relative z-20 bg-[#f4f1ec] py-24 font-swir sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[85%] lg:px-8">

                <div className="relative mx-auto flex max-w-6xl justify-between">
                    <div className="flex flex-col justify-between gap-8">
                        <p className="mt-2 text-3xl font-bold text-[#96d279] sm:text-5xl">
                            Beverage universe
                        </p>
                    </div>

                    <p className="mt-auto max-w-xl text-right font-swim text-2xl leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                        Suspendisse.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl md:px-16 sm:mt-20 lg:mt-12 lg:max-w-none">
                    <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-2 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex flex-col gap-2 md:p-3">
                                <dt className="flex flex-col gap-y-5 ">
                                    <a
                                        href={feature.href}
                                        className="relative overflow-hidden rounded-2xl"
                                    >
                                        <Image
                                            src={feature.image}
                                            alt="post-img"
                                            className="aspect-video w-full transform object-cover duration-300 ease-in-out hover:scale-110 sm:aspect-[2/1] lg:aspect-[3/1.65]"
                                        />
                                    </a>
                                </dt>
                                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-500 bg-white p-5 rounded-3xl">
                                    <h2 className="font-swim text-3xl leading-7 text-black/90">
                                        {feature.title}
                                    </h2>

                                    <p className="mt-4 line-clamp-2 flex-auto text-lg">
                                        {feature.para}
                                    </p>

                                    <p className="mt-4 text-4xl text-gray-900">₹{feature.rate}</p>


                                    <div className="mt-4 bg-[#f0f4ed] rounded-xl px-4 py-2">
                                        <ul className="grid grid-cols-2">
                                            {
                                                feature.sub.map((item, j) => (
                                                    <li key={j} className="flex gap-4 text-black/80">
                                                        <Image
                                                            src={item.img}
                                                            alt=""
                                                            className="w-7 h-7"
                                                        />
                                                        {item.name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <p className="mt-6">
                                        <a
                                            href={feature.href}
                                            className="-my-2.5 inline-flex justify-center rounded-3xl bg-[#96d279] px-6 py-1.5 text-base text-black"
                                        >
                                            See details
                                        </a>
                                        <a
                                            href="#"
                                            className="-my-2.5 ml-4 inline-flex justify-center rounded-3xl bg-white border px-6 py-1.5 text-base text-black"
                                        >
                                            Add to cart
                                        </a>
                                    </p>
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
