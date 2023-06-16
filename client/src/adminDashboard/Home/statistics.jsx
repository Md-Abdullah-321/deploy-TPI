// @flow 
import * as React from 'react';
const Statistics = ({students,teachers,staff}) => {
    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/3 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{students || "5K+"}</h2>
        <p class="leading-relaxed">Students</p>
      </div>
      <div class="p-4 sm:w-1/3 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{teachers || "50+"}</h2>
        <p class="leading-relaxed">Teachers</p>
      </div>
      <div class="p-4 sm:w-1/3 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{staff || "10+"}</h2>
        <p class="leading-relaxed">Staff</p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Statistics;