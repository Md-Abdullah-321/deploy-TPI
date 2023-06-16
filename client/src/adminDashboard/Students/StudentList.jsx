import React, { useEffect, useState } from 'react';

const StudentList = () => {
    const callProfilePage = async () => {
        try{
          const res = await fetch('/admin/students', {
            method: "GET", 
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials:"include"
          });
    
          const data = await res.json();
          setUserData(data);
          if(data.error){
            throw new Error(res.error);
          }
        }catch(err){
            console.log(err);
        }
      }

      useEffect(() => {
      callProfilePage();
    }, []);
    
    const [userData, setUserData] = useState([]);
    console.log(userData);
    const StudentLI = ({name, email, department, roll, registration}) => {
      return (
        <div className='flex justify-evenly items-center my-4 text-center bg-blue-50 py-2 rounded-lg shadow-sm'>
            <li className='w-1/5 list-none font-light'>{name}</li>
            <li className='w-1/5 list-none font-light'>{email}</li>
            <li className='w-1/5 list-none font-light'>{department}</li>
            <li className='w-1/5 list-none font-light'>{roll}</li>
            <li className='w-1/5 list-none font-light'>{registration}</li>
        </div>
      )
    }
    return (
        <div className='w-full md:w-5/6 mx-auto'>
            <h3 className='text-center text-3xl uppercase mb-10 text-blue-600 font-bold'>All Students of TPI</h3>

            {/* //Heading  */}
            <div className='flex justify-evenly items-center my-4 text-center bg-blue-50 py-2 rounded-lg shadow-sm'>
            <li className='w-1/5 list-none font-bold'>Name</li>
            <li className='w-1/5 list-none font-bold'>Email</li>
            <li className='w-1/5 list-none font-bold'>Department</li>
            <li className='w-1/5 list-none font-bold'>Roll</li>
            <li className='w-1/5 list-none font-bold'>Registration</li>
        </div>
            {userData.map((item) => <StudentLI name={item.name} email={item.email} department={item.department} roll={item.roll} registration={item.registration}/>)}
               
        </div>
    );
};

export default StudentList;