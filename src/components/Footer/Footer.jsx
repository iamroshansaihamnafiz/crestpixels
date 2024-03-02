'use client';
import React from 'react';
import Link from "next/link";
import footerData from '../../Data/footer-data.json';
import ScrollToTop from "react-scroll-to-top";

function Footer(props) {
    const {heading, description, button, contactEmail, quickLinks} = footerData;
    return (
        <>
            <footer className="bg-secondary py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
                        <div className="col-span-6 text-white">
                            <h2 className="font-bold text-3xl">{heading}</h2>
                            <p className="mt-3 text-md">
                                {description}
                            </p>
                            <button
                                className="button mt-6 rounded-md text-lg text-white py-2 px-8 border-2 border-white hover:border-primary hover:bg-primary hover:scale-90 hover:text-secondary transition">
                                {button}
                            </button>
                        </div>
                        <div className="mt-4 lg:mt-0 col-span-3 text-white">
                            <ul className="space-y-2">
                                <h4 className="font-semibold text-2xl mb-4">Quick Links</h4>
                                {quickLinks.map((quickLink, index) => (
                                    <li key={index} className="hover:text-primary transition">
                                        <Link href={quickLink.link}>{quickLink.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 lg:mt-0 col-span-3 text-white">
                            <ul className="space-y-2">
                                <h4 className="font-semibold text-2xl mb-4">Contact</h4>
                                <li>
                                    {contactEmail}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="scrollTop">
                    <ScrollToTop smooth color="white" width="20" height="20"
                                 className="flex items-center justify-center"
                                 style={{
                                     background: '#102239',
                                 }}
                    />
                </div>
            </footer>
        </>
    );
}

export default Footer;