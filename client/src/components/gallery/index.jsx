import React from "react";
import imgOne from '../../images/Slider_one.jpg';
import imgTwo from '../../images/Slider_two.jpg';
import imgFive from '../../images/slider_five.jpg';
import imgFour from '../../images/slider_four.jpg';
import imgSix from '../../images/slider_six.jpg';
import imgThree from '../../images/slider_three.jpg';

const Gallery = () => {
    return ( 
        <div>
            <section className="overflow-hidden text-neutral-700">
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
                    <h1 className="text-center mb-10 text-5xl font-bold uppercase text-blue-600">Gallery</h1>
                    <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex md:w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={imgFour} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={imgSix} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={imgThree} />
                        </div>
                    </div>
                    <div className="flex md:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={imgOne} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={imgTwo} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={imgFive} />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;