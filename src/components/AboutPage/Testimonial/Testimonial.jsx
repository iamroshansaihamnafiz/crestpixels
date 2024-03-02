import React from 'react';
import TestimonialImg from '../../../../public/assets/images/testimonial.webp';
import testimonialData from '../../../Data/testimonial-data.json';

function Testimonial(props) {
    const {description, name, jobTitle} = testimonialData;
    return (
        <>
            <section id="testimonial-section" className="py-32 flex items-center justify-center text-center"
                     style={{
                         backgroundImage: `linear-gradient(0deg, rgb(27 30 37 / 57%), rgb(32 38 46 / 42%)),url(${TestimonialImg.src})`,
                         width: '100%',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                     }}
            >
                <div className="container">
                    <p className="text-white">-- Our Promise --</p>
                    <h4 className="mt-3 font-semibold text-white text-2xl">
                        {description}
                    </h4>
                </div>
            </section>
        </>
    );
}

export default Testimonial;