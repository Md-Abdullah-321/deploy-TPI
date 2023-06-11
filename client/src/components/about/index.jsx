import React from 'react';



const About = () => {
    return (
        <div className='w-full bg-gray-100 p-5 md:p-0 about-bg'>
            {/* images  */}
            {/* <div class="grid grid-rows-3 grid-flow-col gap-4 md:w-4/5 mx-auto md:p-10">
            <div class="row-span-3 ...">01</div>
            <div class="col-span-2 ...">02</div>
            <div class="row-span-2 col-span-2 ...">03
            </div>
        </div> */}

            <h1 className="text-center font-bold text-4xl font-mono underline py-5 my-5">About Us</h1>

            <div className=' md:w-4/5 mx-auto md:p-10 h-full'>
                {/* Introduction */}
                <div>
                    <h2 className='font-bold uppercase mb-2 mt-10'>Introduction:</h2>
                    <p className='font-light'>Tangail polytechnic institute is one of the best polytechnic in Bangladesh. it was established in 1991 with only 40 students in the 1st year classes of diploma -in- engineering in Electrical technology with growing demands of mid level technical manpower home and abroad the institute has since greatly expanded .</p>
                </div>
                {/* technology */}
                <div>
                    <h2 className='font-bold uppercase mb-2 mt-10'>Technology:</h2>
                    <p className='font-light'>The Institute now offers in 7 Technologies.</p>
                    <ul className='font-light ml-20'>
                        <li> <span className='font-semibold'>1</span>. Computer Technology</li>
                        <li><span className='font-semibold'>2</span>. Electrical Technology</li>
                        <li><span className='font-semibold'>3</span>. Civil Technology</li>
                        <li> <span className='font-semibold'>4</span>. Electronics Technology</li>
                        <li> <span className='font-semibold'>5</span>. Construction Technology</li>
                        <li> <span className='font-semibold'>6</span>. Mechanical Technology</li>
                        <li> <span className='font-semibold'>7</span>. Telecommunication Technology</li>
                    </ul>
                </div>
                {/* Location  */}
                <div>
                    <h2 className='font-bold uppercase mb-2 mt-10'>Location:</h2>
                    <p className='font-light'>The institute is located 1\2 kilometer distence north of Tangail center new bus terminal, easterms side, of Tangail - Mymenshingh road, in front of two other govt. offices Banbhaan of forest dept. B.A.D.C of tangail zone. in the institute premises different green trees created calm and quite environment and natural beauty.</p>
                </div>
                {/* Mission  */}
                <div>
                    <h2 className='font-bold uppercase mb-2 mt-10'>Mission:</h2>
                    <p className='font-light'>The mission of <b>Tangail Polytechnic Institute</b> is absolute commitment to the highest btainable standard of quality service through excellence and concerted efforts of customers, employees and shareholders at all levels of corporate activity in the use of organizational science and knowledge to solve real life business problems.</p>
                </div>
                {/* Vision  */}
                <div>
                    <h2 className='font-bold uppercase mb-2 mt-10'>Vision:</h2>
                    <p className='font-light'>Technical Education are extremely important in improving and progressing a nation's industries while supplying a capable work force. The vision of Tangail Polytechnic Institute is to the highest obtainable standard of quality service through excellence and concerted efforts of customers, employees and shareholders at all levels of corporate activity in the use of organizational science and knowledge to solve real life business problems.</p>
                    <br/>
                    <p className='font-light'>The education that concerns with the professionalism is called Technical education. This education deals practically in the field of trade, commerce, agriculture, medicine & Engineering. For above purpose Tangail polytechnic was established in 1991 under the executive control of the ministry of education, Government of the peoples Republic of Bangladesh. It is acting through the Directorate of technical Education. The academic programs function under the regulation of the Bangladesh Technical education board.</p>
                </div>
            </div>
        </div>
    )
}

export default About;