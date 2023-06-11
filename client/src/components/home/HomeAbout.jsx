import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPicture from '../../images/slider_three.jpg';

const HomeAbout = () => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate('/about')
    }
    return (
        <div className='md:p-10 py-10' data-aos="fade-left">
            <h1 className="text-center font-bold text-4xl py-5 mb-5">About Us</h1>
            <div className=" md:flex justify-evenly w-4/5 mx-auto">
                <div className="flex-auto md:w-32 md:h-64">
                    <img className="h-64 w-full shadow-md rounded-lg" src={AboutPicture} alt='About'/>
                </div>
                <div className="flex-auto mt-5 md:mt-0 md:w-64 md:p-10">
                    <p className="font-bold uppercase">Introduction:</p>
                    <p className="font-light">
                        Tangail polytechnic institute is one of the best polytechnic in Bangladesh. it was established in 1991 with only 40 students in the 1st year classes of diploma -in- engineering in Electrical technology with growing demands of mid level technical manpower home and abroad the institute has since greatly expanded...
                    </p>
                    <button className="btn bg-blue-600 mt-7" onClick={HandleClick}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;