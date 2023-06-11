import React from "react";

const Location = () => {
    return (
        <div className="w-full h-screen md:h-96 bg-slate-100 py-5">
            <h1 className="text-center font-bold text-4xl text-blue-600">LOCATION</h1>

            <div className="md:flex md:w-4/5 md:mx-auto md:h-5/6 justify-between md:mt-10 mt-16">
                <div className="bg-white mx-auto md:w-4/5 md:h-5/6 md:mr-3 p-10 shadow-md rounded-md w-5/6 h-92" data-aos="zoom-in-right">
                    <h1 className="text-3xl font-medium">Contact:</h1>
                    <ul className="mt-5">
                        <li className="text-light">Address : B. A. U. Madrasah Deola,Tangail- 1900, Bangladesh.</li>
                        <li className="text-light">Phone : 09 21-63237</li>
                        <li className="text-light">Fax : 09 21-63237 (On Request)</li>
                        <li className="text-light">E. Mail : tangpoly1991@gmail.com</li>
                    </ul>
                </div>
                <div className="bg-white w-4/5 md:h-5/6 md:ml-3 mx-auto my-10 md:my-0 h-64" data-aos="zoom-in-left" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58192.5526822347!2d89.920879!3d24.275524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbd757d45253%3A0x908290688169baf7!2sTangail%20Polytechnic%20Institute%2CTangail!5e0!3m2!1sen!2sbd!4v1684687585432!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                className="w-full h-full shadow-md rounded-md border"
                />

               
                </div>
            </div>
        </div>
    )
}

export default Location;