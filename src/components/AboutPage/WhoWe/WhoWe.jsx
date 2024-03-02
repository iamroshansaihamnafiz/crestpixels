import React from 'react';
import Image from "next/image";
import whoWeData from '../../../Data/about-whowe-data.json';

function WhoWe(props) {
    const {image, whoWeAreDatas} = whoWeData;
    return (
        <>
            <section id="who-we-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <div className="border-top"></div>
                        <h1 className="mt-2 font-semibold text-secondary text-3xl">
                            Who We Are
                        </h1>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <Image src={image} width={500} height={100} alt="wImage"/>
                        </div>
                        <div className="col">
                            {whoWeAreDatas.map((whoWeAreData, index) => (
                                <div key={index} className="box mb-6">
                                    <div className="flex items-center gap-4">
                                        <Image src={whoWeAreData.icon} width={50} height={100} alt="wIcon"/>
                                        <h2 className="font-semibold text-3xl text-secondary">
                                            {whoWeAreData.heading}
                                        </h2>
                                    </div>
                                    <p className="mt-4 text-justify text-gray-500">
                                        {whoWeAreData.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhoWe;