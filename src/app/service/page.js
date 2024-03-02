import React from 'react';
import Header from "@/components/Header/Header";
import Hero from "@/components/ServicePage/Hero/Hero";
import Feature from "@/components/ServicePage/Feature/Feature";
import Footer from "@/components/Footer/Footer";

function Page(props) {
    return (
        <>
            <div className="md:-mt-[80px] lg:mt-0">
                <Header/>
            </div>
            <Hero/>
            <Feature/>
            <Footer/>
        </>
    );
}

export default Page;