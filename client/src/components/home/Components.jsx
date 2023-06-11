import React from "react";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Search from '../../images/result.svg';
import Routine from '../../images/routine.svg';
import Student from '../../images/student.svg';
import Teacher from '../../images/teacher.svg';


const Components = () => {
    return (
        <div className='w-full md:h-screen bg-gray-100'>
            <div className='w-4/5 mx-auto h-full py-10'>
                <div className="md:flex justify-around items-center h-1/2 border-b-2">
                    {/* Components  */}
                    <div className="bg-white md:w-1/3 h-4/5 rounded-md shadow-md p-10 bg-no-repeat
                    bg-cover mb-5 md:mb-0 md:p-5" data-aos="zoom-in"
                    style={{ backgroundImage: `url(${Search})` }}>
                    <h1 className="text-center font-bold text-lg">RESULTS:</h1>
                    <NavLink className=' hover:underline hover:text-blue-500 flex mt-5 font-light' ><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Computer Technology</NavLink> 
                    <NavLink className=' hover:underline hover:text-blue-500  flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Civil Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Electrical Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Electronics Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Construction Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Telecommunication Technology</NavLink>

                    </div>
                    <div className="bg-white md:w-1/3 h-4/5 rounded-md shadow-md p-10 bg-no-repeat
                    bg-cover mb-5 md:mb-0 md:p-5" data-aos="zoom-in"
                    style={{ backgroundImage: `url(${Routine})` }}>
                        <h1 className="text-center font-bold text-lg">ROUTINE:</h1>
                        <NavLink className=' hover:underline hover:text-blue-500 flex mt-5 font-light' ><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Computer Technology</NavLink> 
                        <NavLink className=' hover:underline hover:text-blue-500  flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Civil Technology</NavLink>
                        <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Electrical Technology</NavLink>
                        <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Electronics Technology</NavLink>
                        <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Construction Technology</NavLink>
                        <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Telecommunication Technology</NavLink>
                    </div>
                </div>
                <div className="md:flex justify-around items-center h-1/2 border-b-2">
                    {/* Components  */}
                    <div className="bg-white md:h-4/5 md:w-1/3 rounded-md shadow-md p-10 bg-no-repeat
                    bg-cover mb-5 md:mb-0 md:p-5" data-aos="zoom-in"
                    style={{ backgroundImage: `url(${Teacher})` }}>
                    <h1 className="text-center font-bold text-lg">TEACHERS AND STAFFS INFO:</h1>
                    <NavLink className=' hover:underline hover:text-blue-500 flex mt-5 font-light' ><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Teachers Info</NavLink> 
                    <NavLink className=' hover:underline hover:text-blue-500  flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Staffs Info</NavLink>
                    </div>

                    <div className="bg-white md:w-1/3 h-4/5 rounded-md shadow-md p-10 bg-no-repeat
                    bg-cover mb-5 md:mb-0 md:p-5" data-aos="zoom-in"
                    style={{ backgroundImage: `url(${Student})` }}>
                    <h1 className="text-center font-bold text-lg">STUDENTS INFO:</h1>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light' ><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Computer Technology</NavLink> 
                    <NavLink className=' hover:underline hover:text-blue-500  flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Civil Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Electrical Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Electronics Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Construction Technology</NavLink>
                    <NavLink className=' hover:underline hover:text-blue-500 flex font-light'><BsArrowRightCircleFill className="mx-2 mt-2 text-md"/>Telecommunication Technology</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Components;