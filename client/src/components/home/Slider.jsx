/* eslint-disable no-useless-concat */
import React from "react";
import Typist from 'react-typist';
import background from '../../images/Slider_two.jpg';
const Slider = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}
        className='w-full h-96 md:h-screen bg-no-repeat
        bg-cover'>
            <div className="w-full h-full bg-gray-800 opacity-70 flex justify-items-start items-center">
                <div className="ml-10 md:ml-56">
                    <h1 className="text-white text-3xl md:text-6xl font-light shadow-sm">Welcome to</h1>
                    <Typist className="text-white text-3xl md:text-6xl font-bold mb-4 shadow-sm">Tangail Polytechnic Institute
                    </Typist>

                   <div className="mt-8">
                         <a href='https://www.facebook.com/tpigov' className="btn text-white bg-green-600 text-lg shadow-md hover:bg-green-700" 
                        >Join Us On Facebook</a>
                   </div>
                </div>
            </div>
        </div>
    )
}


export default Slider;