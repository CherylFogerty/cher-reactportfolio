/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import headshot from "../../assets/images/5Cln.jpg";

function About(props) {
    const {
        setPage
    } = props;

    const [hidden, setHidden] = useState('hidden'
    )
    return (
        <main className="lg:relative bg-gray-50">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 pt-10 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block">Detail Oriented Creative</span>
                        
                        
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Former Broadcast Engineer, 25+ year experience.
                    </p>
                    <div className={hidden} >
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Works well under pressure.
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Currently undertaking a full stack web development program through Vanderbilt University.
                        </p>
                    </div>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#" onClick={() => setPage('resume')}
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                View Resume
                            </a>
                        </div>
                        {hidden === 'hidden' &&
                            // eslint-disable-next-line react/jsx-no-comment-textnodes
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a onClick={() => setHidden('')}
                                    className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                    Learn More
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div
                className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img className="absolute inset-0 w-full h-full object-cover"
                    src={headshot}
                    alt="Headshot of Cheryl Fogerty" />
            </div>
        </main>
    )
}

export default About;