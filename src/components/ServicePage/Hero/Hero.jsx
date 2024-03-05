import React from 'react';
import serviceHeroData from '../../../Data/service-hero-data.json';

function Hero(props) {
    const {heroImage, heading, description} = serviceHeroData;
    return (
        <>
            <section id="hero-section">
                <div className="full">
                    <div className="banner flex flex-col justify-center h-[50vh] lg:h-[85vh]"
                         style={{
                             backgroundImage: `linear-gradient(rgb(34 31 68 / 74%), rgb(4 7 11 / 57%)), url(${heroImage})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                         }}
                    >
                        <div className="container text-white text-center">
                            <h2 className="mt-3 ml-2 font-bold text-5xl">
                                {heading}
                            </h2>
                            <p className="mt-3 text-lg">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;