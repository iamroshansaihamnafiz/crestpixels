'use client';
import React from 'react';
import Image from "next/image";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import matterData from "@/Data/matter-data.json";

function Matter(props) {
    const [typeEffect] = useTypewriter({
        words: ['FREELANCER', 'CONTRACTOR', 'SOLE TRADER', 'SMALL BUSINESS OWNER', 'PROFESSIONAL'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })
    const {matterImage, headingPrefix, headingSuffix} = matterData;
    return (
        <>
            <section id="matter-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 items-center gap-4">
                        <div className="col md:col-span-4">
                            <Image src={matterImage} className="" width={400} height={100} alt="matterImage"/>
                        </div>
                        <div className="col md:col-span-8">
                            <h2 className="font-semibold text-3xl">
                                {headingPrefix}
                            </h2>
                            <div className="text-center h-full lg:h-20">
                                <h2 className="mt-2 font-semibold text-5xl text-center bg-primary inline-block p-2">
                                    {typeEffect}
                                    <Cursor cursorColor='black'/>
                                </h2>
                            </div>
                            <h2 className="mt-2 font-semibold text-3xl text-end">
                                {headingSuffix}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Matter;