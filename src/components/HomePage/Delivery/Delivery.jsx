import React from 'react';
import deliveryData from "@/Data/delivery-data.json";

function Delivery(props) {

    const containerStyle = {
        width: '280px',
        height: '280px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top -10px center',
        backgroundBlendMode: 'multiply',
        animation: 'morph 8s ease-in-out infinite 1s'
    };

    const {
        deliveryProcess
    } = deliveryData;
    return (
        <>
            <section id="delivery-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <div className="border-top w-[13%] md:w-[4%]"></div>
                        <h1 className="mt-2 font-semibold text-secondary text-3xl">
                            Delivery Process
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-14">
                        {deliveryProcess.map((delivery, index) => (
                            <div key={index} className="col">
                                <div className="wrap flex justify-center items-center"
                                     style={{
                                         backgroundImage: `url(${delivery.dImage})`,
                                         width: '100%',
                                         height: '300px',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundSize: 'cover',
                                         backgroundPosition: 'top -10px center',
                                         backgroundBlendMode: 'multiply',
                                         animation: 'morph 8s ease-in-out infinite 1s'
                                     }}
                                >
                                    <div className="under-content text-center text-white">
                                        <h2 className="text-2xl mb-2 font-semibold">
                                            {delivery.description}
                                        </h2>
                                        <span className="text-sm">
                                            {delivery.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Delivery;