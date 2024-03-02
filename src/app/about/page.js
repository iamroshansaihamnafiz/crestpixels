import React from 'react';
import Hero from "@/components/AboutPage/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhoWe from "@/components/AboutPage/WhoWe/WhoWe";
import Feature from "@/components/AboutPage/Feature/Feature";
import Testimonial from "@/components/AboutPage/Testimonial/Testimonial";

function Page(props) {
    return (
        <>
            <div className="md:-mt-[80px] lg:mt-0">
                <Header/>
            </div>
            <Hero/>
            <WhoWe/>
            <Feature/>
            <Testimonial/>
            <Footer/>
        </>
    );
}

export default Page;