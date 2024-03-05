import React from 'react';
import Image from "next/image";
import featureData from '../../../Data/feature-data.json';

function Feature(props) {
    const {
        featuredServices
    } = featureData;
    return (
        <>
            <section id="feature-section" className="bg-[#F5F5F5] pb-10">
                <div className="container pt-14">
                    <div className="head-wrap">
                        <div className="border-top w-[13%] md:w-[4%]"></div>
                        <h1 className="mt-2 font-semibold text-secondary text-3xl">
                            Featured Services
                        </h1>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredServices.map((featureService, index) => (
                            <div key={index}
                                 className="mb-2 col hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col text-center items-center bg-white p-8">
                                <Image src={featureService.image} className="" width={50} height={100} alt="fImage"/>
                                <h3 className="mt-3 text-2xl font-semibold text-secondary">
                                    {featureService.heading}
                                </h3>
                                <p className="text-gray-500 mt-5">
                                    {featureService.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feature;