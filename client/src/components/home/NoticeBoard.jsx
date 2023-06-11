import React from "react";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

const NoticeBoard = () => {
    return (
        <div className="w-full h-96 bg-gray-100" data-aos="fade-right"  >
            <h1 className="text-green-600 text-4xl text-center font-bold py-10 shadow-sm">Notice Board</h1>
            <div className="h-3/5 bg-gray-50 w-5/6 p-5 mx-auto mb-5 rounded-lg md:h-3/5 md:w-3/5 md:p-10 shadow-md">
                <NavLink className=' hover:underline hover:text-blue-500 flex'><BsArrowRightCircleFill className="mx-2 mb-2 text-md"/>পবিত্র রমজান মাসের অফিস সময়সূচী সংক্রান্ত প্রজ্ঞাপন।</NavLink> <br/>
                <NavLink className=' hover:underline hover:text-blue-500 flex'><BsArrowRightCircleFill className="mx-2 mb-2 text-md"/>শিক্ষার্থীদের বাস্তব প্রশিক্ষণ/২০২২ এর ভাতার প্রদানের নোটিশ ।</NavLink><br/>
                <NavLink className=' hover:underline hover:text-blue-500 flex'><BsArrowRightCircleFill className="mx-2 mb-2 text-md"/>শিক্ষার্থীদের বাস্তব প্রশিক্ষণ/২০২২ এর ভাতার প্রদানের নোটিশ ।</NavLink>
            </div>
        </div>
    )
}

export default NoticeBoard;