import React from 'react';
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/InsightPage/Hero/Hero";
import WhyUs from "@/components/InsightPage/WhyUs/WhyUs";

function Page(props) {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Hero/>
            <WhyUs/>
            <Footer/>
        </>
    );
}

export default Page;