import Header from "@/components/Header/Header";
import Hero from "@/components/HomePage/Hero/Hero";
import Matter from "@/components/HomePage/Matter/Matter";
import Feature from "@/components/HomePage/Feature/Feature";
import Delivery from "@/components/HomePage/Delivery/Delivery";
import WhyUs from "@/components/HomePage/WhyUs/WhyUs";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Matter/>
            <Feature/>
            <Delivery/>
            <WhyUs/>
            <Testimonial/>
            <Footer/>
        </>
    );
}
