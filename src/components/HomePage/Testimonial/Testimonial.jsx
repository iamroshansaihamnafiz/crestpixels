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
                    <h4 className="font-semibold text-white text-2xl">
                        {description}
                    </h4>
                    <p className="mt-3 text-white">-{name}, <span>{jobTitle}</span></p>
                </div>
            </section>
        </>
    );
}

export default Testimonial;