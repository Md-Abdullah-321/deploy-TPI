// @flow 
import * as React from 'react';
import Statistics from './statistics';
const Dashboard = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <h3 className='text-center text-3xl uppercase text-shadow-md text-blue-600 font-semibold'>Tangail Polytechnic Institute</h3>
            <Statistics/>
        </div>
    );
};
export default Dashboard;