// @flow 
import * as React from 'react';

const TeacherList = ({name, designation, department, education, phone, email}) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Honorable Teachers</h1>
      {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{name}</h2>
          <h4>Designation: {designation}</h4>
          <h6>Department: {department}</h6>
          <p className="leading-relaxed text-base">Education: {education}</p>
          <p className="leading-relaxed text-base">Mobile No: {phone}</p>
          <p className="leading-relaxed text-base">Email    : {email}</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default TeacherList;