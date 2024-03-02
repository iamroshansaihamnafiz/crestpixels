'use client';
import React from 'react';
import heroData from '../../../Data/hero-data.json';

function Hero(props) {
    const {
        heroImage, subtitle, heading, services, button
    } = heroData;
    return (
        <>
            <section id="hero-section" className="mt-0 md:-mt-20 lg:-mt-28">
                <div className="full">
                    <div className="banner flex flex-col justify-center h-[100vh]"
                         style={{
                             backgroundImage: `url(${heroImage})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                         }}
                    >
                        <div className="container">
                            <p className="mt-4 ml-2 md:mt-6 text-secondary sm:text-[15px] md:text-3xl font-semibold">
                                {subtitle}
                            </p>
                            <h2 className="mt-3 ml-2 text-secondary font-bold text-[25px] lg:leading-[65px] sm:text-[45px] md:text-5xl lg:text-[57px]">
                                {heading}
                            </h2>

                            <div className="services-list mt-3 flex items-center">
                                <ul>
                                    {services.map((service, index) => (
                                        <li key={index} className="text-lg">
                                            {service.ser}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className="button mt-8 ml-2 rounded-md text-lg text-black py-2 px-8 border-2 border-secondary hover:bg-secondary hover:text-white transition">
                                {button}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;